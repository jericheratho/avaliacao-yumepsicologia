import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WHATSAPP_URL = "https://yumepsicologia.com.br/#:~:text=TDAH%20%C2%B7%20TEA%20%C2%B7%20AH-,Conhe%C3%A7a%20a%20Avalia%C3%A7%C3%A3o,-03";

const CtaSection = () => {
  const { ref, visible } = useScrollReveal(0.2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`glass-card !bg-primary/80 !backdrop-blur-xl !border-primary/20 relative overflow-hidden p-10 md:p-16 lg:p-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — copy */}
            <div>
              <p className="text-[10px] font-sans uppercase tracking-[0.35em] text-primary-foreground/40 mb-6">Próximo passo</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-primary-foreground leading-[1.08] mb-6">
                Você já carregou isso sozinho por tempo demais.
              </h2>
              <p className="text-[15px] font-sans font-light text-primary-foreground/60 leading-[1.8]">
                O mapa da sua mente existe. Ele só ainda não foi desenhado. Vamos construir juntos.
              </p>
            </div>

            {/* Right — form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl px-5 py-3.5 text-[14px] font-sans focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all"
              />
              <input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                maxLength={20}
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl px-5 py-3.5 text-[14px] font-sans focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl px-5 py-3.5 text-[14px] font-sans focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all"
              />
              <button
                type="submit"
                className="mt-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-full text-[13px] font-sans tracking-wide hover:bg-accent transition-colors duration-300 w-full md:w-auto text-center"
              >
                Agendar avaliação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
