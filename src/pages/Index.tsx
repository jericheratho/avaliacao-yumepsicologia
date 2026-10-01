import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, Play, Sparkles } from "lucide-react";
import logo from "@/assets/logo-yume.png";
import heroImage from "@/assets/hero-mind-map.jpg";

const WHATSAPP_URL = "http://bit.ly/4tPDjR6";

const questions = [
  "Você precisa de mais tempo do que as outras pessoas para fazer coisas que parecem simples?",
  "Esquece compromissos?",
  "Procrastina mesmo quando quer muito fazer alguma coisa?",
  "Se sente incompreendido(a) pelos outros e tem dificuldade de fazer amigos?",
];

const benefits = [
  ["Clareza", "Entenda seus padrões de atenção, memória, emoções e comportamento."],
  ["Direção", "Investigue hipóteses como TDAH, autismo e outras possibilidades com cuidado."],
  ["Acolhimento", "Um processo individualizado, feito para você se sentir seguro(a) e compreendido(a)."],
];

const faqs = [
  ["O que é uma avaliação neuropsicológica?", "É uma investigação clínica que observa diferentes funções cognitivas e aspectos emocionais e comportamentais para compreender como você funciona no dia a dia."],
  ["A avaliação diagnostica TDAH e autismo?", "Ela pode investigar hipóteses diagnósticas, como TDAH e autismo, sempre dentro de uma análise clínica cuidadosa e individualizada."],
  ["Quanto tempo dura o processo?", "A duração varia conforme a demanda e o perfil de cada pessoa. Na conversa inicial, explicamos todas as etapas e combinamos o melhor ritmo."],
  ["A avaliação é online?", "Sim. O atendimento é realizado online, com encontros acolhedores e orientações claras para cada etapa do processo."],
  ["Preciso de encaminhamento médico?", "Não é obrigatório. Você pode entrar em contato diretamente para conversar sobre sua necessidade e entender se a avaliação faz sentido para você."],
  ["O resultado vem com um relatório?", "Sim. Ao final, você recebe uma devolutiva cuidadosa e um documento com os principais achados e orientações pertinentes."],
];

const Index = () => {
  const [answers, setAnswers] = useState<Record<number, "Sim" | "Não">>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const answeredCount = Object.keys(answers).length;
  const resultText = useMemo(() => {
    if (answeredCount === 0) return "Responda com calma. Não existe resposta certa.";
    if (answeredCount < questions.length) return `${answeredCount} de ${questions.length} respondidas`;
    return "Pronto. Seu próximo passo pode ser uma conversa.";
  }, [answeredCount]);

  const scrollToContact = () => document.querySelector("#agendamento")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="landing-page">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">
        <a href="#topo" aria-label="Yume Psicologia - início"><img src={logo} alt="Yume Psicologia" /></a>
        <nav aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <button className="header-cta" onClick={scrollToContact}>Agende sua avaliação <ArrowRight size={16} /></button>
      </header>

      <section id="topo" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy" id="conteudo">
          <p className="eyebrow">YUME PSICOLOGIA <span>·</span> AVALIAÇÃO NEUROPSICOLÓGICA</p>
          <h1 id="hero-title">Você sempre se sentiu <em>diferente?</em></h1>
          <p className="hero-lead">A avaliação neuropsicológica ajuda a compreender seu funcionamento cognitivo e comportamental e pode investigar hipóteses diagnósticas, como TDAH e autismo.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}>Começar agora <ArrowDown size={18} /></button>
            <span className="micro-copy">Um primeiro passo, no seu tempo.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Ilustração abstrata de conexões e caminhos da mente" />
            <div className="hero-note"><Sparkles size={15} /><span>mais clareza<br /><strong>sobre você</strong></span></div>
          </div>
          <span className="hero-index">01 <span>/ 04</span></span>
        </div>
      </section>

      <section id="quiz" className="quiz-section section-shell" aria-labelledby="quiz-title">
        <div className="section-intro">
          <p className="eyebrow">UM CONVITE À REFLEXÃO</p>
          <h2 id="quiz-title">Talvez você não esteja exagerando.<br /><em>Talvez exista uma explicação.</em></h2>
          <p>Responda às perguntas abaixo pensando na sua rotina. Este exercício não substitui uma avaliação clínica, mas pode abrir uma conversa importante.</p>
        </div>
        <div className="quiz-card">
          <div className="quiz-progress"><span>PERGUNTA {Math.min(answeredCount + 1, questions.length)} DE {questions.length}</span><span>{resultText}</span></div>
          <div className="progress-track"><span style={{ width: `${(answeredCount / questions.length) * 100}%` }} /></div>
          <div className="question-list">
            {questions.map((question, index) => (
              <div className={`question-row ${answers[index] ? "is-answered" : ""}`} key={question}>
                <span className="question-number">0{index + 1}</span>
                <p>{question}</p>
                <div className="answer-actions">
                  {(["Sim", "Não"] as const).map((answer) => (
                    <button key={answer} className={answers[index] === answer ? "selected" : ""} onClick={() => setAnswers((current) => ({ ...current, [index]: answer }))} aria-pressed={answers[index] === answer}>
                      {answers[index] === answer && <Check size={14} />} {answer}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {answeredCount === questions.length && <div className="quiz-finish"><Check size={18} /> Obrigado por se escutar. Se quiser, podemos conversar sobre o que apareceu para você.</div>}
        </div>
      </section>

      <section id="como-funciona" className="video-section section-shell" aria-labelledby="video-title">
        <div className="video-copy">
          <p className="eyebrow">DEPOIS DE SE OUVIR</p>
          <h2 id="video-title">Entender a sua mente<br /><em>muda o jeito de caminhar.</em></h2>
          <p>Uma avaliação não serve para colocar você em uma caixa. Ela serve para oferecer um mapa: dos seus recursos, desafios e possibilidades.</p>
          <button className="text-button" onClick={scrollToContact}>Quero entender melhor <ArrowRight size={17} /></button>
        </div>
        <div className="video-card" role="img" aria-label="Vídeo de apresentação da avaliação neuropsicológica">
          <img src={heroImage} alt="" />
          <div className="video-overlay"><button className="play-button" aria-label="Reproduzir vídeo"><Play size={22} fill="currentColor" /></button><span>um olhar acolhedor<br /><strong>para o seu funcionamento</strong></span></div>
          <span className="video-caption">VÍDEO DE APRESENTAÇÃO · 02:14</span>
        </div>
      </section>

      <section id="beneficios" className="benefits-section section-shell" aria-labelledby="benefits-title">
        <div className="section-intro narrow"><p className="eyebrow">O QUE VOCÊ PODE ENCONTRAR</p><h2 id="benefits-title">Benefícios de uma avaliação<br /><em>feita para você.</em></h2></div>
        <div className="benefits-grid">{benefits.map(([title, description], index) => <article className="benefit-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section id="duvidas" className="faq-section section-shell" aria-labelledby="faq-title">
        <div className="faq-heading"><p className="eyebrow">AINDA TEM DÚVIDAS?</p><h2 id="faq-title">Perguntas que<br /><em>podem ajudar.</em></h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={20} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div>
      </section>

      <section id="agendamento" className="contact-section section-shell">
        <div><p className="eyebrow">SEU PRÓXIMO PASSO</p><h2>Você não precisa<br /><em>entender tudo sozinho(a).</em></h2><p>Agende uma conversa inicial e descubra se a avaliação neuropsicológica é o caminho certo para você.</p></div>
        <a className="contact-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar minha avaliação <ArrowRight size={18} /></a>
      </section>

      <footer className="site-footer"><img src={logo} alt="Yume Psicologia" /><p>Sonhos, acolhimento & muito afeto.</p><span>© 2026 Yume Psicologia · 100% online</span></footer>

      <a className="floating-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span>Agende sua avaliação</span><ArrowRight size={17} /></a>
    </main>
  );
};

export default Index;
