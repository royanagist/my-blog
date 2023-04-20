import { useRouter } from 'next/router';

const ArticleDetail = ({ article, author, comments }) => {
  const router = useRouter();
  return (
    <section>
      <div>
        <h4>{article.title}</h4>
        <p className="text-secondary">
          Author: {author.name}
          {author.message === 'Resource not found' && 'deleted user'}
        </p>
        <p>{article.body}</p>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="mt-3 btn btn-outline-primary"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>

      {comments.length > 1 ? (
        <h4 className="mt-5">{comments.length} Comments</h4>
      ) : (
        <h4 className="mt-5">{comments.length} Comment</h4>
      )}
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <h5 className="mt-3">{comment.name}</h5>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>no Comment yet</div>
      )}
    </section>
  );
};
export default ArticleDetail;
