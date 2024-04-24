import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Oops!!</h2>
            <p>Sorry an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;