import styles from './Post.module.css';

// const names = ['Maria', 'Lisa', 'Sofia'];

function Post(props) {
    // const n = Math.random();
    // const chosenName = n < 0.5 ? names[0] : names[1];

    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            {/* <p>({})</p> */}
            <p className={styles.text}>{props.text}</p>
        </li>
    )
}

export default Post;
