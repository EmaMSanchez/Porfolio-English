import Proyectos from "@/components/Proyectos";
import JsLogo from "@/components/logos/JsLogo";
import { JavaScriptDato } from "@/mock/Items";

export default function JavaScript() {

  const datos = JavaScriptDato;

    return (
      <main className="flex flex-col items-center  p-12">
      <div
        href="/proyectos/angular"
        className="logo js  justify-center  mb-24 md:mb-36"
      >
        <JsLogo></JsLogo>
      </div>
      <Proyectos datos={datos}></Proyectos>
    </main>
    )
  }