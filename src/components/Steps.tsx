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
		<section className="relative w-full bg-white">
			<div className='flex items-end justify-end md:justify-center md:items-center w-full h-full'>
				<div className="relative z-10 flex-col items-center justify-center w-full hidden md:flex h-full">
					<ScrollAnimateWrapper animation="fade-in-down" className="w-full">
						<h2 className="text-end text-2xl w-full font-light tracking-widest text-gray-800 md:text-3xl uppercase  pr-40">
							3 Passos Anti-Idade
						</h2>
						<Image src="/Images/herosteps.png" alt="Hero Steps" width={1920} height={1080} className="w-full h-auto object-cover" />
					</ScrollAnimateWrapper>
				</div>

				{/* layout de celular */}
				<div className="grid md:hidden gap-8 w-full py-16 container mx-auto px-4">
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
