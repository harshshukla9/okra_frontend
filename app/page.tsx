import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HomePage/>
      <Footer/>
      
  
    </div>
   
  );
}
