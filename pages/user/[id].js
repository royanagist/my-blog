import UpdateModal from '@/components/UpdateModal';
import UserDetail from '@/components/UserDetail';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ArticlePage = ({ name, email, gender, status, id }) => {
  const { isOpen } = useSelector((store) => store.modal);
  const { isLoading } = useSelector((store) => store.user);
  const router = useRouter();
  if (!name) {
    return (
      <>
        <h1>Oppsss...Something went wrong</h1>
        <p>The user you are looking for may not exist again</p>
        <p>
          Please
          <span onClick={() => router.back()}> go back</span>
        </p>
      </>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {isOpen && (
        <UpdateModal
          name={name}
          email={email}
          gender={gender}
          status={status}
          id={id}
        />
      )}
      <UserDetail name={name} email={email} gender={gender} status={status} />
    </>
  );
};
export default ArticlePage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;

  const headers = {
    Authorization:
      'Bearer aa1009acd96fe583b46a15e04a2652f5ceae2b017e43b2a4b9f91f1dd565a315',
  };
  try {
    const { data } = await axios.get(
      `https://gorest.co.in/public/v2/users/${id}`,
      { headers }
    );
    return {
      props: {
        id: data.id,
        name: data.name,
        email: data.email,
        gender: data.gender,
        status: data.status,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
