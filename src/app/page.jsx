

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
     <div className="container mt-16  flex-row justify-center md:justify-between md:flex md:mt-10">
      <div className="container flex gap-2 w-auto h-auto justify-center">
        <div className="mt-[-40px] container w-[150px] h-[200px]  md:w-[300px] md:h-[440px] bg-cover sombra" style={{ backgroundImage: `url(/aa3.jpg)` }}>
       
        </div>
        <div className="mt-[20px] container w-[150px] h-[200px]  md:w-[300px] md:h-[440px]  bg-cover sombra" style={{ backgroundImage: `url(/Imagen3.jpg)`, backgroundPosition: 'center' }}>
      
        </div>
      </div>
      <div className="container flex mt-8 flex-col md:ml-20 md:mt-0">
     <div className="container flex h-auto gap-3 w-auto justify-center md:justify-start">
     <p className="font-light text-sm">P R O G R A M A D O R </p> 
     <p className="font-light text-sm"> J U N I O R</p>
     </div>
     <div className="container mt-8 ">
     <h1 className="font-extrabold text-4xl md:text-5xl">¡Hola!</h1>
     <h1 className="font-extrabold text-4xl md:text-5xl">Soy Emanuel, un apasionado desarrollador de software</h1>
     </div>
     <div>
      <p className="mt-8">
        Mi misión es desarrollarme como programador mientras convierto ideas en soluciones tecnológicas innovadoras. A lo largo de mi carrera, he cultivado habilidades que van más allá del simple código. Mi enfoque no se limita a resolver problemas, busco crear experiencias y contribuir al progreso tecnológico.
      </p>
     </div>
     </div>
     </div>
    </main>
  )
}
