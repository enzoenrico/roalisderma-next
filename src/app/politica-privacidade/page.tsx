import PageLayout from '@/components/PageLayout';

export default function PoliticaPrivacidade() {
    return (
        <PageLayout>
            <div className="py-12 bg-white max-w-4xl px-8 text-black">
                <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Quem somos</h2>
                    <p className="mb-4">O endereço do nosso site é: <a href="https://roalisderma.com.br/" className="text-blue-600 hover:underline">https://roalisderma.com.br/</a></p>
                    <p className="mb-4">A Roalis Derma está localizada em Curitiba, Paraná.</p>
                    <p>Caso tenha qualquer dúvida em relação a este documento ou qualquer informação entre em contato <a href="mailto:contato@roalisderma.com.br" className="text-blue-600 hover:underline">contato@roalisderma.com.br</a>.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Política de Privacidade</h2>
                    <p className="mb-6 text-black">
                        Esta página tem o objetivo de orientar e informar em relação a sua privacidade e proteção dos seus dados, definindo os processos de tratamento dos dados desde a coleta, manipulação, processamento, armazenamento, transmissão e compartilhamento, bem como informar sobre o compromisso e medidas tomadas pela Roalis Derma para garantir a proteção dos dados pessoais, seguindo a Lei 13.709/2018, conhecida como Lei geral de Proteção de Dados – LGPD.
                    </p>
                    <p className="mb-6 text-gray-700">
                        A política de privacidade se aplica, de forma geral, a todos os titulares dos dados, ou seja, clientes, colaboradores e parceiros que se relacionam com a Roalis Derma. A política define como a Roalis Derma poderá coletar, armazenar, utilizar, acessar, transmitir, processar e eliminar os dados coletados, entre os quais inclui informações de identificação pessoal, de acordo com as bases legais aplicáveis e todas as leis de privacidade e proteção de dados em vigor.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">Informações que coletamos</h3>
                    <p className="mb-4">Dados fornecidos através dos formulários preenchidos no site</p>
                    <p className="mb-4">Isso inclui:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Dados de contato: Nome, email, telefone e o conteúdo da sua mensagem.</li>
                    </ul>
                    <p className="mb-6">Além disso, as visitas no site são monitoradas através dos dados de páginas visitadas, cliques realizados, tempo de permanência, performance de campanha de publicidade.</p>

                    <h3 className="text-xl font-semibold mb-3">Como usamos suas informações</h3>
                    <p className="mb-4">Todas suas informações são tratadas como confidenciais, e somente serão utilizadas para os fins descritos e autorizados por você.</p>
                    <p className="mb-3 font-semibold">Usos autorizados</p>
                    <p className="mb-4">Desta forma, poderemos utilizar seus dados para:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Entrar em contato com você para oferecer soluções Roalis Derma;</li>
                        <li>Enviar notificações e mensagens de suporte e atendimento;</li>
                        <li>Comunicação por e-mail com a oferta de produtos, serviços, campanhas e eventos;</li>
                        <li>Fazer campanhas de publicidade de acordo com as suas preferências, gostos e interesses;</li>
                        <li>Fornecer serviços e produtos personalizados de acordo com as suas necessidades;</li>
                        <li>Prevenção e detecção de fraudes, acessos indevidos, envio de spam;</li>
                        <li>Confirmação de autenticidade e veracidade das suas informações;</li>
                        <li>No momento da coleta dos dados poderão ser solicitadas autorizações expressas e claras para outros fins que não estão descritos nessa política;</li>
                        <li>Atendimento de obrigações legais.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3">Exclusão dos dados</h3>
                    <p className="mb-6">Em caso da sua solicitação expressa, os seus dados serão excluídos dos nossos servidores, ou caso as informações não forem mais necessárias ou relevantes para o atendimento e fornecimento dos nossos serviços. Salvo a necessidade de obrigação legal de retenção e preservação dos dados para resguardo dos direitos legais da Roalis Derma.</p>

                    <h3 className="text-xl font-semibold mb-3">Compartilhamento de informações</h3>
                    <p className="mb-4">Seus dados fornecidos não serão compartilhados com ninguém sem a sua autorização expressa.</p>
                    <p className="mb-4">As informações, conteúdos e dados são considerados ativos em caso de negociação em que a empresa Roalis Derma esteja envolvida. Neste caso é reservado o direito de incluir os seus dados entre os ativos da empresa em caso de venda, aquisição ou junção com outra empresa.</p>
                    <p className="mb-6">Em caso de solicitação Judicial, a Roalis Derma se reserva o direito de fornecer seus dados e informações sobre você, para que a empresa esteja em cumprimento com determinações e leis nacionais, ou caso você autorize expressamente.</p>

                    <h3 className="text-xl font-semibold mb-3">Segurança das informações</h3>
                    <p className="mb-4">Suas informações fornecidas neste site são confidenciais e somente membros da equipe Roalis Derma com devida autorização e treinamentos necessários terão acesso. Qualquer uso e manipulação dos dados estarão de acordo com esta política. A equipe Roalis Derma empreenderá todos os esforços necessários para garantir a segurança dos servidores e sistemas responsáveis por gerenciar seus dados.</p>
                    <p className="mb-6">A troca de informações entre o seu computador e o servidor da Roalis Derma são criptografadas pela tecnologia do certificado SSL. Você poderá solicitar cópia dos seus dados armazenados em nossos sistemas. Os dados são mantidos somente enquanto estes forem necessários e/ou relevantes para as finalidades mencionadas nessa política de privacidade, ou em caso de períodos determinados por lei ou judicialmente.</p>

                    <h3 className="text-xl font-semibold mb-3">Atualizações desta política de Privacidade</h3>
                    <p className="mb-6">Está reservado o direito da Roalis Derma de alterar esta política de privacidade conforme for necessário para manter a sua segurança e conveniência. A data da última atualização será sempre informada no final deste documento. Caso sejam feitas alterações relevantes que necessitem de novas autorizações suas, publicaremos uma nova política de privacidade.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Política de Cookies</h2>

                    <h3 className="text-xl font-semibold mb-3">O que são cookies?</h3>
                    <p className="mb-6">Cookies são pequenos arquivos de texto usados para armazenar pequenas informações. Eles são armazenados no seu dispositivo quando o site é carregado no seu navegador. Esses cookies nos ajudam a fazer o site funcionar corretamente, torná-lo mais seguro, fornecer uma melhor experiência ao usuário e entender como o site funciona e analisar o que funciona e onde precisa ser melhorado.</p>

                    <h3 className="text-xl font-semibold mb-3">Como nós usamos cookies?</h3>
                    <p className="mb-6">Como a maioria dos serviços online, nosso site usa cookies primários e de terceiros para diversos fins. Os cookies primários são principalmente necessários para que o site funcione da maneira correta e não coletam nenhum dos seus dados de identificação pessoal.</p>
                    <p className="mb-6">Os cookies de terceiros usados em nosso site são principalmente para entender como o site funciona, como você interage com nosso site, manter nossos serviços seguros, fornecer anúncios relevantes para você e, em geral, fornecer a você uma melhor e experiência do usuário aprimorada e ajuda a acelerar suas interações futuras com nosso site.</p>

                    <h3 className="text-xl font-semibold mb-3">Quais são os tipos de cookies que nós usamos?</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-3">
                            <span className="font-semibold">Essencial:</span> Alguns cookies são essenciais para que você possa experimentar todas as funcionalidades do nosso site. Eles nos permitem manter as sessões do usuário e evitar quaisquer ameaças de segurança. Eles não coletam ou armazenam nenhuma informação pessoal. Por exemplo, esses cookies permitem que você faça login em sua conta, adicione produtos à sua cesta e finalize a compra com segurança.
                        </li>
                        <li className="mb-3">
                            <span className="font-semibold">Estatísticas:</span> Esses cookies armazenam informações como o número de visitantes do site, o número de visitantes únicos, quais páginas do site foram visitadas, a origem da visita etc. Esses dados nos ajudam a entender e analisar o desempenho do site e onde ele precisa ser melhorado.
                        </li>
                        <li className="mb-3">
                            <span className="font-semibold">Marketing:</span> Nosso site exibe anúncios. Esses cookies são usados para personalizar os anúncios que mostramos a você para que sejam significativos para você. Esses cookies também nos ajudam a acompanhar a eficiência dessas campanhas publicitárias. As informações armazenadas nesses cookies também podem ser usadas pelos provedores de anúncios terceirizados para exibir anúncios em outros sites no navegador.
                        </li>
                        <li className="mb-3">
                            <span className="font-semibold">Funcional:</span> Estes são os cookies que ajudam certas funcionalidades não essenciais em nosso site. Essas funcionalidades incluem incorporar conteúdo como vídeos ou compartilhar conteúdo do site em plataformas de mídia social.
                        </li>
                        <li>
                            <span className="font-semibold">Preferências:</span> Esses cookies nos ajudam a armazenar suas configurações e preferências de navegação, como preferências de idioma, para que você tenha uma experiência melhor e eficiente em futuras visitas ao site.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3">Como posso controlar a preferência de cookies?</h3>
                    <p className="mb-4">Se você decidir alterar suas preferências posteriormente durante sua sessão de navegação, clique na guia "Privacidade e Política de Cookies" na tela. Isso exibirá o aviso de consentimento novamente, permitindo que você altere suas preferências ou retire totalmente seu consentimento.</p>
                    <p className="mb-6">Além disso, diferentes navegadores fornecem métodos diferentes para bloquear e excluir cookies usados por sites. Você pode alterar as configurações do seu navegador para bloquear/excluir os cookies. Para saber mais sobre como gerenciar e excluir cookies, visite <a href="https://www.wikipedia.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">wikipedia.org</a> ou <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>

                    <p className="text-sm text-gray-600 mt-8">Curitiba, 31 de janeiro de 2022</p>
                </section>
            </div>
        </PageLayout>
    );
}
