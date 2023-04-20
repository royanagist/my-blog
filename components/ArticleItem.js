import Link from 'next/link';
import styles from '../styles/ArticleItem.module.css';

const ArticleItem = ({ id, title, body }) => {
  const route = `/article/${id}`;
  return (
    <article className={styles.container}>
      <Link href={route}>
        <h4>{title}</h4>
        <p>{body}</p>
      </Link>
    </article>
  );
};
export default ArticleItem;
