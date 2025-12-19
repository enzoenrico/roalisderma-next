import GrayHeader from '@/components/GrayHeader';
import PageLayout from '@/components/PageLayout';
import TeamSection from '@/components/TeamSection';

export default function QuemSomos() {
    return (
        <PageLayout>
            <GrayHeader
                title='SISTEMA DE TRATAMENTO ANTI-IDADE'
                description='Adotamos uma abordagem única, aprofundada e baseada nos mais recentes estudos científicos sobre o envelhecimento da pele.'
            />

            <div className='container'>
            <TeamSection />
            </div>
        </PageLayout>
    );
}
