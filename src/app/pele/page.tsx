import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import GrayHeader from '@/components/GrayHeader';

const processes = [
    {
        title: "ADESÃO CELULAR",
        description: "Trata-se de um processo extremamente importante para garantir a integridade estrutural e formação da barreira da epiderme. Alterações na síntese de moléculas responsáveis pela adesão do tecido na camada da derme são consideradas como sendo um dos principais mecanismos moleculares associados aos sinais de envelhecimento."
    },
    {
        title: "BARREIRA CUTÂNEA",
        description: "Considerado o processo mais importante para a pele, responsável por assegurar sua hidratação e integridade, prevenir fissuras ou a penetração de substâncias estranhas que possam causar problemas ao organismo. O envelhecimento está diretamente associado ao desequilíbrio dos processos biológicos relacionados à barreira cutânea."
    },
    {
        title: "BIOSSÍNTESE DE ESTERÓIDES",
        description: "Vital para manter o equilíbrio dos processos biológicos e a estrutura saudável, a pele é um órgão produtor de esteróides que regulam as atividades imunológicas locais e sistêmicas. É com suporte de diferentes moléculas produzidas por este processo, como cortisol, corticosterona e estradiol, que a pele mantem seu sistema imune funcional, protegendo-se de fatores biológicos e ambientais externos agressores."
    },
    {
        title: "COMPOSIÇÃO DA MATRIZ EXTRA CELULAR",
        description: "A matriz extracelular (MEC) da pele sofre alterações durante o envelhecimento, causando a formação de rugas, perda da elasticidade e aumento da fragilidade da pele. Moléculas como colágeno e elastina desempenham importante papel na manutenção da MEC. O envelhecimento da pele, assim como de todo o organismo, também é fruto dessas alterações biomoleculares. O dano às fibras colágenas está intimamente envolvido nesse contexto pois, com o avanço da idade, ocorre desorganização no metabolismo do colágeno, reduzindo sua produção e, consequentemente, aumento da sua degradação."
    },
    {
        title: "CONTROLE DA INFLAMAÇÃO",
        description: "A saúde e aparência da pele são altamente dependentes de diversos processos biológicos, incluindo o do sistema imunológico que atua diretamente no processo inflamatório. Neste contexto, respostas imunes protegem a pele, porém, as inflamações crônicas que ocorrem de acordo com o avanço da idade marcam o início do surgimento dos sinais de envelhecimento. Nesta situação, ocorre aumento da presença de enzimas que degradam o tecido e a estrutura da matriz extracelular (MEC), comprometendo suas funções essenciais. O controle desse processo inflamatório é determinante para a manutenção de um tecido saudável e para o controle do envelhecimento celular."
    },
    {
        title: "CONTROLE DO ESTRESSE OXIDATIVO",
        description: "Diariamente a pele recebe agressões externas (radiações solares, luz azul) e partículas de poluição suspensas no ar que aumentam o estresse oxidativo e danos, gerando as chamadas espécies reativas de oxigênio. No caso da pele não controlar o acúmulo de tais substâncias adequadamente, isto pode promover a fragmentação do colágeno e perda de função das células da pele, ocasionando assim o surgimento de diversos problemas, incluindo a aceleração do processo de envelhecimento cutâneo."
    },
    {
        title: "DETOXIFICAÇÃO CELULAR",
        description: "A pele desempenha importante papel no processo de biotransformação e detoxificação para a eliminação de substâncias tóxicas ao organismo, melhorando também sua saúde e aparência. A redução na efetividade do processo de detoxificação celular possui relação com envelhecimento da pele, gerando a formação de rugas e perda de elasticidade."
    },
    {
        title: "DIFERENCIAÇÃO CELULAR",
        description: "Trata-se de um importante mecanismo para renovação celular da pele, através do qual células precursoras adquirem características de células especializadas finais, constituindo a estrutura de uma pele saudável. Por outro lado, o envelhecimento da pele é caracterizado por uma perda progressiva de tecido cutâneo correspondente a uma taxa de aproximadamente 7% da pele total a cada 10 anos. Esse fenômeno representa uma diminuição equivalente de células, como os queratinócitos da epiderme e os fibroblastos da derme."
    },
    {
        title: "ENERGIA (SÍNTESE DE ATP)",
        description: "Sabe-se que a síntese de energia é vital para o correto funcionamento das células de todo o corpo, incluindo as da pele. Praticamente todos os processos celulares que regulam a saúde demandam energia. Dessa forma, manter o processo de síntese de ATP é fundamental, visto que, com o avanço da idade, o metabolismo energético é reduzido pelo processo de envelhecimento."
    },
    {
        title: "MECANISMO DE REPARO DO DNA",
        description: "O reparo do DNA é um mecanismo de extrema importância para proteção do material genético durante a divisão do tecido cutâneo e para garantir a integridade das células da pele. Alterações no mecanismo de reparo do DNA causam sérios problemas para o organismo, podendo levar ao surgimento de diversas doenças ao longo do tempo ou gerar células incapazes de exercer sua atividade funcional de forma adequada."
    },
    {
        title: "METABOLISMO DE LIPÍDEOS",
        description: "A síntese dos lipídeos da epiderme é muito ativa e relativamente autônoma, mas pode ser desregulada por alterações na função de barreira cutânea. Além disso, células da glândula sebácea, que são responsáveis pela produção de sebo e lubrificação da pele, perdem suas características morfológicas e funcionais com o avanço da idade, resultando em uma diminuição nos níveis de lipídeos específicos de superfície e consequente ressecamento, descamação e fissuras. A manutenção do metabolismo de lipídios tem importante função na regulação da hidratação da pele além de funcionar como reserva energética e contribuir para o processo de defesa contra microrganismos."
    },
    {
        title: "METABOLISMO DE VITAMINA D",
        description: "A pele desempenha importante papel na produção de vitamina D, fundamental em diversos processos metabólicos do corpo, incluindo o equilíbrio dos processos da pele e eficiência do sistema inato e adaptativo cutâneo. Esse mecanismo está diretamente envolvido em processos fisiológicos importantes e relacionados ao funcionamento do sistema imune, homeostase do cálcio e renovação celular. Notadamente, a reposição dessa vitamina contribui para a melhora da textura da pele e o contorno facial. Com o processo de envelhecimento, a metabolismo de vitamina D é reduzido."
    },
    {
        title: "PRODUÇÃO DE MELANINA",
        description: "A melanina é uma importante substância que está associada ao controle de diversos processos da pele, incluindo a pigmentação como fator de fotoproteção, absorção de raios UV, ação antioxidante e eliminação de radicais livres. O envelhecimento da pele está associado com alterações na pigmentação, sendo as manchas, comumente chamadas de sardas, as mais expressivas. Isto se deve ao desequilíbrio na distribuição dos melanócitos, com a diminuição em algumas regiões e aumento em outras, favorecendo o surgimento das alterações pigmentares na pele."
    },
    {
        title: "PROLIFERAÇÃO CELULAR",
        description: "Fundamental para renovação do tecido. O constante funcionamento desse processo nas células matrizes garante a manutenção das funções, bem como a espessura e recomposição de células nas diferentes camadas da pele. A diminuição da atividade proliferativa causa redução da espessura do epitélio, aumentando a fragilidade do tecido e surgimento de fissuras."
    },
    {
        title: "PROTEÇÃO À FOTOXIDAÇÃO",
        description: "A exposição da pele à luz solar (composta por raios UV) desencadeia um processo de fotoxidação celular, causando danos como a quebra do colágeno na matriz extracelular e redução na produção de novas moléculas de colágeno. Agentes antioxidantes deixam de ser produzidos em quantidade suficiente para combater a fotoxidação. Desta forma, a proteção dos efeitos celulares causados por radiação é extremamente importante na manutenção da saúde da pele."
    },
    {
        title: "PROTEÇÃO À GLICAÇÃO",
        description: "Trata-se de um importante processo de proteção celular contra agentes nocivos decorrentes do açúcar que se ligam às proteínas da pele, incluindo estresse oxidativo e acúmulo de toxinas no corpo. Na pele, portanto, a glicação interfere diretamente na aparência e na saúde, além de estar relacionada com a ocorrência de envelhecimento crônico e perda de elasticidade. Durante o processo de envelhecimento, os produtos finais da glicação acumulam-se de forma mais intensa, causando o aparecimento de sinais do envelhecimento, sendo necessário combater este acúmulo por intermédio da ativação da proteção à glicação."
    },
    {
        title: "RESPOSTA A DANOS",
        description: "Danos ocasionados na pele são induzidos por agentes agressores externos como exposição solar, alimentação e exposição a agentes químicos/físicos. Tais danos resultam em alterações fisiológicas no tecido e ativam uma cascata de respostas, incluindo a interrupção do ciclo celular e, caso o dano seja irreparável, ocorre apoptose, ou seja, morte celular programada. Devido a sua responsividade, as células são capazes de passar por adaptações estruturais e funcionais reversíveis, durante as quais um novo estado de equilíbrio é alcançado, permitindo sua sobrevivência e manutenção da atividade funcional. Quando o estímulo é eliminado, a célula pode retornar ao seu estado original sem ter sofrido qualquer consequência danosa. É de extrema importância manter a ativação de vias metabólicas de resposta aos danos celulares, assegurando a sobrevida das células e do tecido, e dessa forma, reestabelecendo o equilíbrio e a saúde da pele."
    },
    {
        title: "SINALIZAÇÃO CELULAR",
        description: "As diferentes células que formam o tecido cutâneo se comunicam através da liberação de substâncias, chamadas de mediadores, essenciais na manutenção da estrutura saudável deste tecido, para que então cada célula execute sua função nos processos metabólicos e para que o tecido responda adequadamente a qualquer agente agressor. Manter o mecanismo de sinalização celular atuando de forma adequada assegura a integridade da pele e reduzir o aparecimento dos sinais de envelhecimento."
    },
    {
        title: "VASCULARIZAÇÃO",
        description: "Processo extremamente importante para levar nutrientes para as células, garantindo o equilíbrio dos demais processos metabólicos. Problemas de vascularização estão associados a diversos outros fatores. A redução no tamanho e calibre dos vasos cutâneos e uma acentuada queda na densidade de vasos dérmicos estão associados ao envelhecimento do tecido e como consequência, da capacidade reduzida de resposta vascular cutânea, redução na vermelhidão induzida por UV, diminuição da temperatura da pele e prejuízo no fornecimento de nutrientes. Controlar esse processo é fundamental para manter a saúde e beleza da pele."
    }
];

export default function Pele() {
    return (
        <PageLayout>
            <div className="">
                <ScrollAnimateWrapper animation="fade-in-up">
                    <GrayHeader title='PELE' description='PROCESSOS BIOLÓGICOS ENVOLVIDOS NO ENVELHECIMENTO
 TODOS ESSES PROCESSOS SÃO AVALIADOS PELO SISTEMA ROALISDERMA ANTI-IDADE.' />
                </ScrollAnimateWrapper>

                <div className='bg-white w-full h-screen'>
                    <ScrollAnimateWrapper animation="fade-in-right" className='w-full h-full relative'>
                        <Image
                            src="/Images/modelo3.jpg"
                            alt="Background"
                            fill
                            className="object-cover "
                            priority
                        />
                    </ScrollAnimateWrapper>
                </div>

                <div className="w-full flex flex-col gap-4">
                    {processes.map((process, index) => (
                        <ScrollAnimateWrapper
                            key={index}
                            animation="fade-in-up"
                            delay={index * 0.1}
                            className="h-full w-full"
                        >
                            <div className={`w-full ${index % 2 === 0 ? 'bg-white' : 'bg-gray-300'} backdrop-blur-sm p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-200`}>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                    {process.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-justify">
                                    {process.description}
                                </p>
                            </div>
                        </ScrollAnimateWrapper>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
