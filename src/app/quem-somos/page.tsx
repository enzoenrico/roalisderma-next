import GrayHeader from '@/components/GrayHeader';
import PageLayout from '@/components/PageLayout';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import Image from 'next/image';

export default function QuemSomos() {
    return (
        <PageLayout>
            <GrayHeader
                title='SISTEMA DE TRATAMENTO ANTI-IDADE'
                description='Adotamos uma abordagem única, aprofundada e baseada nos mais recentes estudos científicos sobre o envelhecimento da pele.'
            />

            <div className="bg-white p-24">
                <h2 className="text-2xl font-light text-gray-500 mb-2 uppercase tracking-wide">O Corpo Técnico</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="flex flex-col pt-6 border-t border-gray-400">
                        <ScrollAnimateWrapper animation='fade-in-up'>
                            <div className="mb-6 relative w-32 h-32">
                                <Image
                                    src="/Images/Corpo Tecnico/afornali.jpeg"
                                    alt="Alessandro Afornali"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl text-gray-500 font-light mb-4">Alessandro Afornali</h3>
                            <ScrollAnimateWrapper animation='fade-in-left'>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    Bacharelado e licenciado em Biologia, fez especialização em Genética Humana, concluiu o mestrado em Biologia Celular e Molecular pela Fundação Oswaldo Cruz (Fiocruz – RJ)...
                                </p>
                            </ScrollAnimateWrapper>
                            <div className="mt-auto">
                                <div className="border-t border-gray-400 w-12 mb-2"></div>
                                <span className="text-gray-500 text-sm font-light uppercase cursor-pointer hover:text-gray-800">Leia Mais</span>
                            </div>
                        </ScrollAnimateWrapper>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col pt-6 border-t border-gray-400">
                        <ScrollAnimateWrapper animation='fade-in-up'>
                            <div className="mb-6 relative w-32 h-32">
                                <Image
                                    src="/Images/Corpo Tecnico/israel.jpeg"
                                    alt="Israel Feferman"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl text-gray-500 font-light mb-4">Israel Feferman</h3>
                            <ScrollAnimateWrapper animation='fade-in-left'>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    Farmacêutico-Bioquímico, formado pela Universidade de São Paulo, com MBA em Gestão Empresarial pela Fundação Getúlio Vargas, Gestão Estratégica na Fundação Dom Cabral...
                                </p>
                            </ScrollAnimateWrapper>
                            <div className="mt-auto">
                                <div className="border-t border-gray-400 w-12 mb-2"></div>
                                <span className="text-gray-500 text-sm font-light uppercase cursor-pointer hover:text-gray-800">Leia Mais</span>
                            </div>
                        </ScrollAnimateWrapper >
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col pt-6 border-t border-gray-400">
                        <ScrollAnimateWrapper animation='fade-in-up'>
                            <div className="mb-6 relative w-32 h-32">
                                <Image
                                    src="/Images/Corpo Tecnico/herai.jpg"
                                    alt="Roberto Herai"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl text-gray-500 font-light mb-4">Roberto Herai</h3>
                            <ScrollAnimateWrapper animation='fade-in-left'>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    Bacharel em Computação (UEPG, Brasil), Mestre em Engenharia Elétrica e Computação (UNICAMP, Brasil), Doutor em Genética e Biologia Molecular (UNICAMP, Brasil), Pós-doutor em Genética...
                                </p>
                            </ ScrollAnimateWrapper>
                            <div className="mt-auto">
                                <div className="border-t border-gray-400 w-12 mb-2"></div>
                                <span className="text-gray-500 text-sm font-light uppercase cursor-pointer hover:text-gray-800">Leia Mais</span>
                            </div>
                        </ ScrollAnimateWrapper >
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
