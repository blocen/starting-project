import styles from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState, useEffect } from 'react';


function PostsList(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            setPosts(data.posts);
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

            <ul className={ styles.posts }>
                {
                    // <Post author={ enteredAuthor } text={ enteredBody } />
                    // <Post author="Lisa" text="more text here" />
                    posts.map((post) => <Post key={ post.body } author={ post.author } text={ post.body } />)
                }

            </ul>
        </>
    );
}

export default PostsList;
