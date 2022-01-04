import React,{useState} from "react";
import axios from "axios";
import Item from "./Item";
import "./style.css";

function App(props) {
  const [data, setData] = useState([])

  React.useEffect(()=>{
    async function getData(){
      try{
        const response = await axios.get("https://fakestoreapi.com/products");
        
        console.log(response.data);
        setData(response.data);
      }catch(error){
        console.log(error);
      }
    }
    getData();
  },[]);

  return (
    <>
      {
        data.map((item)=>{
          return <Item item={item} key={item.id}/>
        })
      }
    </>
  );
}

export default App;


