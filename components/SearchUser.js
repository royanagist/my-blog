import { searchUser } from '@/features/user/userSlice';
import { useDispatch } from 'react-redux';

const SearchUser = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const param = formData.get('search');

    await dispatch(searchUser(param));
  };

  return (
    <form className="row mb-3" onSubmit={handleSubmit}>
      <div className="form-group col-10">
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Search user by name"
          name="search"
        />
      </div>
      <button type="submit" className="btn btn-primary col-2">
        Search
      </button>
    </form>
  );
};
export default SearchUser;
