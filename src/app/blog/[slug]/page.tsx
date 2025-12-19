import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: 'Post não encontrado' };
    }

    return {
        title: `${post.title} | Blog Roalisderma`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <PageLayout>
            <article className="w-full  mx-auto px-4 py-16 bg-white">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
                >
                    ← Voltar para o Blog
                </Link>

                <header className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-semibold text-blue-600 uppercase">
                            {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {post.title}
                    </h1>

                    <p className="text-xl text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-gray-500">
                        <span>Por</span>
                        <span className="font-semibold text-gray-700">{post.author}</span>
                    </div>
                </header>

                <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-blue-600 prose-blockquote:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Voltar para o Blog
                    </Link>
                </div>
            </article>
        </PageLayout>
    );
}
