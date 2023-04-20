import { getUsers, removeUser } from '@/features/user/userSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const UserItem = ({ id, name, page }) => {
  const dispatch = useDispatch();

  return (
    <article className="mt-5 d-flex justify-content-between">
      <Link href={`/user/${id}`}>
        <h3>{name}</h3>
      </Link>
      <button
        className="btn btn-danger"
        onClick={async () => {
          await dispatch(removeUser(id));
          await dispatch(getUsers(page));
        }}
      >
        delete
      </button>
    </article>
  );
};
export default UserItem;
