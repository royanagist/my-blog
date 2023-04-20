import Nav from './Nav';
import Meta from './Meta';
// import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="container mt-5">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
