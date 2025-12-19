import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimateWrapper } from './ScrollAnimateWrapper';
import { getAllPosts } from '@/lib/blog';

export default function Blog() {
    const posts = getAllPosts();
    const articles = posts.slice(0, 3);

    return (
        <section id="conteudos" className=" container w-full bg-white backdrop-blur-sm py-16 md:py-24">
            <div className="container mx-auto px-4">
                <ScrollAnimateWrapper animation="fade-in-down" className="mb-12">
                    <h2 className="text-center text-2xl font-light tracking-widest text-gray-800 md:text-3xl uppercase">
                        Conteúdos
                    </h2>
                </ScrollAnimateWrapper>
                <div className="grid gap-8 md:grid-cols-3" style={{ display: 'flex', flexDirection: 'column' }}>
                    {articles.map((article, index) => (
                        <ScrollAnimateWrapper
                            key={article.slug}
                            animation="fade-in-up"
                            delay={index * 0.1}
                            className="bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md flex"
                        >
                            <div className="relative h-48 w-48 flex-shrink-0 bg-gray-200/80">
                                <Image
                                    src={"/contactBackground.png"}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="mb-4 text-sm font-bold uppercase leading-snug text-gray-800">
                                        {article.title}
                                    </h3>
                                    <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <Link
                                    href={`/blog/${article.slug}`}
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
                        href="/blog"
                        className="inline-block border-b border-gray-800 pb-1 text-sm font-medium uppercase tracking-widest text-gray-800 hover:text-gray-600 hover:border-gray-600"
                    >
                        Leia mais em conteúdos
                    </Link>
                </ScrollAnimateWrapper>
            </div>
        </section>
    );
}
