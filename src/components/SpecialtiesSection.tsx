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
    <section id="especialidades" className="section-padding bg-card" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className={`text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Especialidades
        </p>
        <h2 className={`text-4xl md:text-5xl font-serif font-light text-foreground mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Áreas de atuação
        </h2>

        <div className="space-y-0">
          {specialties.map((s, i) => (
            <div
              key={i}
              className={`border-t border-border last:border-b transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <h3 className="text-xl md:text-2xl font-serif font-light text-foreground group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <span
                  className={`text-2xl text-primary/40 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground font-sans font-light leading-relaxed max-w-2xl">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
