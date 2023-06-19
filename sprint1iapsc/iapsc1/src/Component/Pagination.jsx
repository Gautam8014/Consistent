


    function Pagenation({totalpages, currentpages, handlechange}) {
        console.log(currentpages);
    //    let totalpages = 10
       const arr = new Array(totalpages).fill(0)
       const btn = arr.map((e, i)=> <button onClick={() => {currentpages=i+1}}>{i+1}</button>)
    
        return(
            
          btn
            
        )
    }
    export default Pagenation;