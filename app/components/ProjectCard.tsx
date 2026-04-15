type ProjectProps = {
    title:string
    description:string
    techs:string[]
}

export default function ProjectCard({
    title,
    description,
    techs
}:ProjectProps) {
  
    return(
        <div className="bg-zinc-900 border border-zinc-800 rounded-x1 p-6 hover:big-zinc-600">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-zinc-400 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">{techs.map((tech,index)=>(
              <span key={index} className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                {tech}
              </span>
          ))}
        </div>
        </div>
    )
}