const steps = [
  { label: "Como você sente", color: "bg-sage-light" },
  { label: "Como você processa", color: "bg-sage" },
  { label: "Como você pensa", color: "bg-primary" },
  { label: "Como você se relaciona", color: "bg-warm" },
];

const ProcessSection = () => {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4">O Mapa</p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
          Um mapa da sua mente
        </h2>
        <p className="text-muted-foreground font-sans font-light max-w-2xl leading-relaxed mb-4">
          Mapas não te dizem o que fazer. Eles te mostram onde você está. A avaliação é exatamente isso — um processo que revela seus padrões, suas forças e o que precisa de atenção.
        </p>
        <p className="text-muted-foreground font-sans font-light max-w-2xl leading-relaxed mb-4">
          Não é sobre encontrar o que está errado. É sobre entender como você funciona — e parar de lutar contra si mesmo.
        </p>
        <p className="text-foreground/60 font-serif italic mb-16">
          Cada mente é um mapa diferente. E o seu ainda está por ser desenhado.
        </p>

        {/* Visual diagram */}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 w-full max-w-2xl">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`${s.color} rounded-2xl p-6 text-center flex items-center justify-center min-h-[120px] animate-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <p className="text-sm font-sans font-medium text-foreground/80">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="w-px h-8 bg-border" />
            <svg width="12" height="12" viewBox="0 0 12 12" className="text-primary/40">
              <path d="M6 0L12 6L6 12L0 6Z" fill="currentColor" />
            </svg>
            <div className="w-px h-8 bg-border" />
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-full px-10 py-5">
            <p className="font-serif text-lg text-primary italic">Você, compreendido</p>
          </div>

          <a
            href="#contato"
            className="mt-12 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-sans text-sm tracking-wide hover:bg-sage transition-colors duration-300"
          >
            Começar minha jornada
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
