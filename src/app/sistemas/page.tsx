import GrayHeader from '@/components/GrayHeader';
import PageLayout from '@/components/PageLayout';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import { Atom, Leaf, Fingerprint, Brain, Dna, GitCompare, Package } from 'lucide-react';

export default function Sistemas() {
    return (
        <PageLayout>
            <GrayHeader
                title='SISTEMA ROALISDERMA'
                description='A ROALISDERMA desenvolveu um sistema integrado que pode ler, coletar dados automaticamente e estabelecer recomendações personalizadas com maior robustez e assertividade, utilizando um algoritmo específico e inteligência artificial.'
            />
            
            <div className="bg-white p-8 md:p-24">
                <div className="max-w-4xl mx-auto space-y-16">
                    
                    {/* Section 1 */}
                    <div className="border-t border-gray-300 pt-8 flex gap-6">
                        <div className="hidden md:block shrink-0 pt-2">
                            <ScrollAnimateWrapper animation="fade-in-left">
                                <Atom className="w-12 h-12 text-gray-400" strokeWidth={1} />
                            </ScrollAnimateWrapper>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-gray-500 mb-6 uppercase tracking-wide">NANOTECNOLOGIA</h2>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                A Nanotecnologia aplicada à cosmética refere-se à utilização de pequenas estruturas na escala nanométrica contendo ativos que são capazes de penetrar nas camadas mais profundas da pele, potencializando os efeitos do produto. A nanotecnologia aplicada para a produção do creme anti-idade específico da ROALISDERMA é com base na utilização de nanoemulsões, uma das tecnologias mais avançadas para melhorar a solubilidade e funcionalidade de ingredientes ativos aplicados às formulações cosméticas.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="border-t border-gray-300 pt-8 flex gap-6">
                        <div className="hidden md:block shrink-0 pt-2">
                            <ScrollAnimateWrapper animation="fade-in-left">
                                <Leaf className="w-12 h-12 text-gray-400" strokeWidth={1} />
                            </ScrollAnimateWrapper>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-gray-500 mb-6 uppercase tracking-wide">MATERIAIS BIOMIMÉTICOS</h2>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                O Biomimetismo é considerado uma área relativamente nova da ciência e tem como objetivo estudar as estruturas biológicas e das suas funções, sempre em busca de solução para as mais variadas áreas, como Biologia, Química, Cosmética, Medicina, entre outros. A utilização de fórmulas com ingredientes biomiméticos, proporcionam diversas vantagens, pela biocompatibilidade dos componentes.
                            </p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="border-t border-gray-300 pt-8 flex gap-6">
                        <div className="hidden md:block shrink-0 pt-2">
                            <ScrollAnimateWrapper animation="fade-in-left">
                                <Fingerprint className="w-12 h-12 text-gray-400" strokeWidth={1} />
                            </ScrollAnimateWrapper>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-gray-500 mb-6 uppercase tracking-wide">PERSONALIZAÇÃO</h2>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                “Cada ser é um ser único e com necessidades específicas”. A frase citada não é novidade para ninguém, mas o que muitas pessoas ainda não sabem é da possibilidade de apostar em fórmulas personalizadas, que focam nos cuidados específicos do seu tipo de pele e nas suas necessidades, atuando para oferecer os melhores resultados possíveis para você. A utilização dessas fórmulas personalizadas, são consideradas o futuro dos produtos de cuidados com a pele.
                            </p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="border-t border-gray-300 pt-8 flex gap-6">
                        <div className="hidden md:block shrink-0 pt-2">
                            <ScrollAnimateWrapper animation="fade-in-left">
                                <Brain className="w-12 h-12 text-gray-400" strokeWidth={1} />
                            </ScrollAnimateWrapper>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-gray-500 mb-6 uppercase tracking-wide">INTELIGÊNCIA ARTIFICIAL</h2>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                A Inteligência Artificial (IA) é um ramo da ciência da computação que desenvolve sistemas que simula a capacidade humana de percepção de um problema, identificando a melhor forma para tomar decisões, por meio de algoritmos e estratégias envolvendo grandes volumes de dados – big data. A ROALISDERMA desenvolveu um sistema altamente robusto contendo informações de centenas de publicações cientificas e estudos aprofundados da pele para compor um algoritmo capaz de avaliar os dados genéticos referentes ao teste de RNA e combinar os melhores ingredientes para sua pele de acordo com a necessidade de cada indivíduo.
                            </p>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="border-t border-gray-300 pt-8 flex gap-6">
                        <div className="hidden md:block shrink-0 pt-2">
                            <ScrollAnimateWrapper animation="fade-in-left">
                                <Dna className="w-12 h-12 text-gray-400" strokeWidth={1} />
                            </ScrollAnimateWrapper>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-gray-500 mb-6 uppercase tracking-wide">TESTE DE RNA (EXPRESSÃO GÊNICA)</h2>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                Com a conclusão do Projeto Genoma Humano, novas perspectivas foram abertas para as áreas de ciências da vida, incluído saúde e bem-estar. A dermatologia também está sendo impactada pelos avanços científicos da revolução genética. A biologia molecular está cada vez mais presente na abordagem do envelhecimento cutâneo, um processo altamente complexo, que envolve a ação simultânea e contínua de diversos fatores que desencadeiam uma diminuição progressiva da capacidade homeostática da pele.
                            </p>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="border-t border-gray-300 pt-8 flex gap-6">
                        <div className="hidden md:block shrink-0 pt-2">
                            <ScrollAnimateWrapper animation="fade-in-left">
                                <GitCompare className="w-12 h-12 text-gray-400" strokeWidth={1} />
                            </ScrollAnimateWrapper>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-gray-500 mb-6 uppercase tracking-wide">RNA x DNA</h2>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                Este é o principal diferencial tecnológico que o Sistema Integrado da ROALISDERMA apresenta, pois os testes de RNA indicam como os genes estão se expressando, variando de acordo com seu estilo de vida e influenciando diretamente no envelhecimento cutâneo, sendo que, os testes de DNA trazem informações limitadas, somente ligadas a fatores genéticos estáticos.
                            </p>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="border-t border-gray-300 pt-8 flex gap-6">
                        <div className="hidden md:block shrink-0 pt-2">
                            <ScrollAnimateWrapper animation="fade-in-left">
                                <Package className="w-12 h-12 text-gray-400" strokeWidth={1} />
                            </ScrollAnimateWrapper>
                        </div>
                        <div>
                            <h2 className="text-2xl font-light text-gray-500 mb-6 uppercase tracking-wide">TECNOLOGIA DE EMBALAGEM</h2>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                Aplicar um produto facial de maneira correta é essencial para a eficácia de um tratamento. As embalagens possuem um papel fundamental para auxiliar o consumidor. A embalagem oferecida pela ROALISDERMA contém sistema denominado Airless. Essa embalagem apresenta um avançado sistema de válvulas que impede a entrada de ar na embalagem evitando o contato do produto com o ambiente externo, a sua oxidação e possível contaminação. Essa embalagem moderna também proporciona melhor aproveitamento do conteúdo por meio do formato interno, êmbolo para auxiliar na continuidade do uso e apresenta dosador para aplicação, dispensando a dose certa do produto para o cuidado facial para obtenção dos efeitos desejados.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
}
