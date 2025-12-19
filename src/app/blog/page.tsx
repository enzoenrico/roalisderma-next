import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const dynamic = 'force-static';
export const revalidate = 60;

export default function BlogPage() {
    const articles = getAllPosts();
    return (
        <PageLayout>
            <div className="w-full  py-16">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-black mb-4">Conteúdos</h1>
                </div>

                <div className="space-y-8 bg-gray-300 w-full flex flex-col items-center p-8">
                    <div className="space-y-8 max-w-2/3 ">
                        {articles.map((article) => (
                            <article
                                key={article.slug}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row"
                            >
                                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                                    <Image
                                        src={article.image == "" ? article.image : "/Images/logo.svg"}
                                        alt={article.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="p-6 md:p-8 w-full md:w-2/3 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-sm font-semibold text-blue-600 uppercase">
                                                {article.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{article.date}</span>
                                        </div>

                                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                            {article.title}
                                        </h2>

                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <span className="text-sm text-gray-500">Por {article.author}</span>
                                        <Link
                                            href={`/blog/${article.slug}`}
                                            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                        >
                                            Ler mais →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
