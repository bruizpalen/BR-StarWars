import { Link } from "react-router-dom";
import "../index.css";

const ErrorPage = () => {
  return (
    <div className="error-page d-flex flex-column justify-content-center align-items-center mx-3">
      <h1>Error 404</h1>
      <p>{`The page you are trying to open does not exit. Check that you typed correctly the url :).`}</p>
      <Link to={"/"}>
        <button className="btn btn-primary">Take me back to home page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
