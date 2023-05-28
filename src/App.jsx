import { useState } from "react";
// import Post from "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
    // return <h1>Hello World again!</h1>;
    // return <Post />;

    const [modalIsVisible, setModalIsVisible] = useState(false);

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function showModalHandler() {
        setModalIsVisible(true);
    }

    return (
        <>
            <MainHeader onCreatePost={ showModalHandler } />
            <main>
                <PostsList
                    isPosting={ modalIsVisible }
                    onStopPosting={ hideModalHandler }
                />
            </main>;
        </>
    );
}

export default App;
