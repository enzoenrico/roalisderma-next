export default function Contact() {
  return (
    <section id="contato" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-light tracking-widest text-gray-800 uppercase">
              Contato
            </h2>
            <p className="mb-8 text-gray-600 font-light">
              Preencha com seus dados e envie sua mensagem para nós. Retornaremos o mais breve possível.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="NOME"
                  className="w-full border-b border-gray-300 py-2 text-sm uppercase tracking-wide text-gray-800 placeholder-gray-400 focus:border-gray-800 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-MAIL"
                  className="w-full border-b border-gray-300 py-2 text-sm uppercase tracking-wide text-gray-800 placeholder-gray-400 focus:border-gray-800 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="MENSAGEM"
                  className="w-full border-b border-gray-300 py-2 text-sm uppercase tracking-wide text-gray-800 placeholder-gray-400 focus:border-gray-800 focus:outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 border border-gray-800 bg-transparent px-8 py-2 text-sm font-medium uppercase tracking-widest text-gray-800 transition hover:bg-gray-800 hover:text-white"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Other Contacts */}
          <div className="flex flex-col justify-center bg-gray-50 p-10">
            <h2 className="mb-8 text-2xl font-light tracking-widest text-gray-800 uppercase">
              Outros Contatos
            </h2>
            <div className="space-y-6 text-gray-600 font-light">
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase text-gray-800">Email</h3>
                <p>contato@roalisderma.com.br</p>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase text-gray-800">Telefone / WhatsApp</h3>
                <p>(041) 98462-0034</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
