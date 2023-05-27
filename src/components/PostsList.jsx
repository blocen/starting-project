import styles from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';


function PostsList() {

    const [enteredBody, setEnteredBody] = useState('enter body');
    const [enteredAuthor, setEnteredAuthor] = useState('enter name');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            { modalIsVisible && (
                <Modal onClose={ hideModalHandler }>
                    <NewPost
                        onBodyChange={ bodyChangeHandler } onAuthorChange={ authorChangeHandler }
                    />
                </Modal>
            ) }

            <ul className={ styles.posts }>
                <Post author={ enteredAuthor } text={ enteredBody } />
                <Post author="Lisa" text="more text here" />
                <Post author="Silvia" text="more text here" />
            </ul>
        </>
    );
}

export default PostsList;
