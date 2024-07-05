import { useState } from "react"
import axios from "axios"

function PostData() {
    const [state, setState] = useState({
        author: "",
        title: "",
        content: ""
        // picture: ""
    });

    const postUrl = "http://localhost:5000/api/posts"
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            author: state.author,
            title: state.title,
            content: state.content,
            // picture: state.picture
          
        };
        axios
            .post(postUrl, userData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
            <label htmlFor="author" >Author<input
                type="text"
                name="author"
                value={state.author}
                onChange={handleChange}
            ></input></label>
            < label htmlFor="title"> Title<input
                type="text"
                name="title"
                value={state.title}
                onChange={handleChange}
            ></input></label>
            <label htmlFor="content" >Content<input
                type="text"
                name="content"
                value={state.content}
                onChange={handleChange}
            ></input></label>
            {/* <label htmlFor="picture" >Choose Image <input
                type="file"
                name="picture"
                value={state.picture}
                onChange={handleChange}
            ></input></label> */}
            <button style={{ width: "100px" }} type="submit"> Send Data</button>
        </form>
    )
}
export default PostData