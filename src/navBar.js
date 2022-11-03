 import React from "react";
 import {Link , useMatch , useResolvedPath} from 'react-router-dom'

 function Navbar(){
    return (
        
            <nav className="flex  bg-blue-900  justify-between text-white ">
                <Link to ="/" className=" text-4xl p-1 flex items-center "> Site Name </Link>
               
                <ul className="flex   ">
                    < CustomLink to= "/pricing" className=" p-2 m-4 text-white flex items-center  text-xl hover:bg-gray-500"> Pricing  </CustomLink>
                    < CustomLink to= "/about" className=" p-2 m-4 flex items-center  text-white text-xl hover:bg-gray-500"> About  </CustomLink>
                    < CustomLink to= "/form" className=" p-2 m-4 flex items-center  text-white text-xl hover:bg-gray-500"> Forms  </CustomLink>
                </ul>
            </nav>
    
    );
 }

 function CustomLink ({to , children , ...props}){
    const resolvePath =useResolvedPath(to)
    const isActive = useMatch({ path : resolvePath.pathname, end:true })
    return (
        <li className={ isActive ? "bg-red-400" : "" }>
            <Link to = {to} {...props}>
                { children } 
            </Link>
        </li>
    );
 }

 export default Navbar