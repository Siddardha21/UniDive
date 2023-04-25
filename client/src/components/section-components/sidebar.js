// import React, { useState, useEffect } from 'react';
// import {SidebarData} from './sidebardata';

// function Sidebar() {

//     const[universities, setUniversities] = useState([])

//     useEffect(()=>{
//         fetch("http://localhost:8080/uniDive/getAll")
//         .then(res=>res.json())
//         .then((result)=>{
//             setUniversities(result);
//         })
//     },[])

//   return (
//     <div className='sidebar'>
//         {universities.map((data, key) => (
//             <div key={data.id}>
//                 {data.uniname}
//                 {data.address}
//             </div>
//         ))}
//         <div className='side'>
//             <ul className='stylesidebar'>
//                 { SidebarData.map((value, key) => {
//                     return (
//                         <li key = {key} className='innerlist'
//                         id={window.location.pathname === value.link ? "inState" : ""}
//                         onClick={() => {window.location.pathname = value.link;}}>
//                             <div id='icon'>{value.icon}</div>
//                             {" "}
//                             <div id='title'>
//                                 {value.title}
//                             </div>
//                         </li>
//                     )
//                 })} 
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Sidebar