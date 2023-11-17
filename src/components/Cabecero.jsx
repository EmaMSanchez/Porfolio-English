"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Cabecero = () => {
  const activo = usePathname();

  const esActivo = (ruta) => {
    return activo === ruta || activo.startsWith(ruta + "/");
  }

  return (
    <nav className='container flex justify-center gap-8 mt-7 w-auto md:justify-end '>
      <Link href='/'>
        <div className={esActivo("/") ? "relative pb-2  border-b-2 border-red-600/75 w-auto" : "relative pb-[10px] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300/75 after:transition-all hover:after:w-full"}>Home</div>
      </Link>
      <Link href='/proyectos'>
        <div className={esActivo("/proyectos") ? "relative pb-2  border-b-2 border-red-600/75 w-auto" : "relative pb-[10px] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300/75 after:transition-all hover:after:w-full"}>Proyectos</div>
      </Link>
      <Link href='/contacto'>       
       <div className={esActivo("/contacto") ? "relative pb-2  border-b-2 border-red-600/75 w-auto" : "relative pb-[10px] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300/75 after:transition-all  hover:after:w-full"}>Contacto</div>
       </Link>
    </nav>
  )
}

export default Cabecero;