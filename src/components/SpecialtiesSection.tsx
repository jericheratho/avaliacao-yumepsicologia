import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const specialties = [
  {
    title: "TDAH",
    text: "Em adultos parece procrastinação crônica, dificuldade de começar tarefas, hiperfoco em certas coisas e paralisação em outras. Mapeamos esse padrão e criamos estratégias reais de funcionamento.",
  },
  {
    title: "Altas Habilidades / Superdotação",
    text: "Uma das condições mais subdiagnosticadas, especialmente em adultos. A intensidade, sensibilidade excessiva e pensamento acelerado são características, não defeitos. Entender isso muda tudo.",
  },
  {
    title: "Autismo (TEA)",
    text: "O autismo em adultos frequentemente passa anos sem diagnóstico. Muitos aprenderam a mascarar e se adaptar, a um custo emocional altíssimo. A avaliação oferece um nome e um caminho de aceitação e suporte.",
  },
  {
    title: "Demências",
    text: "Avaliamos o perfil cognitivo para diferenciar tipos de demência, identificar o estágio e orientar as melhores estratégias de cuidado, tanto para a pessoa quanto para a família.",
  },
  {
    title: "Outras condições",
    text: "Sequelas de AVC, ansiedade, depressão, transtornos de personalidade, dificuldades de aprendizagem e outras condições que impactam o funcionamento cognitivo e emocional no dia a dia.",
  },
];

const SpecialtiesSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="especialidades" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-5">
          {/* Left: large decorative text + heading */}
          <div className={`md:col-span-4 relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="md:sticky md:top-32">
              <p className="editorial-label mb-4">Especialidades</p>
              <h2 className="editorial-heading mb-6">
                Áreas de<br />atuação
              </h2>
              {/* Decorative large text */}
              <span className="hidden md:block text-[8rem] font-serif font-light text-primary/[0.06] leading-none select-none -ml-2">
                05
              </span>
            </div>
          </div>

          {/* Right: accordion */}
          <div className={`md:col-span-8 bento-card p-8 md:p-10 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {specialties.map((s, i) => (
              <div key={i} className="border-b border-border/60 last:border-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                >
                  <h3 className="text-xl md:text-2xl font-serif font-light text-foreground group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <span className={`text-xl text-primary/30 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-60 pb-5" : "max-h-0"}`}>
                  <p className="editorial-body max-w-xl">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
