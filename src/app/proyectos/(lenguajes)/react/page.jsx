 
import ReactLogo from "@/components/logos/ReactLogo";
import { ReactDato } from "@/mock/Items";
import Proyectos from "@/components/Proyectos";

export default function React() {
  const datos = ReactDato;

  return (
   
    <main className="flex flex-col items-center  p-12">
      <div href="/proyectos/angular" className="logo react  justify-center  mb-24 md:mb-36">
       <ReactLogo></ReactLogo>
      </div>
      <Proyectos datos={datos}></Proyectos>
    </main>
  );
  }