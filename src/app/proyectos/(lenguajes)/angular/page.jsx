import AngularLogo from "@/components/logos/AngularLogo";
import { AngularDato } from "@/mock/Items";
import Proyectos from "@/components/Proyectos";

export default function Angular() {
  const datos = AngularDato;
  return (
    <main className="flex flex-col items-center  p-12">
      <div
        href="/proyectos/angular"
        className="logo ng  justify-center  mb-24 md:mb-36"
      >
        <AngularLogo></AngularLogo>
      </div>
      <Proyectos datos={datos}></Proyectos>
    </main>
  );
}
