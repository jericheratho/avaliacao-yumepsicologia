import logo from "@/assets/logo-yume.png";

const Footer = () => {
  return (
    <footer className="px-5 md:px-10 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto glass-card p-8 md:p-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Yume Psicologia" className="h-10 w-auto mb-4" loading="lazy" />
            <p className="text-[13px] font-sans font-light text-muted-foreground leading-relaxed max-w-xs">
              Sonhos, acolhimento & muito afeto.
            </p>
            <div className="mt-5 flex gap-5">
              {["Instagram", "Facebook", "LinkedIn", "WhatsApp"].map((s) => (
                <a key={s} href="#"
                  className="text-[11px] font-sans text-foreground/30 hover:text-primary transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-foreground/30 mb-4">Contato</p>
            <p className="text-[13px] font-sans font-light text-foreground/60 mb-1">yumepsicologia@gmail.com</p>
            <p className="text-[13px] font-sans font-light text-foreground/40">100% Online · Brasil</p>
          </div>

          <div>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-foreground/30 mb-4">Legal</p>
            <p className="text-[11px] font-sans font-light text-foreground/40 leading-relaxed">Yume Psicologia LTDA · CNPJ: 63.429.516/0001-76</p>
            <p className="text-[11px] font-sans font-light text-foreground/40 leading-relaxed mt-1.5">Responsável Técnico: Hanna Cerqueira da Silva · CRP 06/224832</p>
            <p className="text-[11px] font-sans font-light text-foreground/40 leading-relaxed mt-1.5">Adequação à LGPD (Lei 13.709/18) · Clínica credenciada</p>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6">
          <p className="text-[11px] font-sans text-foreground/30 text-center">
            © 2026 Yume Psicologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;