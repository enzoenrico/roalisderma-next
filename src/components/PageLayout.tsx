import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-between">
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/background.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <Header />
            <div className="w-full flex-grow flex flex-col items-center">
                {children}
            </div>
            <Footer />
        </main>
    );
}
