import { useState, useEffect } from "react";
import { Eye, GraduationCap, Smartphone, Code, Rocket, Star, Check, Lock, X, Play, TrendingUp, Zap, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function Home() {
  const [counts, setCounts] = useState({ students: 0, satisfaction: 0, hours: 0 });
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Animation counter for hero stats
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 40);
    };

    setTimeout(() => {
      animateCounter(500, 'students');
      animateCounter(98, 'satisfaction');
      animateCounter(24, 'hours');
    }, 1000);
  }, []);

  const examples = [
    {
      id: 'sports',
      title: 'Paris Sportifs',
      icon: '⚽',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    },
    {
      id: 'blog',
      title: 'Blog Pro',
      icon: '✏️',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    },
    {
      id: 'unlock',
      title: 'Déblocage Mobile',
      icon: '🔓',
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      icon: '🛒',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    },
    {
      id: 'investment',
      title: 'Investissement',
      icon: '📈',
      gradient: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      icon: '🎨',
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
      <div className="fixed top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-flow bg-clip-text text-transparent">
            WebApp Formation
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('examples')} className="hover:text-primary transition-colors">
              Exemples
            </button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
              Prix
            </button>
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 glow">
              Commencer
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Créez des <span className="gradient-flow bg-clip-text text-transparent">Apps Web</span> 
                <br />depuis votre <span className="text-accent">Mobile</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sans code • Sans ordinateur • Formation complète
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <button 
                onClick={() => scrollToSection('examples')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 glow flex items-center gap-2"
              >
                <Eye size={20} />
                Voir les Exemples
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="border border-border hover:bg-muted px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2"
              >
                <Play size={20} />
                Commencer maintenant
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 animate-scale-in">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{counts.students}</div>
                <div className="text-sm text-muted-foreground">Étudiants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{counts.satisfaction}%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">{counts.hours}h</div>
                <div className="text-sm text-muted-foreground">Formation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 animate-fade-in-up hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Smartphone className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Mobile</h3>
              <p className="text-muted-foreground">Créez directement depuis votre smartphone</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 animate-fade-in-up [animation-delay:0.2s] hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float [animation-delay:2s]">
                <Code className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sans Code</h3>
              <p className="text-muted-foreground">Interface visuelle intuitive</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-success/10 to-success/5 backdrop-blur-sm border border-success/20 animate-fade-in-up [animation-delay:0.4s] hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float [animation-delay:4s]">
                <Rocket className="text-success" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Résultats Rapides</h3>
              <p className="text-muted-foreground">Premier site en 24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              6 Exemples <span className="text-primary">Inspirants</span>
            </h2>
            <p className="text-xl text-muted-foreground">Sites créés par nos étudiants</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div 
                key={example.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in-up hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedExample(example.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-90`} />
                <img 
                  src={example.image} 
                  alt={example.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-3xl mb-2">{example.icon}</div>
                  <h3 className="text-xl font-bold">{example.title}</h3>
                </div>
                <div className="absolute top-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Transformez Votre <span className="text-accent">Avenir</span>
            </h2>
            <p className="text-xl text-muted-foreground">Formation complète • Accès immédiat</p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl p-8 border border-primary/30 animate-scale-in glow">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Formation WebApp Mobile</h3>
              <div className="space-y-2">
                <span className="text-5xl font-bold text-primary">297€</span>
                <span className="text-muted-foreground line-through ml-2">497€</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  "24h de contenu vidéo",
                  "69 tutoriels pratiques",
                  "6 projets complets",
                  "Support 24/7",
                  "Communauté Discord",
                  "Certificat inclus",
                  "Mises à jour à vie",
                  "Garantie 30 jours"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="text-success" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 glow flex items-center justify-center gap-2">
                <GraduationCap size={20} />
                COMMENCER MAINTENANT
              </button>
              
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Lock size={14} />
                Paiement sécurisé • Garantie 30 jours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold gradient-flow bg-clip-text text-transparent mb-4">
            WebApp Formation
          </div>
          <p className="text-muted-foreground mb-8">
            La première formation pour créer des sites web depuis votre mobile
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 WebApp Formation. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Example Modal */}
      {selectedExample && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedExample(null)}
        >
          <div 
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                  {examples.find(e => e.id === selectedExample)?.title}
                </h3>
                <button 
                  onClick={() => setSelectedExample(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-6">
                <img 
                  src={examples.find(e => e.id === selectedExample)?.image} 
                  alt="Example"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Fonctionnalités</h4>
                    <div className="space-y-2">
                      {[
                        "Interface responsive",
                        "Paiement sécurisé", 
                        "Dashboard admin",
                        "SEO optimisé"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="text-success" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Détails</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Temps:</strong> 3-5 jours</p>
                      <p><strong>Difficulté:</strong> Débutant</p>
                      <p><strong>Outils:</strong> Templates mobiles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
