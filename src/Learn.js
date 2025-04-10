
// import {useState} from "react";
// export default function Learn(){
//     const user = {
//         name: 'Hedy Lamarr',
//         imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//         imageSize: 90,
//       };
//       const products = [
//         { title: 'Cabbage', isFruit: false, id: 1 },
//         { title: 'Garlic', isFruit: false, id: 2 },
//         { title: 'Apple', isFruit: true, id: 3 },
//       ];
//       const showAlert=()=>{
//      seCount(count+1)
//       }
//       const [count,seCount]=useState(0)
     
//      const cup =()=> {
//         setCount(count+1)
//        return  <h2>Tea cup for guest #{count + 1}</h2>
        
//       }
//     return(
//         <div style={{justifyContent:"center"}}>
//             <h1>Welcome to the App</h1>
//             <button onClick={showAlert}> I am button</button>
//             <p>Hello there .<br/>How do you do?<br/>
//             <h2>{user.name}</h2></p>
//             <img style={{  color:"red",   width: "100px",  height: "100px",borderRadius:"50%",borderWidth:"5px",borderColor:"red",borderStyle:"solid"}} className="avatar" 
//             src={user.imageUrl} alt={'Photo of ' + user.name}/>
//             <div>
//                 {products.map((item)=>
//                     <h6>{item.title}</h6>
//                 )}
//             </div>
//             {count}
//            { cup()}
//            { cup()}
//         </div>
//     )
// }