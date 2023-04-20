import SearchUser from '@/components/SearchUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const search = () => {
  const { filteredUsers } = useSelector((store) => store.user);
  const router = useRouter();

  return (
    <section>
      <h1 className="text-center">Search User</h1>
      <SearchUser />
      {filteredUsers.length === 0 && <h1>No user found</h1>}
      {filteredUsers.map((user) => {
        return (
          <Link key={user.id} href={`/user/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
        );
      })}
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="mt-3 btn btn-outline-primary"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </section>
  );
};
export default search;
