import ezequiasPhoto from "@/assets/ezequias-photo.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const credentials = [
  "Mestrando em Cultura e Sociedade, Universidade Federal da Bahia (UFBA)",
  "Neuropsicólogo, UNIFACS",
  "Especialista em Saúde Mental, PUC Minas",
  "Especializando em Avaliação Psicológica, IPOG",
  "Grupo de Pesquisa Corpo e Cultura, UFRB / UFBA",
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="sobre" className="section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <div
            className={`md:col-span-5 transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={ezequiasPhoto}
                  alt="Ezequias Alves, Neuropsicólogo"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/40 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`md:col-span-7 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4">
              Sobre mim
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
              Ezequias Alves
            </h2>
            <p className="text-sm font-sans text-primary mb-8">
              Neuropsicólogo · CRP 03/24172
            </p>

            <div className="space-y-4 text-muted-foreground font-sans font-light leading-relaxed">
              <p>
                Acredito que entender como sua mente funciona não é um privilégio, é um direito. Cada pessoa carrega um jeito único de existir, e meu trabalho é ajudar a traduzir isso em palavras, em clareza, em caminhos possíveis.
              </p>
              <p>
                Trabalho com avaliação psicológica e neuropsicológica há mais de 5 anos, com foco em neurodivergências, saúde mental e subjetividade. Sou co-proprietário da Yume Psicologia e facilito grupos terapêuticos.
              </p>
              <p>
                Também pesquiso, porque acredito que a clínica precisa dialogar com a cultura, com o corpo, com o que somos além do diagnóstico.
              </p>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 mt-8">
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-primary/60 mb-5">
                Formação
              </h4>
              <ul className="space-y-2.5">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-sans text-foreground/70 leading-relaxed">
                    <span className="text-sage mt-0.5 shrink-0">·</span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs font-sans text-muted-foreground leading-relaxed">
                  Pesquisa: corpo, estética, literatura, subjetividade, gênero e sexualidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
