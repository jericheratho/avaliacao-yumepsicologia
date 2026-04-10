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
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-5">
          <div className={`md:col-span-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="md:sticky md:top-32">
              <p className="editorial-label mb-4">FAQ</p>
              <h2 className="editorial-heading mb-4">Perguntas<br />frequentes</h2>
              <p className="editorial-body">O medo não some antes da decisão. Ele vem junto. E tudo bem ter medo.</p>
              <p className="text-foreground/50 font-sans text-[13px] italic mt-3">Esses medos são reais, e fazem sentido.</p>
            </div>
          </div>

          <div className={`md:col-span-8 glass-card p-8 md:p-10 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-border/40 last:border-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                >
                  <h3 className="text-[17px] md:text-lg font-serif text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                    "{f.q}"
                  </h3>
                  <span className={`text-xl text-primary/30 transition-transform duration-300 shrink-0 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                  <p className="editorial-body max-w-xl">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
