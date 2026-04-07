import logo from "@/assets/logo-yume.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 px-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Yume Psicologia" className="h-12 w-auto brightness-200 mb-4" loading="lazy" />
            <p className="text-sm font-sans font-light leading-relaxed opacity-60">
              Sonhos, acolhimento & muito afeto.
            </p>
            <div className="mt-6 flex gap-4">
              {["Instagram", "Facebook", "LinkedIn", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-sans opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] opacity-40 mb-4">Contato</h4>
            <p className="text-sm font-sans font-light mb-2">yumepsicologia@gmail.com</p>
            <p className="text-sm font-sans font-light opacity-60">100% Online · Brasil</p>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] opacity-40 mb-4">Legal</h4>
            <p className="text-xs font-sans font-light opacity-50 leading-relaxed">
              Yume Psicologia LTDA · CNPJ: 63.429.516/0001-76
            </p>
            <p className="text-xs font-sans font-light opacity-50 leading-relaxed mt-2">
              Responsável Técnico: Hanna Cerqueira da Silva · CRP 06/224832
            </p>
            <p className="text-xs font-sans font-light opacity-50 leading-relaxed mt-2">
              Adequação à LGPD (Lei 13.709/18) · Clínica credenciada · CRP 06/
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs font-sans opacity-40 text-center">
            © 2026 Yume Psicologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
