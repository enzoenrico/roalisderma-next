import { ScrollAnimateWrapper } from './ScrollAnimateWrapper';
import Image from 'next/image';

export default function StepsScreenshot() {

	return (
		<section className="relative w-full bg-white overflow-hidden flex items-center justify-center">
			<Image src="/Images/herosteps.png" alt="Hero Steps" width={1000} height={1000} className="w-full h-full object-cover flex items-center justify-center" />
		</section>
	);
}
