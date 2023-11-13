

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
     <div className="container mt-10 flex justify-between">
      <div className="container flex gap-2 w-auto h-auto">
        <div className="mt-[-40px] container  w-[300px] h-[440px] bg-cover sombra" style={{ backgroundImage: `url(/aa3.jpg)` }}>
       
        </div>
        <div className="mt-[20px] container  w-[300px] h-[440px]  bg-cover sombra" style={{ backgroundImage: `url(/Imagen3.jpg)`, backgroundPosition: 'center' }}>
      
        </div>
      </div>
      <div className="container flex ml-20 flex-col">
     <div className="container flex h-auto gap-3">
     <p className="font-light text-sm">P R O G R A M A D O R </p> 
     <p className="font-light text-sm"> J U N I O R</p>
     </div>
     <div className="container mt-8">
     <h1 className="font-extrabold text-5xl">¡Hola!</h1>
     <h1 className="font-extrabold text-5xl">Soy Emanuel, un apasionado desarrollador de software</h1>
     </div>
     <div>
      <p className="mt-8 ">
        Mi misión es desarrollarme como programador mientras convierto ideas en soluciones tecnológicas innovadoras. A lo largo de mi carrera, he cultivado habilidades que van más allá del simple código. Mi enfoque no se limita a resolver problemas; busco crear experiencias y contribuir al progreso tecnológico.
      </p>
     </div>
     </div>
     </div>
    </main>
  )
}
