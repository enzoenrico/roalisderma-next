import Image from 'next/image';
import React from 'react';

type DoctorCardDoctorProps = {
	variant?: 'doctor';
	imageSrc: string;
	name: string;
	crm: string;
	clinic: string;
	address: string;
	phone: string;
	email: string;
};

type DoctorCardTemplateProps = {
	variant: 'template';
	title?: string;
	description: string;
};

type DoctorCardProps = DoctorCardDoctorProps | DoctorCardTemplateProps;

const DoctorCard: React.FC<DoctorCardProps> = (props) => {
	if (props.variant === 'template') {
		const title = props.title ?? 'Seja um médico parceiro!';

		return (
			<div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-12 max-w-5xl mx-auto">
				<div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
					<Image
						src="/doctor.svg"
						alt={title}
						fill
						className="rounded-full object-contain bg-white shadow-sm p-4"
					/>
				</div>

				<div className="flex-1 w-full pt-4">
					<div className="border-t border-gray-400 w-full mb-6 relative">
						<div className="absolute -top-px left-0 w-16 h-px bg-gray-600"></div>
					</div>

					<h2 className="text-3xl font-light text-gray-600 mb-6">{title}</h2>

					<div className="space-y-3 text-gray-600 text-lg font-light leading-relaxed">
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		);
	}

	const { imageSrc, name, crm, clinic, address, phone, email } = props;

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
					<div className="absolute -top-px left-0 w-16 h-px bg-gray-600"></div>
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
