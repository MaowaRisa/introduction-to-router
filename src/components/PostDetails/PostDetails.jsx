import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    console.log(postId);
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Post details of: {title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;