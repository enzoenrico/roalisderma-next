import GrayHeader from '@/components/GrayHeader';
import DoctorCard from '@/components/DoctorCard';
import PageLayout from '@/components/PageLayout';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';

export default function MedicosParceiros() {
    return (
        <PageLayout>
            <GrayHeader
                title='MÉDICOS PARCEIROS'
                description='Veja a seguir a relação dos MÉDICOS que já conhecem e utilizam a metodologia ROALISDERMA e seu SISTEMA DE TRATAMENTO ANTI-IDADE'
            />

            <div className="  px-4 w-full bg-gray-200 container">
                <ScrollAnimateWrapper animation='fade-in-left'>
                    <DoctorCard
                        imageSrc="/Images/doctor.jpg"
                        name="Dra. Karina Hübner"
                        crm="28535"
                        clinic="Karina Hübner Clínica Dermatológica"
                        address="Rua Padre Anchieta, 2050, sala 204, Bairro Bigorrilho, Curitiba-PR, CEP 80.730-000"
                        phone="(41) 3503-0586 / (41) 98898-2763"
                        email="drakarinahubner@gmail.com"
                    />
                </ScrollAnimateWrapper>
            </div>
        </PageLayout>
    );
}
