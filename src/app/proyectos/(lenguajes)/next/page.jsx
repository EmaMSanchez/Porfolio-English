import Proyectos from "@/components/Proyectos";
import NextLogo from "@/components/logos/NextLogo";
import { NextDato } from "@/mock/Items";

export default function Next() {
  const datos = NextDato;

  return (
    <main className="flex flex-col items-center  p-12">
    <div
      href="/proyectos/angular"
      className="logo justify-center  mb-24 md:mb-36"
    >
      <NextLogo></NextLogo>
    </div>
    <Proyectos datos={datos}></Proyectos>
  </main>
  )
  }