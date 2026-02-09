
import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Palette, 
  MessageCircle, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  Zap,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook
} from 'lucide-react';
import { PRICING_PLANS, PORTFOLIO_ITEMS, WHATSAPP_LINK, PHONE_NUMBER } from './constants';
import { PricingPlan } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-green-500 flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-sm font-bold tracking-tighter">AL</div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">AuraLink</span>
              <span className="text-[10px] tracking-[0.2em] text-green-400 font-medium uppercase mt-[-4px]">Studio</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-purple-400 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-purple-400 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfólio</a>
            <a href="#planos" className="hover:text-purple-400 transition-colors">Planos</a>
            <a href={WHATSAPP_LINK} className="px-5 py-2.5 bg-white text-black rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Cotação Online
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/5 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg">Início</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg">Serviços</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg">Portfólio</a>
            <a href="#planos" onClick={() => setIsMenuOpen(false)} className="text-lg">Planos</a>
            <a href={WHATSAPP_LINK} className="w-full py-4 bg-purple-600 rounded-xl text-center font-bold">Solicitar Cotação</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-purple-400 mb-8 uppercase">
            <Sparkles size={14} /> Inteligência Artificial & Produção Visual
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            O futuro do marketing <br className="hidden md:block" /> está no AuraLink.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Criamos conteúdos visuais de alta performance utilizando IA generativa e produção profissional. Do roteiro à plotagem final, elevamos sua marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#planos" className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Ver Catálogo de Planos <ChevronRight size={20} />
            </a>
            <a href={WHATSAPP_LINK} className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> Atendimento Comercial
            </a>
          </div>

          {/* Logo Visual Representation */}
          <div className="mt-20 relative">
             <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[1.5px] border-purple-500/30 animate-pulse absolute inset-0 blur-xl"></div>
             <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[1.5px] border-blue-500/30 animate-pulse delay-700 absolute inset-0 blur-xl"></div>
             <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[1px] border-white/10 flex items-center justify-center relative z-10 bg-slate-950/20 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-black tracking-tight">AuraLink</span>
                  <span className="text-lg md:text-2xl tracking-[0.4em] text-green-400 font-bold uppercase">Studio</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 relative bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviços Profissionais</h2>
            <div className="h-1.5 w-24 bg-purple-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Video className="text-blue-400" size={32} />}
              title="Produção de Vídeo"
              description="Vídeos institucionais, comerciais e conteúdo para redes sociais com roteiro otimizado por IA."
              deadline="Entrega: 2-5 dias úteis"
            />
            <ServiceCard 
              icon={<Palette className="text-purple-400" size={32} />}
              title="Design & Artes"
              description="Artes para Feed, Stories e Carrosséis de alta conversão para engajar seu público."
              deadline="Entrega: 24-48h úteis"
            />
            <ServiceCard 
              icon={<Cpu className="text-green-400" size={32} />}
              title="IA Estratégica"
              description="Consultoria e implementação de workflows de IA para criação acelerada de conteúdo."
              deadline="Sessões: 30-60 min"
            />
          </div>
        </div>
      </section>

      {/* Portfolio/Catalog Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Catálogo de Entregas</h2>
              <p className="text-slate-400 max-w-xl">Explore o que estamos criando. Qualidade impecável e rapidez recorde com auxílio tecnológico.</p>
            </div>
            <a href={WHATSAPP_LINK} className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all underline decoration-purple-500/30 underline-offset-8">
              Ver portfólio completo <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 aspect-[4/3]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="planos" className="py-24 px-6 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black mb-6">Escolha sua Aceleração</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Planos mensais por contrato, garantindo profissionalismo e prazos rigorosos para sua marca.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl border border-white/5 bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Contratos com Segurança Jurídica</h3>
                <p className="text-slate-400 text-sm">Todos os nossos planos operam via contrato de prestação de serviço mensal.</p>
              </div>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock size={16} className="text-purple-400" /> Atendimento Comercial
               </div>
               <span className="font-bold text-lg">{PHONE_NUMBER}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative p-12 md:p-20 rounded-[40px] overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-green-600/20 backdrop-blur-3xl"></div>
          <div className="absolute inset-0 border border-white/10 rounded-[40px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Pronto para o próximo nível?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Fale agora com nosso time comercial e receba uma proposta personalizada para seu negócio.
            </p>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 px-10 py-6 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-purple-500/20"
            >
              <MessageCircle size={28} /> Chamar no WhatsApp
            </a>
            <p className="mt-6 text-slate-400 text-sm uppercase tracking-widest font-bold">
              Resposta em minutos • Horário Comercial
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
              <span className="text-2xl font-bold tracking-tighter">AuraLink Studio</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Transformando marcas através da união entre criatividade humana e inteligência artificial de ponta.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} href="#" />
              <SocialIcon icon={<Facebook size={20} />} href="#" />
              <SocialIcon icon={<Mail size={20} />} href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">Links Úteis</h4>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li><a href="#inicio" className="hover:text-purple-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-purple-400 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfólio</a></li>
              <li><a href="#planos" className="hover:text-purple-400 transition-colors">Preços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">Contato</h4>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li className="flex items-center gap-2"><Phone size={16} /> {PHONE_NUMBER}</li>
              <li className="flex items-center gap-2"><MessageCircle size={16} /> Atendimento Comercial</li>
              <li className="text-xs mt-4">AuraLink Studio © {new Date().getFullYear()} <br/> Todos os direitos reservados.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; deadline: string }> = ({ icon, title, description, deadline }) => (
  <div className="p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2 group">
    <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
    <div className="text-sm font-bold text-slate-500 flex items-center gap-2 uppercase tracking-tighter">
      <Clock size={16} /> {deadline}
    </div>
  </div>
);

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  const getColors = () => {
    switch(plan.color) {
      case 'blue': return { 
        accent: 'text-blue-400', 
        bg: 'from-blue-600/20 to-transparent', 
        border: 'border-blue-500/20',
        glow: 'shadow-blue-500/5',
        button: 'bg-blue-600'
      };
      case 'gold': return { 
        accent: 'text-yellow-400', 
        bg: 'from-yellow-600/20 to-transparent', 
        border: 'border-yellow-500/20',
        glow: 'shadow-yellow-500/5',
        button: 'bg-yellow-600 text-black'
      };
      case 'red': return { 
        accent: 'text-red-400', 
        bg: 'from-red-600/20 to-transparent', 
        border: 'border-red-500/20',
        glow: 'shadow-red-500/5',
        button: 'bg-red-600'
      };
    }
  };

  const colors = getColors();

  return (
    <div className={`relative p-8 rounded-[40px] bg-slate-950 border ${colors.border} flex flex-col h-full overflow-hidden shadow-2xl ${colors.glow}`}>
      {plan.highlight && (
        <div className={`absolute top-6 right-[-35px] rotate-45 px-10 py-1 ${colors.button} text-[10px] font-black uppercase tracking-widest`}>
          {plan.highlight}
        </div>
      )}
      
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.bg} -mr-16 -mt-16 blur-3xl opacity-50`}></div>

      <div className="relative z-10 mb-8">
        <h3 className={`text-xl font-black mb-2 tracking-tight ${colors.accent}`}>{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-slate-400 text-lg">R$</span>
          <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
          <span className="text-slate-500 text-sm">/mês</span>
        </div>
      </div>

      <div className="relative mb-8 rounded-3xl overflow-hidden aspect-video bg-slate-900 border border-white/5">
        <img src={plan.image} alt={plan.name} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
            <Zap className={colors.accent} size={40} />
        </div>
      </div>

      <ul className="flex flex-col gap-4 mb-10 flex-grow">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex gap-3 text-sm text-slate-300">
            <CheckCircle2 className={`${colors.accent} shrink-0`} size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href={`${WHATSAPP_LINK}&text=Ol%C3%A1%21+Gostaria+de+assinar+o+${plan.name.replace(' ', '+')}`}
        className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 ${colors.button}`}
      >
        Contratar Agora <ChevronRight size={18} />
      </a>
      
      <div className="mt-4 text-center">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Prazo: {plan.deliveryTime}</span>
      </div>
    </div>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors border border-white/5">
    {icon}
  </a>
);

export default App;
