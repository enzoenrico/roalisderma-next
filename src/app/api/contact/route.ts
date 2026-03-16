import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const { name, email, message } = await request.json();

		// Basic validation
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Todos os campos são obrigatórios" },
				{ status: 400 }
			);
		}

		const { data, error } = await resend.emails.send({
			from: "Contato Site <onboarding@resend.dev>",
			to: email,
			subject: `Obrigado pelo contato, ${name}!`,
			text: `Olá ${name},\n\nRecebemos sua mensagem e entraremos em contato em breve.\n\nSua mensagem:\n${message}\n\nAtenciosamente,\nEquipe Roalisderma`,
		});

		if (error) {
			console.error("Resend error:", error);
			return NextResponse.json(
				{ error: "Erro ao enviar email" },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true, data });
	} catch (error) {
		console.error("API error:", error);
		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 }
		);
	}
}
