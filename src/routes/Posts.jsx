// import { useState } from "react";
// import Post from "./components/Post";
import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
    // return <h1>Hello World again!</h1>;
    // return <Post />;

    // const [modalIsVisible, setModalIsVisible] = useState(false);

    // function hideModalHandler() {
    //     setModalIsVisible(false);
    // }

    // function showModalHandler() {
    //     setModalIsVisible(true);
    // }

    return (
        <>
            <main>
                <Outlet />
                <PostsList />

                {/* // isPosting={ modalIsVisible }
                // onStopPosting={ hideModalHandler } */}

            </main>;
        </>
    );
}

export default Posts;
