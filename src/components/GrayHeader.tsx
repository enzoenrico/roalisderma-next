import Image from 'next/image';
import React from 'react';

interface GrayHeaderProps {
    title: string;
    description: string;
}

const GrayHeader: React.FC<GrayHeaderProps> = ({ title, description }) => {
    return (
        <section className="w-full bg-[#d1d1d1] py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="flex-shrink-0 md:border-r border-gray-400 md:pr-12">
                    <Image
                        src="/Images/roalis.svg"
                        alt="RoalisDerma"
                        width={300}
                        height={100}
                        className="h-auto w-64 md:w-80"
                    />
                </div>
                <div className="max-w-2xl text-center md:text-left">
                    <h1 className="text-3xl md:text-3xl font-light text-gray-600 mb-4 uppercase tracking-wide">
                        {title}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed ">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GrayHeader;