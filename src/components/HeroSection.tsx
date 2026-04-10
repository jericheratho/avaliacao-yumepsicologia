import heroImage from "@/assets/hero-mind-map.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden px-5 md:px-10 lg:px-16 pt-24 pb-8">
      <div className="absolute inset-0 pointer-events-none">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-[0.05]" width={1920} height={1080} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="md:col-span-7 lg:col-span-8">
            <p className="editorial-label mb-6 reveal">Avaliação psicológica & neuropsicológica</p>
            <h1 className="text-[clamp(2.8rem,7vw,7rem)] font-serif font-light leading-[1.02] tracking-tight text-foreground reveal reveal-d1">
              Existe um mapa
              <br />
              de como a sua
              <br />
              <span className="italic text-primary">mente funciona.</span>
            </h1>
          </div>

          <div className="md:col-span-5 lg:col-span-4 reveal reveal-d2">
            <div className="glass-card p-8 md:p-10">
              <p className="editorial-body mb-8">
                Não para te colocar numa caixa.
                Mas para que você finalmente se entenda, sem se julgar.
              </p>
              <div className="flex flex-col gap-3">
                <a href="#contato"
                  className="bg-primary text-primary-foreground text-center px-6 py-3 rounded-full text-[13px] font-sans tracking-wide hover:bg-deep transition-colors duration-300">
                  Quero conhecer meu mapa
                </a>
                <a href="#como-funciona"
                  className="border border-primary/20 text-primary text-center px-6 py-3 rounded-full text-[13px] font-sans tracking-wide hover:bg-primary/5 transition-colors duration-300">
                  Como funciona
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 md:mt-40 reveal reveal-d3">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground/60 leading-snug text-center max-w-3xl mx-0 my-0 px-0">
            "Você não é difícil de lidar. Você é uma mente que ainda não teve palavras para o que sente."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
