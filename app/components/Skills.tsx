export default function Skills() {
    const skills = [
        "Next.js",
        "Nest.js",
        "TypeScript",
        "Git/ Github",
        "PostegreSQL",
        "Reacte",
        "Tailwind"
    ]

    return(
     <section className="mt-20">
       <h2 className="text-3xl font-semibold mb-8">Skills</h2>

       <div className="flex flex-wrap gap-4">
        {skills.map((skill)=>(
            <div key={skill} className="px-4 py-2 bg-zinc-800 rounded-lg border border-white/10 hover:bg-zinc-700 transition">
                {skill}
            </div>
        ))}

       </div>
     </section>
    )
}