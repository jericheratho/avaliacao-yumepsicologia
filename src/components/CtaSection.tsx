import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CtaSection = () => {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section id="contato" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`glass-card !bg-primary/80 !backdrop-blur-xl !border-primary/20 relative overflow-hidden p-10 md:p-16 lg:p-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative max-w-xl">
            <p className="text-[10px] font-sans uppercase tracking-[0.35em] text-primary-foreground/40 mb-6">Próximo passo</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-primary-foreground leading-[1.08] mb-6">
              Você já carregou isso sozinho por tempo demais.
            </h2>
            <p className="text-[15px] font-sans font-light text-primary-foreground/60 leading-[1.8] mb-10">
              O mapa da sua mente existe. Ele só ainda não foi desenhado. Vamos construir juntos.
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary px-8 py-3.5 rounded-full text-[13px] font-sans tracking-wide hover:bg-accent transition-colors duration-300"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;