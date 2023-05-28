import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
    // const stateData = useState('init value');
    // stateData[0]; // current value
    // stateData[1]; // function to update value

    const [enteredBody, setEnteredBody] = useState('enter body');
    const [enteredAuthor, setEnteredAuthor] = useState('enter name');

    // imperative approach
    // document.querySelector( 'textarea' ).addEventListener( 'change', function () { } );

    // with react, declarative approach
    // assign functions to properties: onChange, onKeyDown etc.
    // function changeBodyHandler(event) {
    //     // console.log(event.target.value);
    //     setEnteredBody(event.target.value);
    // }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        props.onAddPost(postData);
        props.onCancel();
    }

    return (
        <form className={ classes.form } onSubmit={ submitHandler }>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={ 3 } onChange={ bodyChangeHandler } />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={ authorChangeHandler } />
            </p>
            <p className={ classes.actions }>
                <button
                    type="button"
                    onClick={ props.onCancel }>Cancel</button>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}

export default NewPost;
