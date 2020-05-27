import React ,{ useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    
    useEffect(() => {
      const result = props.getData?.(props.language).then(response => setBookData(response));
},[props])

return(

  <div>
    <ul>
        {
         bookData === null
         ?<p>now loding...</p>
        :bookData.data.items.map((x,index) => <li> 
          <p> key={index}>{x.volumeInfo.title} {x.volumeInfo.authors} </p>
         
          {x.volumeInfo.imageLinks === undefined
           ? <p></p>  
           :<img class="card-img" src={x.volumeInfo.imageLinks.thumbnail}/> }
         
         </li>)
        
         }
     
     </ul>
  </div> 

  );
}
   
export default Booklist;

