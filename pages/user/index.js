import CreationModal from '@/components/CreationModal';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import UserItem from '@/components/UserItem';
import { openModal } from '@/features/modal/modalSlice';
import { getUsers, setPage } from '@/features/user/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
  const { users, isLoading } = useSelector((store) => store.user);
  const { isOpen } = useSelector((store) => store.modal);
  const router = useRouter();
  const { page } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(page));
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section>
      {isOpen && <CreationModal />}

      <hr />

      <div className="row">
        <h1 className="col-8">User List</h1>
        <div className="d-grid gap-2 d-md-block col-4">
          <Link href="/user/search">
            <button className="btn btn-outline-primary ms-3">
              {' '}
              Search user
            </button>
          </Link>
          <button
            className="btn btn-outline-primary ms-3"
            onClick={() => dispatch(openModal())}
          >
            Create User
          </button>
        </div>
      </div>

      <hr className="mb-5" />

      {users.map((user) => {
        return (
          <UserItem key={user.id} id={user.id} name={user.name} page={page} />
        );
      })}

      <Navigation page={page} category="user" />
    </section>
  );
};
export default User;
