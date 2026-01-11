"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<Status>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMessage("");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.error || "Erro ao enviar mensagem");
			}

			setStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			setStatus("error");
			setErrorMessage(
				error instanceof Error ? error.message : "Erro ao enviar mensagem"
			);
		}
	};

	return (
		<section id="contato" className="w-full  backdrop-blur-sm py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid gap-16 md:grid-cols-2 bg-white">
					{/* Contact Form */}
					<div className="  p-4">
						<h2 className="mb-6 text-2xl font-light tracking-widest text-gray-800 uppercase">
							Contato
						</h2>
						<p className="mb-8 text-gray-600 font-light">
							Preencha com seus dados e envie sua mensagem para nós. Retornaremos o mais breve possível.
						</p>

						{status === "success" && (
							<div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
								Mensagem enviada com sucesso! Entraremos em contato em breve.
							</div>
						)}

						{status === "error" && (
							<div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
								{errorMessage}
							</div>
						)}

						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name" className="sr-only">Nome</label>
								<input
									type="text"
									id="name"
									placeholder="NOME"
									value={formData.name}
									onChange={handleChange}
									required
									disabled={status === "loading"}
									className="w-full border-b border-gray-300 py-2 text-sm  tracking-wide text-gray-800 placeholder-gray-400 focus:border-gray-800 focus:outline-none disabled:opacity-50"
								/>
							</div>
							<div>
								<label htmlFor="email" className="sr-only">Email</label>
								<input
									type="email"
									id="email"
									placeholder="E-MAIL"
									value={formData.email}
									onChange={handleChange}
									required
									disabled={status === "loading"}
									className="w-full border-b border-gray-300 py-2 text-sm  tracking-wide text-gray-800 placeholder-gray-400 focus:border-gray-800 focus:outline-none disabled:opacity-50"
								/>
							</div>
							<div>
								<label htmlFor="message" className="sr-only">Mensagem</label>
								<textarea
									id="message"
									rows={4}
									placeholder="MENSAGEM"
									value={formData.message}
									onChange={handleChange}
									required
									disabled={status === "loading"}
									className="w-full border-b border-gray-300 py-2 text-sm  tracking-wide text-gray-800 placeholder-gray-400 focus:border-gray-800 focus:outline-none resize-none disabled:opacity-50"
								></textarea>
							</div>
							<button
								type="submit"
								disabled={status === "loading"}
								className="mt-4 border border-gray-800 bg-transparent px-8 py-2 text-sm font-medium uppercase tracking-widest text-gray-800 transition hover:bg-gray-800 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{status === "loading" ? "Enviando..." : "Enviar"}
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
								<p>(041) 98821-7590</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
