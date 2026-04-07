import { useState, useEffect } from "react";
import logo from "@/assets/logo-yume.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        <a href="#">
          <img src={logo} alt="Yume Psicologia" className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-sans text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-[13px] font-sans bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-deep transition-colors duration-300"
          >
            Agendar avaliação
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col px-5 py-6 gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="text-foreground/70 hover:text-primary transition-colors py-1.5 text-sm">{item.label}</a>
            ))}
            <a href="#contato" onClick={() => setMenuOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center text-sm hover:bg-deep transition-colors">
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
