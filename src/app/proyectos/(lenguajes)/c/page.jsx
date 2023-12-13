import Proyectos from "@/components/Proyectos";
import CLogo from "@/components/logos/CLogo";
import { CDato } from "@/mock/Items";

export default function React() {
  const datos = CDato;

  return (
    <main className="flex flex-col items-center  p-12">
    <div
      href="/proyectos/angular"
      className="logo c  justify-center  mb-24 md:mb-36"
    >
      <CLogo></CLogo>
    </div>
    <Proyectos datos={datos}></Proyectos>
  </main>
  )
  }