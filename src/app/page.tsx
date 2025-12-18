import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import Blog from '@/components/Blog';

export default function Home() {
	return (
		<PageLayout>
			<Hero />
			<Steps />
			<Blog />
		</PageLayout>
	);
}
