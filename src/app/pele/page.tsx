import PageLayout from '@/components/PageLayout';

export default function Pele() {
    return (
        <PageLayout>
            <div className="container mx-auto px-4 py-12 bg-white/80 rounded-lg mt-10 max-w-4xl">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Pele</h1>
                <p className="text-lg text-gray-700 text-center">
                    Informações e cuidados essenciais para a saúde da sua pele.
                </p>
            </div>
        </PageLayout>
    );
}
