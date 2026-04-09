import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { label: "Como você sente", color: "bg-sage-light" },
  { label: "Como você processa", color: "bg-sage" },
  { label: "Como você pensa", color: "bg-primary" },
  { label: "Como você se relaciona", color: "bg-warm" },
];

const ProcessSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="como-funciona" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-12 gap-8">
            <div className={`md:col-span-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="editorial-label mb-4">O Mapa</p>
              <h2 className="editorial-heading mb-6">
                Um mapa<br />da sua mente
              </h2>
              <div className="space-y-4 editorial-body mb-8">
                <p>Mapas não te dizem o que fazer. Eles te mostram onde você está. A avaliação é exatamente isso, um processo que revela seus padrões, suas forças e o que precisa de atenção.</p>
                <p>Não é sobre encontrar o que está errado. É sobre entender como você funciona, e parar de lutar contra si mesmo.</p>
              </div>
              <p className="text-foreground/50 font-serif italic text-lg">
                Cada mente é um mapa diferente. E o seu ainda está por ser desenhado.
              </p>
            </div>

            <div className="md:col-span-7 flex flex-col items-center justify-center">
              <div className={`relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] transition-all duration-1000 delay-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/20" />
                <div className="absolute inset-[50px] md:inset-[75px] rounded-full border border-dashed border-primary/10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary rounded-full w-[90px] h-[90px] md:w-[130px] md:h-[130px] flex items-center justify-center shadow-lg z-10">
                    <p className="font-serif text-[14px] md:text-[16px] text-primary-foreground italic text-center leading-tight px-3">
                      Você,<br />compreendido
                    </p>
                  </div>
                </div>

                {steps.map((s, i) => {
                  const angles = [-90, 0, 90, 180];
                  const angle = angles[i];
                  const rad = (angle * Math.PI) / 180;
                  const radius = 42;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <div
                      key={i}
                      className="absolute z-20 transition-all duration-700"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        transitionDelay: `${300 + i * 150}ms`,
                        opacity: visible ? 1 : 0,
                      }}
                    >
                      <div className={`${s.color} rounded-full w-[70px] h-[70px] md:w-[105px] md:h-[105px] flex items-center justify-center shadow-md`}>
                        <p className={`text-[11px] md:text-[12px] font-sans font-medium text-center leading-tight px-2 ${i >= 2 ? "text-primary-foreground" : "text-foreground/70"}`}>
                          {s.label}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  {steps.map((_, i) => {
                    const angles = [-90, 0, 90, 180];
                    const rad = (angles[i] * Math.PI) / 180;
                    const r = 42;
                    const x = 50 + r * Math.cos(rad);
                    const y = 50 + r * Math.sin(rad);
                    return (
                      <line
                        key={i}
                        x1="50" y1="50"
                        x2={x} y2={y}
                        stroke="hsl(var(--primary))"
                        strokeOpacity="0.15"
                        strokeWidth="0.3"
                        strokeDasharray="1 1"
                      />
                    );
                  })}
                  {steps.map((_, i) => {
                    const angles = [-90, 0, 90, 180];
                    const next = (i + 1) % 4;
                    const rad1 = (angles[i] * Math.PI) / 180;
                    const rad2 = (angles[next] * Math.PI) / 180;
                    const r = 42;
                    return (
                      <line
                        key={`conn-${i}`}
                        x1={50 + r * Math.cos(rad1)} y1={50 + r * Math.sin(rad1)}
                        x2={50 + r * Math.cos(rad2)} y2={50 + r * Math.sin(rad2)}
                        stroke="hsl(var(--primary))"
                        strokeOpacity="0.08"
                        strokeWidth="0.25"
                        strokeDasharray="1.5 1"
                      />
                    );
                  })}
                </svg>
              </div>

              <a href="#contato"
                className={`mt-8 inline-block bg-primary text-primary-foreground px-7 py-3 rounded-full text-[13px] font-sans tracking-wide hover:bg-deep transition-all duration-500 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Começar minha jornada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
