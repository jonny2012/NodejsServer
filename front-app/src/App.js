import { useEffect, useState } from "react";
import axios from "axios";
import PostData from "./components/PostData";

function App() {
  const [backendData, setBackendData] = useState()
  const pictureUrl = "http://localhost:5000/d7c46e61-f8a6-41fb-8d09-6efd16efffd8.jpg"
  const url =  "http://localhost:5000/api/posts"
  useEffect(() => {

    async function FetchData() {
      try {
        const response = await axios.get(url)
        let data = await response.data
        setBackendData(data)
      }
      catch (error) {
        console.log(error)
      }
    }
    FetchData()
  }, []);


  return (
    <div className="App">
      {/* {(
        typeof backendData === "undefined") ?
        <p>Loading</p>
        :
          <div style={{width:"500px", height:"500px"}}>
          <img style={{width:"100%",height:"auto"}} src={pictureUrl} alt="nature"></img>
          { backendData.map((data, i)=>{
            return(
              <p key={i}>{data.author}</p>
            )
          })}
          </div>
      } */}
  <PostData/>
    </div>
  );
}

export default App;
