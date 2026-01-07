import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import GrayHeader from '@/components/GrayHeader';

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
			<GrayHeader
				title={post.title}
				description={post.excerpt}
			/>
			<article className="w-full">
				{/* Header Section - Transparent/Blurry background */}
				<section className="w-full bg-white/80 backdrop-blur-sm pt-16 pb-12 md:pt-24 md:pb-16">
					<div className="container mx-auto px-4">
						<div className="mx-auto max-w-4xl">
							<Link
								href="/blog"
								className="inline-block mb-12 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-800 transition-colors"
							>
								← Voltar para o Blog
							</Link>

							<header className="mb-12">
								<div className="flex items-center gap-4 mb-6">
									<span className="text-sm font-light tracking-widest text-gray-800 uppercase border-b border-gray-200 pb-1">
										{post.category}
									</span>
									<span className="text-sm font-light text-gray-500">{post.date}</span>
								</div>

								<h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
									{post.title}
								</h1>

								<p className="text-xl font-light text-gray-600 mb-6 leading-relaxed">
									{post.excerpt}
								</p>

								<div className="flex items-center gap-2 text-gray-500 text-sm font-light">
									<span>Por</span>
									<span className="font-medium text-gray-700 uppercase tracking-wide">{post.author}</span>
								</div>
							</header>

							<div className="relative w-full h-64 md:h-[500px] rounded-lg overflow-hidden shadow-sm">
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Content Section - Solid white background */}
				<section className="w-full bg-white py-16 md:py-24">
					<div className="container mx-auto px-4">
						<div className="mx-auto max-w-4xl">
							<div
								className="prose prose-lg max-w-none 
                                prose-headings:font-light prose-headings:text-gray-900 
                                prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed
                                prose-a:text-gray-800 prose-a:font-medium prose-a:no-underline prose-a:border-b prose-a:border-gray-300 prose-a:hover:border-gray-800 prose-a:transition-colors
                                prose-strong:text-gray-900 prose-strong:font-medium
                                prose-ul:text-gray-600 prose-ol:text-gray-600 
                                prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:text-gray-600 prose-blockquote:font-light prose-blockquote:italic
                                mb-16"
								dangerouslySetInnerHTML={{ __html: post.content }}
							/>

							<div className="pt-12 border-t border-gray-200">
								<Link
									href="/blog"
									className="inline-block text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-800 transition-colors"
								>
									← Voltar para o Blog
								</Link>
							</div>
						</div>
					</div>
				</section>
			</article>
		</PageLayout>
	);
}
