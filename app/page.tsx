"use client"

import Image from "next/image";
import About from "./about/page";
import { useEffect } from "react";

export default function Home() {


  useEffect(() => {
    console.log("Home page mounted");
  }, []);


  return (
    <>
  <h1 style={{fontSize:"200px"}}>Project Created</h1>
  <About/>  
  </>
  );
}
