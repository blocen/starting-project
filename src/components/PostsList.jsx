import styles from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState, useEffect } from 'react';


function PostsList(props) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            setPosts(data.posts);
            setIsLoading(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            }
        });
        setPosts((prevPosts) => {
            return [postData, ...prevPosts];
        });
    }

    return (
        <>
            { props.isPosting && (
                <Modal onClose={ props.onStopPosting }>
                    <NewPost
                        onCancel={ props.onStopPosting }
                        onAddPost={ addPostHandler }
                    />
                </Modal>
            ) }

            { !isLoading && posts.length > 0 && (
                <ul className={ styles.posts }>
                    {
                        // <Post author={ enteredAuthor } text={ enteredBody } />
                        // <Post author="Lisa" text="more text here" />
                        posts.map((post) => <Post key={ post.body } author={ post.author } text={ post.body } />)
                    }
                </ul>
            ) };
            { isLoading && (
                <div style={ { textAlign: 'center', color: 'white' } } >
                    <p>Loading...</p>
                </div >)
            }
        </>
    );
}

export default PostsList;
