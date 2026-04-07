import ezequiasPhoto from "@/assets/ezequias-photo.jpg";

const credentials = [
  "Mestrando em Cultura e Sociedade — Universidade Federal da Bahia (UFBA)",
  "Neuropsicólogo — UNIFACS",
  "Especialista em Saúde Mental — PUC Minas",
  "Especializando em Avaliação Psicológica — IPOG",
  "Grupo de Pesquisa Corpo e Cultura — UFRB / UFBA",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4">Sobre mim</p>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src={ezequiasPhoto}
                alt="Ezequias Alves — Neuropsicólogo"
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={800}
              />
            </div>
          </div>

          <div className="md:col-span-3 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
              Ezequias Alves
            </h2>
            <p className="text-sm font-sans text-primary mb-8">
              Neuropsicólogo · CRP 03/24172
            </p>

            <div className="space-y-4 text-muted-foreground font-sans font-light leading-relaxed">
              <p>
                Acredito que entender como sua mente funciona não é um privilégio — é um direito. Cada pessoa carrega um jeito único de existir, e meu trabalho é ajudar a traduzir isso em palavras, em clareza, em caminhos possíveis.
              </p>
              <p>
                Trabalho com avaliação psicológica e neuropsicológica há mais de 5 anos, com foco em neurodivergências, saúde mental e subjetividade. Sou co-proprietário da Yume Psicologia e facilito grupos terapêuticos.
              </p>
              <p>
                Também pesquiso — porque acredito que a clínica precisa dialogar com a cultura, com o corpo, com o que somos além do diagnóstico.
              </p>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 mt-8">
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-primary/60 mb-6">Formação</h4>
              <ul className="space-y-3">
                {credentials.map((c, i) => (
                  <li key={i} className="text-sm font-sans text-foreground/70 leading-relaxed">{c}</li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-border">
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
