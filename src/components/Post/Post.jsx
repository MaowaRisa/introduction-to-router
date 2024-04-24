import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '2px solid green',
        padding: '5px',
        borderRadius: '10px'
    }
    return (
        <div style={postStyle}>
            <h4>Post of ID: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show more..</Link>
        </div>
    );
};

export default Post;