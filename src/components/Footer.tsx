import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Contact from "./Contact";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 pt-16 pb-8 w-screen">
            <Contact />
            <div className="container p-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Image
                            src="/placeholder.svg"
                            alt="Roalisderma Logo"
                            width={50}
                            height={50}
                            className="h-12 w-12"
                        />
                        <p className="font-medium max-w-xs text-gray-700">
                            Inovação e tecnologia em dermatologia para uma pele saudável e radiante.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase text-gray-900">Menu</h3>
                        <ul className="space-y-2 font-medium text-gray-700">
                            <li>
                                <Link href="/" className="hover:text-gray-900 hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#conteudos" className="hover:text-gray-900 hover:underline">
                                    Médicos parceiros
                                </Link>
                            </li>
                            <li>
                                <Link href="#pele" className="hover:text-gray-900 hover:underline">
                                    Pele
                                </Link>
                            </li>
                            <li>
                                <Link href="#quem-somos" className="hover:text-gray-900 hover:underline">
                                    Quem somos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase text-gray-900">Serviços</h3>
                        <ul className="space-y-2 font-medium text-gray-700">
                            <li>
                                <Link href="#pele" className="hover:text-gray-900 hover:underline">
                                    Consulta Dermatológica
                                </Link>
                            </li>
                            <li>
                                <Link href="#pele" className="hover:text-gray-900 hover:underline">
                                    Tratamentos Estéticos
                                </Link>
                            </li>
                            <li>
                                <Link href="#pele" className="hover:text-gray-900 hover:underline">
                                    Análise de Pele
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase text-gray-900">Contato</h3>
                        <div className="flex gap-4 mb-4">
                            <a
                                href="#"
                                className="p-2 border-2 border-gray-300 bg-white hover:bg-gray-900 hover:text-white transition-colors rounded"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 border-2 border-gray-300 bg-white hover:bg-gray-900 hover:text-white transition-colors rounded"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contato@roalisderma.com"
                                className="p-2 border-2 border-gray-300 bg-white hover:bg-gray-900 hover:text-white transition-colors rounded"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="font-medium text-gray-700">contato@roalisderma.com</p>
                    </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-medium text-sm text-gray-700">
                    <p>&copy; {new Date().getFullYear()} Roalisderma. Todos os direitos reservados.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-gray-900">
                            Política de privacidade
                        </Link>
                        <Link href="#" className="hover:text-gray-900">
                            Termos de serviço
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
