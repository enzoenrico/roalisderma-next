import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-white">
			<Header />
			<Hero />
			<Steps />
			<Blog />
			<Footer />
		</main>
	);
}
