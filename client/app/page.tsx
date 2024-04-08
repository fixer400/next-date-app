'use client'
import { useEffect } from "react";
import SearchBar from "./searchBar";
import Menu from "./menu";
import MenuComp from "./menu";

export default function Home() {
  // useEffect(()=>{
  //   fetch('http://localhost:8080/api/hello').then((res)=>
  //     res.json()).then(data=>console.log(data))
  // },[])
  return (
    <main className="App">
      <SearchBar/>
      <MenuComp/>
    </main>
  );
}
