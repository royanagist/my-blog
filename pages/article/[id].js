import ArticleDetail from '@/components/ArticleDetail';
import axios from 'axios';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ArticlePage = ({ article, comments, author }) => {
  const { page } = useSelector((store) => store.article);

  if (!article) {
    return (
      <section>
        <h4 className="text-center">Oppsss...Something went wrong</h4>
        <p className="mt-5 text-center">
          The article you are looking for may not be available again
        </p>
        <p className="text-center">
          Please
          <Link className="text-primary" href={`/article?page=${page}`}>
            {' '}
            go back
          </Link>
        </p>
      </section>
    );
  }
  return (
    <ArticleDetail article={article} comments={comments} author={author} />
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
    const res = await axios.all([
      axios.get(`https://gorest.co.in/public/v2/posts/${id}`, { headers }),
      axios.get(`https://gorest.co.in/public/v2/posts/${id}/comments`, {
        headers,
      }),
    ]);
    const { data } = await axios.get(
      `https://gorest.co.in/public/v2/users/${res[0].data.user_id}`,
      {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      }
    );
    return {
      props: {
        article: res[0].data,
        comments: res[1].data,
        author: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
