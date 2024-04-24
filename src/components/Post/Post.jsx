import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '2px solid green',
        padding: '5px',
        borderRadius: '10px'
    }
    const navigate = useNavigate();
    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post of ID: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show more..</Link>
            <button onClick={handleShowDetail}>Click for details </button>
        </div>
    );
};

export default Post;