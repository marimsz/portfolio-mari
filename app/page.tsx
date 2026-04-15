import Image from "next/image";
import imagem from "../public/fotoperfil.png"
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import { projects } from "../data/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
     <>
    <main>
      <div className="min-h-screen flex flex-col justify-between bg-linear-to-br from-[#0f0f14] via-[#1a1a2e] to-[#0f0f14] text-zinc-200"/>
        <div className="max-w-xl space-y-6">
         <h3 className="text-sm uppercase tracking-[0.2em] text-purple-400 font-mono">Desenvolvedor de Backend</h3><br />
         <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight">Mariana Mirelly</h1>
         <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
          Construo produtos web do zero -
          desde a API até a interface.
          Foco em código limpo, UX que faz sentido e entregas que não travam</p>
      </div>
      <div>
       <Image
       className="rounded-full shadow-[0_0_40px_rgba(168,85,247,0.3)]"
       src={imagem}
       alt="foto perfil"
       width={250}
       height={250}
       />
      </div>

    </main>

    <section className="max-w-6x1 mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-10">Projetos:</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       {projects.map((project,index)=>(
        <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        techs={project.techs}
        />
       ))}
      </div>
    </section>

  <section className="max-w-3x1 mx-auto px-6">
          <Skills />
    </section>

    <section className="max-w-5xl ml-25 mx-auto px-6 py-20">
     <h2 className="text-3xl font-semibold text-black mb-12">Experiência</h2>
    </section>

    <section>
       <Experience />
    </section>

    <section>
       <Contact />
    </section>

    <section>
       <Footer />
    </section>
    
    </>
    
  );
}
