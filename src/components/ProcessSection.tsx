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
    <section id="como-funciona" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-5">
          {/* Left: content */}
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
            <a href="#contato"
              className="inline-block mt-8 bg-primary text-primary-foreground px-7 py-3 rounded-full text-[13px] font-sans tracking-wide hover:bg-deep transition-colors duration-300">
              Começar minha jornada
            </a>
          </div>

          {/* Right: visual diagram as bento cards */}
          <div className="md:col-span-7 flex items-center justify-center">
            <div className={`w-full max-w-md transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {steps.map((s, i) => (
                  <div key={i} className={`${s.color} rounded-2xl p-6 md:p-8 flex items-center justify-center min-h-[100px] md:min-h-[130px]`}>
                    <p className={`text-[13px] font-sans font-medium text-center ${i >= 2 ? "text-primary-foreground" : "text-foreground/70"}`}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center gap-1 my-4">
                <div className="w-px h-6 bg-border" />
                <div className="w-2 h-2 rounded-full bg-primary/20" />
                <div className="w-px h-6 bg-border" />
              </div>

              {/* Center result */}
              <div className="bento-card bg-primary/[0.07] border border-primary/15 rounded-full px-8 py-5 mx-auto w-fit">
                <p className="font-serif text-lg text-primary italic text-center">Você, compreendido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
