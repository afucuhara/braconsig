"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const text = `Olá, gostaria de agendar uma conversa com a BraConsig.\n\nNome: ${name}\nEmpresa: ${company}\nTelefone: ${phone}\nMensagem: ${message}`;
    window.open(`https://wa.me/5519999021882?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form reveal reveal-delay" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Formulário</span>
        <h3>Agendar uma conversa</h3>
      </div>
      <label>
        Nome
        <input name="name" type="text" placeholder="Seu nome" required />
      </label>
      <div className="form-row">
        <label>
          Empresa
          <input name="company" type="text" placeholder="Nome da empresa" required />
        </label>
        <label>
          WhatsApp
          <input name="phone" type="tel" placeholder="(19) 99999-9999" required />
        </label>
      </div>
      <label>
        Como podemos ajudar?
        <textarea name="message" placeholder="Conte um pouco sobre sua necessidade" rows={4} />
      </label>
      <button className="button button-gold" type="submit">
        Agendar uma conversa
        <ArrowRight size={17} />
      </button>
      <small>Ao enviar, você será direcionado para o WhatsApp.</small>
    </form>
  );
}
