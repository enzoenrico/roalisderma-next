import Image from 'next/image';
import { ScrollAnimateWrapper } from './ScrollAnimateWrapper';

export default function Steps() {
    const steps = [
        {
            id: 1,
            title: 'Passo 1',
            description: 'Avaliação detalhada da estrutura da pele e identificação das necessidades específicas.',
        },
        {
            id: 2,
            title: 'Passo 2',
            description: 'Aplicação de protocolos personalizados baseados em evidências científicas.',
        },
        {
            id: 3,
            title: 'Passo 3',
            description: 'Manutenção e acompanhamento contínuo para resultados duradouros.',
        },
    ];

    return (
        <section className="relative w-full py-16 md:py-24">
            <div className="absolute inset-0 z-0 bg-white">
                <Image
                    src="/image.png"
                    width={800}
                    height={400}
                    alt="Background"
                    className="object-contain hidden md:flex w-full h-full pr-[30rem]"
                />
            </div>
            <div className='flex flex-row items-end justify-end w-full'>
                <div className="container relative z-10  flex flex-col items-center justify-center w-1/2 mr-8">
                    <ScrollAnimateWrapper animation="fade-in-down" className="mb-6 w-1/2 ">
                        <h2 className="mb-12 text-center text-2xl font-light tracking-widest text-gray-800 md:text-3xl uppercase">
                            3 Passos Anti-Idade
                        </h2>
                    </ScrollAnimateWrapper>
                    <ScrollAnimateWrapper animation="scale-in" className='hidden md:flex justify-end items-start w-full '>
                        <div className='relative'>
                            <Image
                                src="/Images/steps.png"
                                width={800}
                                height={105}
                                alt='Steps'
                                className='object-contain'
                            />
                        </div>
                    </ScrollAnimateWrapper>
                </div>

                {/* layout de celular */}
                <div className="grid md:hidden gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <ScrollAnimateWrapper
                            key={step.id}
                            animation="fade-in-up"
                            delay={index * 0.1}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 p-4">
                                <Image
                                    src="/placeholder.svg"
                                    alt={`Icon for ${step.title}`}
                                    width={48}
                                    height={48}
                                    className="opacity-50"
                                />
                            </div>
                            <h3 className="mb-4 text-xl font-medium text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                {step.description}
                            </p>
                        </ScrollAnimateWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
