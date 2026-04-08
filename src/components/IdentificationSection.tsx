import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const questions = [
  "Por que eu me canso tanto sem fazer nada?",
  "Por que me saboto justamente quando mais quero avançar?",
  "Por que me sinto sozinho mesmo cercado de gente?",
  "Por que tenho tantas ideias e não consigo executar nenhuma?",
  "Por que me sinto errado, mesmo sem saber o porquê?",
];

const IdentificationSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-5">
          <div className={`md:col-span-5 glass-card p-8 md:p-12 flex flex-col justify-between transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <h2 className="editorial-heading mb-6">
                Você se<br />reconhece<br />aqui?
              </h2>
            </div>
            <p className="text-sm text-warm font-sans italic mt-8">
              Se você chegou até aqui, provavelmente já está cansado de não se entender.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col gap-5">
            <div className={`glass-card p-8 md:p-10 !bg-primary/80 !backdrop-blur-xl !border-primary/20 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-primary-foreground/90 font-sans font-light text-[15px] leading-[1.8]">
                Tem um tipo de cansaço que ninguém vê. Não é falta de sono. Não é preguiça. É o esforço silencioso de uma vida inteira tentando caber em espaços que nunca foram feitos para você.
              </p>
            </div>

            <div className={`glass-card p-8 md:p-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {questions.map((q, i) => (
                <div key={i} className="group border-b border-border/40 last:border-0 py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  <span className="text-[10px] font-sans text-primary/30 pt-1.5 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[17px] font-serif text-foreground/75 group-hover:text-primary transition-colors duration-300">
                    {q}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;