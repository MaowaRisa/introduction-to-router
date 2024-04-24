import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h2>Post details of: {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;