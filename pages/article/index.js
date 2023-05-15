import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ArticleItem from '../../components/ArticleItem';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticles } from '@/features/article/articleSlice';
import Navigation from '@/components/Navigation';

const Articles = ({ article }) => {
  const { articles } = useSelector((store) => store.article);
  const dispatch = useDispatch();
  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    dispatch(updateArticles(article));
  }, [article]);

  return (
    <section>
      <hr />

      <h1 className="text-center">Article Lists</h1>

      <hr className="mb-5" />

      {articles.map((post) => {
        return <ArticleItem key={post.id} {...post} />;
      })}

      <Navigation page={page} category="article" />
    </section>
  );
};
export default Articles;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { page } = query;

  const headers = {
    Authorization:
      'Bearer aa1009acd96fe583b46a15e04a2652f5ceae2b017e43b2a4b9f91f1dd565a315',
  };

  try {
    const { data } = await axios.get(
      `https://gorest.co.in/public/v2/posts?page=${page}&per_page=5`,
      { headers }
    );
    return {
      props: {
        article: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
