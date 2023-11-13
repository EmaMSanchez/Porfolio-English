import React from 'react'
import JsLogo from "@/components/logos/JsLogo";
import Link from 'next/link';
import NextLogo from '@/components/logos/NextLogo';
import ReactLogo from '@/components/logos/ReactLogo';
import AngularLogo from '@/components/logos/AngularLogo';
import CLogo from '@/components/logos/CLogo';


const Proyectos = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
     <div className="container flex gap-3 justify-center m-5">
     <p className="font-light text-sm">S E L E C C I O N E</p> 
     <p className="font-light text-sm"> U N </p>
     <p className="font-light text-sm"> L E N G U A J E </p>
     </div>
    <div className='container flex justify-center'>
    <Link href="/proyectos/next" className='logo ml-8'>
    <NextLogo></NextLogo>
   </Link>
    </div>
    <div className="container flex justify-center gap-72 ">
   <Link href="/proyectos/javaScript" className='logo js '>
   <JsLogo></JsLogo>
   </Link> 
   <Link href="/proyectos/react" className='logo react '>
    <ReactLogo></ReactLogo>
   </Link>
   <Link href="/proyectos/angular" className='logo ng '>
   <AngularLogo></AngularLogo>
   </Link>
    </div>
    <div className='container flex justify-center mt-16'>
    <Link href="/proyectos/c" className='logo c'>
     <CLogo></CLogo>
   </Link>
    </div>
    </main>
  )
}

export default Proyectos