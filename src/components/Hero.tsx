import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="w-full h-screen bg-gray-100 py-20 flex flex-col gap-8">
            <div className="relative w-full h-2/3 bg-white flex justify-around">
                <div className='md:relative md:z-auto md:left-auto w-1/2 md:w-full h-full absolute z-10 left-0 flex items-center justify-center p-8'>
                    <Image
                        src="/Images/roalis.svg"
                        alt="Background"
                        width={500}
                        height={200}
                        className="object-cover"
                        priority
                    />
                </div>
                <div className='w-full h-full relative'>
                    <Image
                        src="/Images/modelo2.jpg"
                        alt="Background"
                        fill
                        className="object-cover md:object-contain"
                        priority
                    />
                </div>
            </div>
            <div className="mx-auto px-4 text-center">
                <h1 className="mb-6 text-xl font-light tracking-widest text-slate-400 md:text-3xl uppercase">
                    Sistema de Tratamento Anti-Idade
                </h1>
                <p className="mx-auto mb-10 max-w-3xl text-lg font-light text-slate-400">
                    Adotamos uma abordagem única, aprofundada e baseada nos mais recentes
                    estudos científicos sobre o envelhecimento da pele.
                </p>
                <Link
                    href="#corpotecnico"
                    className="inline-block border border-gray-800 bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-widest text-gray-800 transition hover:bg-gray-800 hover:text-white"
                >
                    Conheça nosso corpo Técnico
                </Link>
            </div>
        </section>
    );
}
