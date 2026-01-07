import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import StepsScreenshot from '@/components/StepsScreenshot';
import Blog from '@/components/Blog';
import Steps from '@/components/Steps';

export default function Home() {
	return (
		<PageLayout>
			<Hero />
			<Steps />
			<Blog />
		</PageLayout>
	);
}
