"use client";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  ChevronDown,
  Clock3,
  FileChartColumnIncreasing,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  UserRoundCheck,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const closeMobileMenu = () => {
  document.querySelector<HTMLDetailsElement>(".mobile-menu")?.removeAttribute("open");
};

const whatsappUrl =
  "https://wa.me/5519999021882?text=Olá%2C%20gostaria%20de%20conhecer%20os%20serviços%20da%20BraConsig.";

const services = [
  { title: "BPO Financeiro", image: "/assets/service-v2-bpo.webp" },
  { title: "Contas a pagar e receber", image: "/assets/service-v2-contas.webp" },
  { title: "Conciliação Bancária", image: "/assets/service-v2-conciliacao.webp" },
  { title: "Fluxo de Caixa", image: "/assets/service-v2-fluxo.webp" },
  { title: "Relatórios Gerenciais", image: "/assets/service-v2-relatorios.webp" },
  { title: "Consultoria Financeira", image: "/assets/service-v2-consultoria.webp" },
];

const benefits = [
  { icon: FileChartColumnIncreasing, text: "Mais organização" },
  { icon: Clock3, text: "Economia de tempo" },
  { icon: ChartNoAxesCombined, text: "Decisões com base em números" },
  { icon: LockKeyhole, text: "Segurança das informações" },
  { icon: BadgeCheck, text: "Redução de erros" },
  { icon: WalletCards, text: "Maior controle do caixa" },
];

const differentials = [
  { icon: UserRoundCheck, text: "Atendimento personalizado" },
  { icon: Zap, text: "Tecnologia" },
  { icon: LockKeyhole, text: "Sigilo absoluto" },
  { icon: FileChartColumnIncreasing, text: "Relatórios claros" },
  { icon: MessageCircle, text: "Atendimento próximo ao cliente" },
];

const process = [
  "Conhecemos sua empresa",
  "Organizamos seus processos",
  "Implantamos o controle financeiro",
  "Você recebe relatórios mensais e acompanha os resultados",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="BraConsig - Início">
            <img src="/assets/logo-braconsig.png" alt="BraConsig Gestão Financeira" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="button button-gold header-cta" href="#contato">
            Solicitar Diagnóstico
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <Menu className="menu-open" size={24} />
              <X className="menu-close" size={24} />
            </summary>
            <nav aria-label="Navegação para celular">
              <a href="#inicio" onClick={closeMobileMenu}>Início</a>
              <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
              <a href="#servicos" onClick={closeMobileMenu}>Serviços</a>
              <a href="#beneficios" onClick={closeMobileMenu}>Benefícios</a>
              <a href="#contato" onClick={closeMobileMenu}>Contato</a>
              <a className="button button-gold" href="#contato" onClick={closeMobileMenu}>
                Solicitar Diagnóstico
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <h1 className="hero-title">
              Você administra o seu negócio e nós organizamos suas finanças.
            </h1>
            <div className="hero-description">
              <p>
                Organizamos as finanças da sua empresa para que você possa focar no crescimento.
              </p>
              <p>
                BPO Financeiro e Consultoria Financeira para pequenas e médias empresas.
              </p>
            </div>
            <div className="hero-actions">
              <a className="button button-gold" href="#contato">
                Solicitar Diagnóstico Gratuito
                <ArrowRight size={17} />
              </a>
              <a
                className="button button-outline-light"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={19} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="hero-image-wrap">
              <img
                src="/assets/hero-financeiro-braconsig-v3.webp"
                alt="Mesa de trabalho com notebook e documentos financeiros"
              />
            </div>
          </div>
        </div>
        <a className="scroll-hint" href="#sobre" aria-label="Ir para a próxima seção">
          <ChevronDown size={19} />
        </a>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <div className="about-photo reveal">
            <div className="about-frame">
              <img
                src="/assets/silvana-trombetta-julian.webp"
                alt="Silvana Trombetta Julian, Gerente Financeiro"
              />
            </div>
          </div>

          <div className="about-copy reveal reveal-delay">
            <div className="eyebrow">Quem Somos</div>
            <h3>Silvana Trombetta Julian</h3>
            <p className="role">Gerente Financeiro</p>
            <p className="lead">
              A Braconsig Gestão Financeira nasceu para ajudar empresários a terem controle financeiro, organização e informações confiáveis para tomar melhores decisões.
            </p>
          </div>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="container">
          <div className="section-heading centered reveal">
            <div className="eyebrow">Nossos Serviços</div>
          </div>
          <div className="services-grid">
            {services.map(({ title, image }, index) => (
              <article className="service-card reveal" key={title} style={{ "--delay": `${index * 60}ms`, "--service-image": `url(${image})` } as React.CSSProperties}>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process" id="como-funciona">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow eyebrow-light">Como funciona</div>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div className="process-step reveal" key={item} style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}>
                <div className="step-number">{index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits" id="beneficios">
        <div className="container benefits-grid">
          <div className="section-heading centered reveal">
            <div className="eyebrow">Benefícios</div>
          </div>
          <div className="benefits-list reveal">
            {benefits.map(({ icon: Icon, text }) => (
              <div className="benefit-item" key={text}>
                <Icon size={34} strokeWidth={1.5} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section differentials">
        <div className="container">
          <div className="section-heading centered reveal">
            <div className="eyebrow">Diferenciais</div>
          </div>
          <div className="differentials-grid">
            {differentials.map(({ icon: Icon, text }) => (
              <div className="differential-card reveal" key={text}>
                <Icon size={33} strokeWidth={1.55} />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="contato">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <div className="eyebrow">Contato</div>
            <div className="contact-list">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <span><FaWhatsapp size={22} /></span>
                <div><small>WhatsApp</small><strong>19 99902-1882</strong></div>
              </a>
              <a href="mailto:financeiro@braconsiggestaofinanceira.com.br">
                <span><Mail size={21} /></span>
                <div><small>E-mail</small><strong>financeiro@braconsiggestaofinanceira.com.br</strong></div>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Rua%20Campos%20Salles%2C%202535%20-%20C%2061%2C%20Valinhos%20-%20SP%2C%2013272-350" target="_blank" rel="noreferrer">
                <span><MapPin size={21} /></span>
                <div><small>Localização em Valinhos/SP</small><strong>Rua Campos Salles, 2535 - C 61<br />Vila Faustina II - CEP 13.272-350</strong></div>
              </a>
              <a href="https://www.instagram.com/braconsig.gestaofinanceira/" target="_blank" rel="noreferrer">
                <span><FaInstagram size={23} /></span>
                <div><small>Instagram</small><strong>@braconsig.gestaofinanceira</strong></div>
              </a>
            </div>
          </div>
          <div className="contact-map reveal reveal-delay">
            <iframe
              title="Mapa da BraConsig em Valinhos"
              src="https://maps.google.com/maps?hl=pt-BR&q=Rua%20Campos%20Salles%2C%202535%2C%20Vila%20Faustina%20II%2C%20Valinhos%20-%20SP%2C%2013272-350&ie=UTF8&z=16&output=embed"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo-braconsig.png" alt="BraConsig Gestão Financeira" />
            <p>ORGANIZAÇÃO FINANCEIRA PARA EMPRESAS QUE QUEREM CRESCER.</p>
          </div>
          <div>
            <h3>Contato</h3>
            <a href="tel:+5519999021882"><Phone size={15} /> 19 99902-1882</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><FaWhatsapp size={16} /> WhatsApp</a>
            <a href="mailto:financeiro@braconsiggestaofinanceira.com.br"><Mail size={15} /> financeiro@braconsiggestaofinanceira.com.br</a>
            <a href="https://www.instagram.com/braconsig.gestaofinanceira/" target="_blank" rel="noreferrer"><FaInstagram size={16} /> @braconsig.gestaofinanceira</a>
          </div>
          <div>
            <h3>Endereço</h3>
            <p>Rua Campos Salles, 2535 - C 61<br />Vila Faustina II - Valinhos/SP<br />CEP 13.272-350</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <FaWhatsapp size={29} />
      </a>
    </main>
  );
}
