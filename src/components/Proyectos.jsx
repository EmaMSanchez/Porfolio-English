import React from 'react'
import Link from 'next/link';
const Proyectos = ({datos}) => {
  return (
    
    <div className="container flex-row w-[290px] md:w-auto">
    {
      datos.map((dato,index) =>(
        <Link key={index} href={dato.link} target="_blank">
        <div  className='container flex justify-center gap-4 sombra border-red-600 border-b-[1px] '>
        <div className='container flex-row m-2 md:m-4'>
        <h5 className='font-bold text-[9px] mb-2 md:text-2xl'>{dato.titulo}</h5>
        <p className='font-normal text-[8px] mb-10 md:text-base md:mb-24'>{dato.descripcion}</p>
        </div>
        <div className="mt-[20px] container w-[120px] h-[75px]  md:w-[650px] md:h-[200px]  bg-cover  md:mb-10" style={{ backgroundImage: `url(${dato.imagen})`, backgroundPosition: 'center' }}>
        </div>
        </div>
        </Link>
      ))
    }
 
  </div>
  )
}

export default Proyectos