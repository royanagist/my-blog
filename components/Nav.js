import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarTogglerDemo01">
          <Link className="nav-link navbar-brand" href="/">
            <h1 className="text-primary p-2">my-blog</h1>
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-4" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold fs-4"
                href="/article?page=1"
              >
                Article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-4" href="/user?page=1">
                User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
