import JsLogo from "@/components/logos/JsLogo";
import Link from 'next/link';
import NextLogo from '@/components/logos/NextLogo';
import ReactLogo from '@/components/logos/ReactLogo';
import AngularLogo from '@/components/logos/AngularLogo';
import CLogo from '@/components/logos/CLogo';


const Proyectos = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 w-auto">
     <div className="container flex gap-3 justify-center m-5">
     <p className="font-light text-sm w-auto">S E L E C T </p> 
     <p className="font-light text-sm w-auto"> A  </p>
     <p className="font-light text-sm w-auto">L A N G U A G E </p>
     </div>
    <div className='container flex justify-center w-auto'>
    <Link href="/proyectos/next" className='logo ml-8'>
    <NextLogo></NextLogo>
   </Link>
    </div>
    <div className="container flex justify-center w-auto md:gap-72 overflow-visible">
   <Link href="/proyectos/javaScript" className='logo js mr-[-30px] md:mr-0 '>
   <JsLogo></JsLogo>
   </Link> 
   <Link href="/proyectos/react" className='logo react '>
    <ReactLogo></ReactLogo>
   </Link>
   <Link href="/proyectos/angular" className='logo ng ml-[-30px] md:ml-0 '>
   <AngularLogo></AngularLogo>
   </Link>
    </div>
    <div className='container flex justify-center mb-[30px] mt-16'>
    <Link href="/proyectos/c" className='logo c'>
     <CLogo></CLogo>
   </Link>
    </div>
    </main>
  )
}

export default Proyectos