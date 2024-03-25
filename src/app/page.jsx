import ImagenEffect from "@/components/ImagenEffect";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="container mt-16  flex-row justify-center md:justify-between md:flex md:mt-10">
        <ImagenEffect />
        <div className="container flex mt-8 flex-col md:ml-20 md:mt-0">
          <div className="container flex h-auto gap-3 w-auto justify-center md:justify-start">
            <p className="font-light text-sm">J U N I O R </p>
            <p className="font-light text-sm"> P R O G R A M M E R</p>
          </div>
          <div className="container mt-8 ">
            <h1 className="font-extrabold text-4xl md:text-5xl maquina">
              Hello!
            </h1>
            <h1 className="font-extrabold text-4xl md:text-5xl">
              I'm Emanuel, a passionate software developer.
            </h1>
          </div>
          <div>
            <p className="mt-8">
              My mission is to develop as a programmer while turning ideas into
              innovative technology solutions. Throughout my career, I have
              cultivated skills that go beyond simple coding. My focus is not
              only limited to solving problems, but I also seek to create
              experiences and contribute to technological progress.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
