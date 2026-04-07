import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "E se a avaliação não mostrar nada?",
    a: "Mostrar que não há uma condição específica também é uma resposta valiosa. Muitas vezes o que precisamos é de clareza, não necessariamente de um diagnóstico.",
  },
  {
    q: "E se for muito caro e não valer a pena?",
    a: "Conversamos sobre isso antes de qualquer compromisso. Você terá todas as informações para decidir, sem pressão.",
  },
  {
    q: "E se for só uma desculpa para a minha bagunça?",
    a: "Entender por que você funciona de um jeito não é desculpa, é o ponto de partida para mudar o que pode ser mudado e parar de se culpar pelo que não pode.",
  },
  {
    q: "E se eu descobrir algo que me afunde mais ainda?",
    a: "Saber é diferente de afundar. Na maioria das vezes, dar nome ao que você sente traz alívio, não mais peso. Você não vai passar por isso sozinho.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="duvidas" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className={`text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Dúvidas</p>
        <h2 className={`text-4xl md:text-5xl font-serif font-light text-foreground mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Suas dúvidas
        </h2>
        <p className={`text-muted-foreground font-sans font-light max-w-xl leading-relaxed mb-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          O medo não some antes da decisão. Ele vem junto. E tudo bem ter medo.
        </p>
        <p className={`text-foreground/60 font-sans font-light text-sm italic mb-16 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Esses medos são reais, e fazem sentido.
        </p>

        <div className="space-y-0">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`border-t border-border last:border-b transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <h3 className="text-lg md:text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                  "{f.q}"
                </h3>
                <span
                  className={`text-2xl text-primary/40 transition-transform duration-300 shrink-0 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground font-sans font-light leading-relaxed max-w-2xl">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
