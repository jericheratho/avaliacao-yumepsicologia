const assessments = [
  {
    title: "Avaliação Psicológica",
    subtitle: "Foco emocional e comportamental",
    description:
      "Investiga personalidade, funcionamento emocional e padrões de comportamento. É o ponto de partida para a maioria das pessoas.",
    items: [
      "Compreensão da personalidade e padrões emocionais",
      "Identificação de ansiedade, depressão e outros transtornos",
      "Avaliação de neurodivergências com base comportamental",
      "Orientação para processos terapêuticos",
    ],
  },
  {
    title: "Avaliação Neuropsicológica",
    subtitle: "Foco nas funções cognitivas",
    description:
      "Analisa como o cérebro funciona: memória, atenção, linguagem, raciocínio e funções executivas.",
    items: [
      "Mapeamento detalhado das funções cognitivas",
      "Diagnóstico de TDAH, autismo e altas habilidades",
      "Detecção precoce de demências",
      "Base para o plano de reabilitação cognitiva",
    ],
  },
];

const AssessmentSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4">
          Entenda a diferença
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-16">
          Avaliação psicológica ou
          <br />
          neuropsicológica?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {assessments.map((a, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-lg hover:border-sage/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-serif font-light text-foreground mb-1">{a.title}</h3>
              <p className="text-sm font-sans text-primary mb-4">{a.subtitle}</p>
              <p className="text-muted-foreground font-sans font-light text-sm leading-relaxed mb-8">
                {a.description}
              </p>
              <ul className="space-y-3">
                {a.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-sans text-foreground/70">
                    <span className="text-sage mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
