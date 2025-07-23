"use client";
import Link from "next/link";

const A=({name,href})=>{
    return(
    <Link href={href} className="navbar-brand text-black text-[1rem] hover:text-gray-600" >{name}</Link>
    );
};
export default A;