import heroImage from "@/assets/hero-mind-map.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-15"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05] tracking-tight text-foreground fade-in">
            Existe um mapa
            <br />
            <span className="italic text-primary">de como a sua</span>
            <br />
            <span className="italic text-primary">mente funciona.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl font-sans font-light text-muted-foreground max-w-lg leading-relaxed fade-in fade-in-delay-1">
            Não para te colocar numa caixa.
            <br />
            Mas para que você finalmente se entenda, sem se julgar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 fade-in fade-in-delay-2">
            <a
              href="#contato"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-sans text-sm tracking-wide hover:bg-sage transition-colors duration-300"
            >
              Quero conhecer meu mapa
            </a>
            <a
              href="#como-funciona"
              className="border border-primary/30 text-primary px-8 py-3.5 rounded-full font-sans text-sm tracking-wide hover:bg-primary/5 transition-colors duration-300"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="mt-20 md:mt-28 max-w-2xl fade-in fade-in-delay-3">
          <div className="border-l-2 border-sage/40 pl-6">
            <p className="text-lg md:text-xl font-serif italic text-foreground/70 leading-relaxed">
              "Você não é difícil de lidar. Você é uma mente que ainda não teve palavras para o que sente."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
