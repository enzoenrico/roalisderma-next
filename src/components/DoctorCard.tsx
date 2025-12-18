import Image from 'next/image';
import React from 'react';

interface DoctorCardProps {
    imageSrc: string;
    name: string;
    crm: string;
    clinic: string;
    address: string;
    phone: string;
    email: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
    imageSrc,
    name,
    crm,
    clinic,
    address,
    phone,
    email,
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-12 max-w-5xl mx-auto ">
            {/* Image Section */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="rounded-full object-cover shadow-sm"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 w-full pt-4">
                {/* Top Border Line */}
                <div className="border-t border-gray-400 w-full mb-6 relative">
                    {/* Optional: If there's a thicker accent line on the left as hinted in some designs */}
                    <div className="absolute top-[-1px] left-0 w-16 h-[1px] bg-gray-600"></div>
                </div>

                <h2 className="text-3xl font-light text-gray-600 mb-6">{name}</h2>

                <div className="space-y-2 text-gray-600 text-lg font-light leading-relaxed">
                    <p>CRM: {crm}</p>
                    <p>Clínica: {clinic}</p>
                    <p>Endereço: {address}</p>
                    <p>Telefone: {phone}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
