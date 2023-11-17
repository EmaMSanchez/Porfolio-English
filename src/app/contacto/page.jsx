"use client"
import React, { useState } from 'react'

const Contacto = () => {

  
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [a, setA] = useState(false);
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
      <h1 className="font-extrabold text-5xl text-center w-auto">Contacto</h1>
      <div className="text-center items-center justify-center mt-10">
        <p className='text-center w-auto'>
          Estoy en busca de oportunidades futuras para contribuir a proyectos que desafíen e inspiren.
        </p>
        <p className='text-center w-auto'>
        Me emociona la posibilidad de trabajar contigo y llevar tus ideas al siguiente nivel.
        </p>
        <p className='text-center w-auto'>
          ¡No dudes en ponerte en contacto!
        </p>
        <p className='text-center w-auto'>
          ¡Hagamos que tu visión cobre vida en el mundo <span></span> digital!
        </p>
      </div>
      <div className='container flex justify-center mt-10'>
        <button className='boton border-[1px] border-red-600 rounded-[4px]' onClick={()=>mail()}>CONTACTO</button>
      </div>
      <div className='mt-14 border-b-[1px] border-red-600 justify-center items-center w-auto'></div>
      <div className='container flex justify-center items-center gap-16 mt-6'>
      <button
          className='w-8'
          onMouseEnter={() => setA(true)}
          onMouseLeave={() => setA(false)}
          onClick={()=>rutas("https://github.com/EmaMSanchez")}
        >
          <img
            src={a ? "/describir (1).png " : "/describir.png"}
            alt="git hub"
            className='move'
            
          />
          </button>
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