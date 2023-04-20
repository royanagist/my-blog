import { closeModal } from '@/features/modal/modalSlice';
import modalStyles from '../styles/Modal.module.css';
import { useDispatch } from 'react-redux';
import { updateUser } from '@/features/user/userSlice';
import { useRouter } from 'next/router';

const UpdateModal = ({ name, email, gender, status, id }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    const params = { ...newUser, id };

    await dispatch(updateUser(params));
    await dispatch(closeModal());
    await router.push(`/user/${id}`);
  };

  return (
    <aside className={modalStyles.container}>
      <div className={modalStyles.modal}>
        <h4 className="text-center">Edit user</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              defaultValue={name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              defaultValue={email}
            />
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="emailInput" className="form-label fw-semibold">
                Gender
              </label>
              <select
                defaultValue={gender}
                className="form-select"
                name="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col mb-3">
              <label htmlFor="emailInput" className="form-label fw-semibold">
                Status
              </label>
              <select
                defaultValue={status}
                className="form-select"
                name="status"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary">
              confirm
            </button>
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
};
export default UpdateModal;
