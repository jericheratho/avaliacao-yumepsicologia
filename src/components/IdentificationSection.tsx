import { useEffect, useRef, useState } from "react";

const questions = [
  "Por que eu me canso tanto sem fazer nada?",
  "Por que me saboto justamente quando mais quero avançar?",
  "Por que me sinto sozinho mesmo cercado de gente?",
  "Por que tenho tantas ideias e não consigo executar nenhuma?",
  "Por que me sinto errado — mesmo sem saber o porquê?",
];

const IdentificationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4">Identificação</p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
          Você se reconhece aqui?
        </h2>
        <p className="text-muted-foreground font-sans font-light max-w-2xl leading-relaxed mb-4">
          Algumas perguntas ficam anos dentro da gente sem resposta.
        </p>
        <p className="text-muted-foreground font-sans font-light max-w-2xl leading-relaxed mb-16">
          Tem um tipo de cansaço que ninguém vê. Não é falta de sono. Não é preguiça. É o esforço silencioso de uma vida inteira tentando caber em espaços que nunca foram feitos para você.
        </p>
        <p className="text-sm text-warm font-sans italic mb-12">
          Se você chegou até aqui, provavelmente já está cansado de não se entender.
        </p>

        <div className="space-y-0">
          {questions.map((q, i) => (
            <div
              key={i}
              className={`group border-t border-border last:border-b py-6 flex items-start gap-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="text-xs font-sans text-primary/40 pt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg md:text-xl font-serif text-foreground/80 group-hover:text-primary transition-colors duration-300">
                {q}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
