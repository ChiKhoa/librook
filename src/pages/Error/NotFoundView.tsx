import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <div className="container">
      <div className="title">Uh-oh...</div>
      <div className="message">
        The page you are looking for may have been moved, deleted, or possibly
        never existed.
      </div>
      <div className="error-code">404</div>
      <Link to={"/auth/sign-in"} className="button">
        Go home
      </Link>
    </div>
  );
};

export default NotFoundView;
