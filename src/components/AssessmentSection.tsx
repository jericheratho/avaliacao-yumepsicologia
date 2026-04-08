import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AssessmentSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-5">
          <div className={`md:col-span-12 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="editorial-label mb-4">Entenda a diferença</p>
            <h2 className="editorial-heading">
              Avaliação psicológica<br className="hidden md:block" /> ou neuropsicológica?
            </h2>
          </div>

          <div className={`md:col-span-6 glass-card p-8 md:p-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-sage" />
              <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary/50">Foco emocional e comportamental</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-4">Avaliação Psicológica</h3>
            <p className="editorial-body mb-8">
              Investiga personalidade, funcionamento emocional e padrões de comportamento. É o ponto de partida para a maioria das pessoas.
            </p>
            <ul className="space-y-3">
              {[
                "Compreensão da personalidade e padrões emocionais",
                "Identificação de ansiedade, depressão e outros transtornos",
                "Avaliação de neurodivergências com base comportamental",
                "Orientação para processos terapêuticos",
              ].map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-[14px] font-sans text-foreground/60">
                  <span className="text-sage mt-0.5 shrink-0">→</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`md:col-span-6 glass-card !bg-primary/80 !backdrop-blur-xl !border-primary/20 p-8 md:p-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary-foreground/50">Foco nas funções cognitivas</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-primary-foreground mb-4">Avaliação Neuropsicológica</h3>
            <p className="text-[15px] font-sans font-light text-primary-foreground/70 leading-[1.8] mb-8">
              Analisa como o cérebro funciona: memória, atenção, linguagem, raciocínio e funções executivas.
            </p>
            <ul className="space-y-3">
              {[
                "Mapeamento detalhado das funções cognitivas",
                "Diagnóstico de TDAH, autismo e altas habilidades",
                "Detecção precoce de demências",
                "Base para o plano de reabilitação cognitiva",
              ].map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-[14px] font-sans text-primary-foreground/70">
                  <span className="text-accent mt-0.5 shrink-0">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;