import { useEffect, useRef, useState } from "react";

const steps = [
  { label: "Como você\nsente", color: "#bee5ac" },
  { label: "Como você\nprocessa", color: "#86ae72" },
  { label: "Como você\npensa", color: "#5f8849" },
  { label: "Como você se\nrelaciona", color: "#8d786f" },
];

const ProcessSection = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 mb-4">O Mapa</p>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
          Um mapa da sua mente
        </h2>
        <p className="text-muted-foreground font-sans font-light max-w-2xl leading-relaxed mb-4">
          Mapas não te dizem o que fazer. Eles te mostram onde você está. A avaliação é exatamente isso — um processo que revela seus padrões, suas forças e o que precisa de atenção.
        </p>
        <p className="text-muted-foreground font-sans font-light max-w-2xl leading-relaxed mb-4">
          Não é sobre encontrar o que está errado. É sobre entender como você funciona — e parar de lutar contra si mesmo.
        </p>
        <p className="text-foreground/60 font-serif italic mb-16">
          Cada mente é um mapa diferente. E o seu ainda está por ser desenhado.
        </p>

        {/* Circular mind map diagram */}
        <div className="flex flex-col items-center">
          <svg
            ref={svgRef}
            viewBox="0 0 600 600"
            className="w-full max-w-lg"
            aria-label="Diagrama circular: Como você sente, processa, pensa e se relaciona convergem para Você, compreendido"
          >
            {/* Outer ring - dashed orbit */}
            <circle
              cx="300" cy="300" r="220"
              fill="none"
              stroke="#b5c5ac"
              strokeWidth="1"
              strokeDasharray="6 6"
              className={`transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
            />

            {/* Connecting lines from nodes to center */}
            {steps.map((_, i) => {
              const angle = (i * 90 - 90) * (Math.PI / 180);
              const x = 300 + 220 * Math.cos(angle);
              const y = 300 + 220 * Math.sin(angle);
              return (
                <line
                  key={`line-${i}`}
                  x1={x} y1={y} x2="300" y2="300"
                  stroke="#b5c5ac"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className={`transition-all duration-700 ${visible ? "opacity-60" : "opacity-0"}`}
                  style={{ transitionDelay: `${400 + i * 150}ms` }}
                />
              );
            })}

            {/* Inner subtle ring */}
            <circle
              cx="300" cy="300" r="110"
              fill="none"
              stroke="#b5c5ac"
              strokeWidth="0.5"
              strokeDasharray="3 5"
              className={`transition-all duration-1000 ${visible ? "opacity-40" : "opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            />

            {/* Orbit nodes */}
            {steps.map((step, i) => {
              const angle = (i * 90 - 90) * (Math.PI / 180);
              const cx = 300 + 220 * Math.cos(angle);
              const cy = 300 + 220 * Math.sin(angle);
              const r = 62;
              const lines = step.label.split("\n");
              const isLight = i === 0;

              return (
                <g
                  key={i}
                  className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <circle
                    cx={cx} cy={cy} r={r}
                    fill={step.color}
                    className="drop-shadow-sm"
                  />
                  {lines.map((line, li) => (
                    <text
                      key={li}
                      x={cx}
                      y={cy + (li - (lines.length - 1) / 2) * 16}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isLight ? "#3a5a2a" : "#ffffff"}
                      fontSize="12"
                      fontFamily="Inter, sans-serif"
                      fontWeight="400"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}

            {/* Center circle - Você, compreendido */}
            <g
              className={`transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: "800ms", transformOrigin: "300px 300px" }}
            >
              <circle
                cx="300" cy="300" r="72"
                fill="#f0f4ec"
                stroke="#b5c5ac"
                strokeWidth="1.5"
              />
              <text
                x="300" y="294"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#5f8849"
                fontSize="14"
                fontFamily="Cormorant Garamond, serif"
                fontStyle="italic"
              >
                Você,
              </text>
              <text
                x="300" y="314"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#5f8849"
                fontSize="14"
                fontFamily="Cormorant Garamond, serif"
                fontStyle="italic"
              >
                compreendido
              </text>
            </g>

            {/* Small decorative dots along orbit */}
            {[45, 135, 225, 315].map((deg, i) => {
              const angle = deg * (Math.PI / 180);
              const cx = 300 + 220 * Math.cos(angle);
              const cy = 300 + 220 * Math.sin(angle);
              return (
                <circle
                  key={`dot-${i}`}
                  cx={cx} cy={cy} r="3"
                  fill="#b5c5ac"
                  className={`transition-all duration-500 ${visible ? "opacity-50" : "opacity-0"}`}
                  style={{ transitionDelay: `${1000 + i * 100}ms` }}
                />
              );
            })}
          </svg>

          <a
            href="#contato"
            className="mt-12 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-sans text-sm tracking-wide hover:bg-sage transition-colors duration-300"
          >
            Começar minha jornada
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
