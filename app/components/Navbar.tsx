import Link from "next/link";

export default function Navbar() {
  return (
    <header  className="bg-gray-900 text-white shadow-md">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <h3 className="text-xl font-bold tracking-wide text-blue-400">
            mm.dev
            </h3>
            <ul className="flex gap-6 text-sm font-medium">
            <li>
                <Link href="#projetos" className="hover:text-blue-400 transition-colors">
                projetos
                </Link>
            </li>
            <li>
                <Link href="#skills" className="hover:text-blue-400 transition-colors">
                skills
                </Link>
            </li>
            <li>
                <Link href="#experiencia" className="hover:text-blue-400 transition-colors">
                experiencia
                </Link>
            </li>
            <li>
                <Link href="#contato" className="hover:text-blue-400 transition-colors">
                contato
                </Link>
            </li>
            </ul>
        </nav>
    </header>
  )

}