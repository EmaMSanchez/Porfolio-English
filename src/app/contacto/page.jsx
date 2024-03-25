"use client"
import TextoEffect2 from '@/components/TextoEffect2';
import Titulo from '@/components/Titulo';
import React, { useState } from 'react'

const Contacto = () => {

  
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [bb, setB] = useState(false);
  const [c, setC] = useState(false);

 const rutas = (ruta) =>{
  window.open(ruta, '_blank');
 }

 const mail = () =>{
  window.location.href = 'mailto:emamsanchez07@gmail.com?subject=Contacto&body=Hola,%20mi%20nombre%20es';
 }

  return (
    <main className="flex-col items-center justify-center p-10 ">
      <Titulo/>
      <TextoEffect2/>
      <div className='flex flex-col items-center justify-center mt-10'>
        <button className='boton border-[1px] border-red-600 rounded-[4px]' onClick={()=>mail()}>CONTACT</button>
      </div>
      <div className='mt-14 border-b-[1px] border-red-600 justify-center items-center w-auto'></div>
      <div className='flex flex-row items-center justify-center gap-16 mt-6'>
  
          <button
          className='w-8'
          onMouseEnter={() => setB(true)}
          onMouseLeave={() => setB(false)}
          onClick={()=>rutas("https://www.instagram.com/emamsanchez/")}
        >
          <img
            src={bb ? "/instagram (2).png" : "/instagram (1).png"}
            alt="instagram"
            className='move'
            
          />
          </button>
          <button
          className='w-8'
          onMouseEnter={() => setC(true)}
          onMouseLeave={() => setC(false)}
        >
          <img
            src={c ? "/correo-electronico (1).png " : "/correo-electronico.png"}
            alt="mail"
            className='move'
            onClick={()=>mail()}
           
          />
          </button>
          <button
          className='w-8'
          onMouseEnter={() => setIsLinkedinHovered(true)}
          onMouseLeave={() => setIsLinkedinHovered(false)}
          onClick={()=>rutas("https://www.linkedin.com/in/emanuel-sanchez-4051741a6/")}
        >
          <img
            src={isLinkedinHovered ? "/linkedin (1).png" : "/linkedin.png"}
            alt="linkedin"
            className='move'
           
          />
          </button>
      </div>
    </main>
  );
}

export default Contacto