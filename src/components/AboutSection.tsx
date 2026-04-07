import ezequiasPhoto from "@/assets/ezequias-photo.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const credentials = [
  "Mestrando em Cultura e Sociedade, UFBA",
  "Neuropsicólogo, UNIFACS",
  "Especialista em Saúde Mental, PUC Minas",
  "Especializando em Avaliação Psicológica, IPOG",
  "Pesquisa Corpo e Cultura, UFRB / UFBA",
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="sobre" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-5">
          {/* Photo card */}
          <div className={`md:col-span-5 bento-card overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img
              src={ezequiasPhoto}
              alt="Ezequias Alves, Neuropsicólogo"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
              width={600}
              height={750}
            />
          </div>

          {/* Content */}
          <div className="md:col-span-7 flex flex-col gap-5">
            <div className={`bento-card p-8 md:p-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <p className="editorial-label mb-4">Sobre mim</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-1">
                Ezequias Alves
              </h2>
              <p className="text-[13px] font-sans text-primary mb-6">Neuropsicólogo · CRP 03/24172</p>
              <div className="space-y-3 editorial-body">
                <p>Acredito que entender como sua mente funciona não é um privilégio, é um direito. Cada pessoa carrega um jeito único de existir, e meu trabalho é ajudar a traduzir isso em palavras, em clareza, em caminhos possíveis.</p>
                <p>Trabalho com avaliação psicológica e neuropsicológica há mais de 5 anos, com foco em neurodivergências, saúde mental e subjetividade. Sou co-proprietário da Yume Psicologia e facilito grupos terapêuticos.</p>
                <p>Também pesquiso, porque acredito que a clínica precisa dialogar com a cultura, com o corpo, com o que somos além do diagnóstico.</p>
              </div>
            </div>

            {/* Credentials row */}
            <div className="grid grid-cols-2 gap-5">
              <div className={`bento-card bg-primary p-6 md:p-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary-foreground/40 mb-4">Formação</p>
                <ul className="space-y-2">
                  {credentials.map((c, i) => (
                    <li key={i} className="text-[13px] font-sans text-primary-foreground/70 leading-snug">{c}</li>
                  ))}
                </ul>
              </div>
              <div className={`bento-card bg-warm p-6 md:p-8 flex flex-col justify-between transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-warm-foreground/40 mb-4">Pesquisa</p>
                <p className="text-[13px] font-sans text-warm-foreground/70 leading-relaxed">
                  Corpo, estética, literatura, subjetividade, gênero e sexualidade
                </p>
                <span className="text-[6rem] font-serif font-light text-warm-foreground/[0.08] leading-none self-end mt-4 select-none">+5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
