// import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
    // const stateData = useState('init value');
    // stateData[0]; // current value
    // stateData[1]; // function to update value

    // const [currentValue, setCurrentValue] = useState('init value');

    // const [enteredBody, setEnteredBody] = useState('init value');

    // imperative approach
    // document.querySelector( 'textarea' ).addEventListener( 'change', function () { } );

    // with react, declarative approach
    // assign functions to properties: onChange, onKeyDown etc.
    // function changeBodyHandler(event) {
    //     // console.log(event.target.value);
    //     setEnteredBody(event.target.value);
    // }

    return (
        <form className={ classes.form }>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={ 3 } onChange={ props.onBodyChange } />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={ props.onAuthorChange } />
            </p>
        </form>
    );
}

export default NewPost;
