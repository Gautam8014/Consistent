function Productcart({e}){
    return(
        <div Key={e.id}>
         <h2>{e.title}</h2>
                         <img src= {e.image} height="200px" width="200px" />
                         <h3>{e.category}</h3>
                         <h3>{e.price}</h3>
    
        </div>
    )
    }
    export default Productcart;