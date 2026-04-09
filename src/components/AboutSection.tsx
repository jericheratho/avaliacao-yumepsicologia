import ezequiasPhoto from "@/assets/ezequias-photo.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const credentials = [
  { label: "Mestrando em Cultura e Sociedade", org: "UFBA" },
  { label: "Neuropsicólogo", org: "UNIFACS" },
  { label: "Especialista em Saúde Mental", org: "PUC Minas" },
  { label: "Especializando em Avaliação Psicológica", org: "IPOG" },
  { label: "Pesquisa Corpo e Cultura", org: "UFRB / UFBA" },
];

const AboutSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="sobre" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-5">
          <div className={`md:col-span-5 flex flex-col items-center justify-center transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative group">
              {/* Liquid glass glow layers */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 via-sage/20 to-accent/30 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-sage-light/20 blur-md" />
              
              {/* Photo container with liquid glass border */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_hsla(102,32%,41%,0.25),0_8px_24px_-8px_hsla(0,0%,0%,0.12)]">
                <div className="absolute inset-0 rounded-3xl border border-white/40 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-primary/5 z-10 pointer-events-none" />
                <img
                  src={ezequiasPhoto}
                  alt="Ezequias Alves, Neuropsicólogo"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-5">
            <div className={`glass-card p-8 md:p-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
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

            <div className={`glass-card p-8 md:p-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="editorial-label mb-5">Formação & Pesquisa</p>
              {credentials.map((c, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4 py-3 border-b border-border/30 last:border-0 first:pt-0 last:pb-0">
                  <span className="text-[14px] font-sans text-foreground/70">{c.label}</span>
                  <span className="text-[12px] font-sans text-primary/50 shrink-0">{c.org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
