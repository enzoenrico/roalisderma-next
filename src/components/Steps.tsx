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
        <section className="w-full bg-white backdrop-blur-sm py-16 md:py-24">
            <div className="container mx-auto px-16 ">
                <ScrollAnimateWrapper animation="fade-in-down" className="mb-16">
                    <h2 className="mb-16 text-center text-2xl font-light tracking-widest text-gray-800 md:text-3xl uppercase">
                        3 Passos Anti-Idade
                    </h2>
                </ScrollAnimateWrapper>
                <ScrollAnimateWrapper animation="scale-in" className='relative hidden md:flex gap-0 justify-center h-96 pl-28' style={{ width: '100%' }}>
                    <div className='w-1/3 relative hidden md:flex ' style={{ width: '117px' }}>
                        <Image src="/Images/product.png"
                            width={117}
                            height={200}
                            alt='Product'
                            className='object-contain '
                        />
                    </div>
                    <div className='w-2/3 relative hidden md:flex justify-start items-start' >
                        <Image
                            src="/Images/steps.png"
                            width={800}
                            height={200}
                            alt='Steps'
                            className='flex left-0 justify-start items-start object-cover'
                        //style={{ left: '-3px', top: '-2px', justifyContent: 'center', alignItems: 'flex-start' }}
                        />
                    </div>
                </ScrollAnimateWrapper>

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
