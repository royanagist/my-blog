import { openModal } from '@/features/modal/modalSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const UserDetail = ({ name, email, gender, status }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <section className="d-flex justify-content-center">
      <div className="card" style={{ width: ' 70vw' }}>
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <h5 className="card-subtitle mb-2 text-secondary">{email}</h5>
        </div>
        <div className="card-body">
          <p className="card-text fw-semibold">gender: {gender}</p>
          <p className="card-text fw-semibold">status: {status}</p>
        </div>
        <div className="d-grid gap-2 col-4  mx-auto">
          <button
            className="btn btn-primary mt-5"
            onClick={() => dispatch(openModal())}
          >
            edit
          </button>
          <button className="btn btn-danger mb-3" onClick={() => router.back()}>
            Back
          </button>
        </div>
      </div>
    </section>
  );
};
export default UserDetail;
