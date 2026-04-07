const CtaSection = () => {
  return (
    <section id="contato" className="section-padding bg-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4">
          Próximo passo
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
          Você já carregou isso sozinho
          <br />
          por tempo demais.
        </h2>
        <p className="text-muted-foreground font-sans font-light leading-relaxed mb-10">
          O mapa da sua mente existe. Ele só ainda não foi desenhado.
          <br />
          Vamos construir juntos.
        </p>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans text-sm tracking-wide hover:bg-sage transition-colors duration-300"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
