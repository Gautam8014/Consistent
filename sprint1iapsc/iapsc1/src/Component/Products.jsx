import { useState } from "react";
import { useEffect } from "react";
import Productcart from "./Productcart";
import Pagenation from "./pagenation";
function Product() {
 const[state, setState] = useState([]);
 const[currentpages, setCurrentpages] = useState(1);
//  console.log(state);
// console.log(state.length);

let totalelements = state.length
console.log(totalelements)

 useEffect(() => {
    fetchdata()
 }, [currentpages, state])

 let limit = 3
 let totalpages = Math.ceil(totalelements/limit)
 console.log(totalpages);

 const fetchdata = async() => {
    // let url = `http://localhost:8080/products?_page=${pages}&_limit=${limit}`
    let url = `http://localhost:8080/products`
    const response = await fetch(url)
    const data= await response.json();
    console.log(data);
    setState(data);
 }
const handlechange = () => {
    
}

    return(
  <div>
    
     <h1> Store</h1>
     {/* <Pagenation totalpages= {totalpages} currentpages={currentpages} handlechange={handlechange}/>  */}
     <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
    {
        
        state.map((e) =>{
            return(
                <div>
                 <Productcart  e={e}/>  
                
                </div>
                
            )
        })
    }
    
    </div>
{/*       
      <button onClick={()=>{setPages(pages - 1)}} disabled = {pages===1}>Previous</button>
      <button>{pages}</button>
      <button onClick={()=> {setPages(pages+1)}}>Next</button> */}

        </div>
    )
}
export default Product;