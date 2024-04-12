import PropTypes from "prop-types";

function Post(props){
    return (
        <div>
            <h1>{props.author}</h1>
            <h3>{props.content}</h3>
        </div>
    )
}

Post.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Post;