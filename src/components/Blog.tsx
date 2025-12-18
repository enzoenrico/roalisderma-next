import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from './ScrollAnimateWrapper';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'O ENVELHECIMENTO DA PELE É ACOMPANHADO POR ALTERAÇÕES EM SUA ESTRUTURA CELULAR E MOLECULAR',
      excerpt: 'No processo de envelhecimento da pele são observadas alterações celulares a moleculares que incluem modificações nos tipos de células da pele...',
      link: '#',
    },
    {
      id: 2,
      title: 'FATORES INTRÍNSECOS CAUSAM ENVELHECIMENTO DA PELE AFETANDO SUA APARÊNCIA...',
      excerpt: 'Fatores intrínsecos do envelhecimento da pele são hereditários (genéticos) e além de estarem relacionados com o envelhecimento natural...',
      link: '#',
    },
    {
      id: 3,
      title: 'PREVENÇÃO E CUIDADOS DIÁRIOS SÃO ESSENCIAIS PARA MANTER A SAÚDE DA PELE',
      excerpt: 'A rotina de cuidados com a pele deve incluir limpeza, hidratação e proteção solar adequada para prevenir o envelhecimento precoce...',
      link: '#',
    },
  ];

  return (
    <section id="conteudos" className="w-full bg-white backdrop-blur-sm py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimateWrapper animation="fade-in-down" className="mb-12">
          <h2 className="text-center text-2xl font-light tracking-widest text-gray-800 md:text-3xl uppercase">
            Conteúdos
          </h2>
        </ScrollAnimateWrapper>
        <div className="grid gap-8 md:grid-cols-3" style={{ display: 'flex', flexDirection: 'column' }}>
          {articles.map((article, index) => (
            <ScrollAnimateWrapper 
              key={article.id} 
              animation="fade-in-up" 
              delay={index * 0.1}
              className="bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md" 
              style={{ display: 'grid', width: '100%', height: '374px' }}
            >
              <div className="relative h-48 w-full bg-gray-200/80">
                 <Image
                    src="/placeholder.svg"
                    alt="Article thumbnail"
                    fill
                    className="object-cover opacity-50"
                 />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-sm font-bold uppercase leading-snug text-gray-800">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                  {article.excerpt}
                </p>
                <Link
                  href={article.link}
                  className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-800"
                >
                  Leia Mais
                </Link>
              </div>
            </ScrollAnimateWrapper>
          ))}
        </div>
        <ScrollAnimateWrapper animation="fade-in-up" className="mt-12 text-center">
          <Link
            href="#"
            className="inline-block border-b border-gray-800 pb-1 text-sm font-medium uppercase tracking-widest text-gray-800 hover:text-gray-600 hover:border-gray-600"
          >
            Leia mais em conteúdos
          </Link>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
}
