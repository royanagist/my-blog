import Link from 'next/link';

const Navigation = ({ page, category }) => {
  const pageNumber = Number(page);

  return (
    <footer>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pageNumber === 1 ? (
            <li className="page-item disabled">
              <Link
                className="page-link"
                href={`/${category}?page=${pageNumber - 1}`}
              >
                Previous
              </Link>
            </li>
          ) : (
            <li className="page-item">
              <Link
                className="page-link"
                href={`/${category}?page=${pageNumber - 1}`}
              >
                Previous
              </Link>
            </li>
          )}

          {pageNumber > 4 && (
            <>
              <li className="page-item">
                <Link className="page-link" href={`/${category}?page=1`}>
                  1
                </Link>
              </li>
              <li className="page-item">
                <p className="page-link">...</p>
              </li>
            </>
          )}

          {pageNumber > 2 && (
            <li className="page-item">
              <Link
                className="page-link"
                href={`/${category}?page=${pageNumber - 2}`}
              >
                {pageNumber - 2}
              </Link>
            </li>
          )}
          {pageNumber > 1 && (
            <li className="page-item">
              <Link
                className="page-link"
                href={`/${category}?page=${pageNumber - 1}`}
              >
                {pageNumber - 1}
              </Link>
            </li>
          )}

          <li className="page-item active">
            <p className="page-link">{page}</p>
          </li>

          {pageNumber < 3 && (
            <li className="page-item">
              <Link
                className="page-link"
                href={`/${category}?page=${pageNumber + 1}`}
              >
                {pageNumber + 1}
              </Link>
            </li>
          )}
          {pageNumber < 2 && (
            <li className="page-item">
              <Link
                className="page-link"
                href={`/${category}?page=${pageNumber + 2}`}
              >
                {pageNumber + 2}
              </Link>
            </li>
          )}
          <li className="page-item">
            <Link
              className="page-link"
              href={`/${category}?page=${pageNumber + 1}`}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Navigation;
