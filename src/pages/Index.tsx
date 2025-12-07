import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Brain, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

export default function Index() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Meeting Prep</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 animate-fade-up">
            Prepare Better
            <br />
            <span className="gradient-text">Meetings with AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            AserMeet helps you create comprehensive meeting agendas, talking points, and preparation materials in seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {user ? (
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <>
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how you prepare for meetings with intelligent assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow transition-all">
                <Brain className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                AI-Generated Agendas
              </h3>
              <p className="text-muted-foreground">
                Create comprehensive meeting agendas in seconds. Just describe your meeting goals and let AI do the rest.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow transition-all">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Smart Scheduling
              </h3>
              <p className="text-muted-foreground">
                Optimize your meeting time with intelligent time allocation and break suggestions for longer sessions.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow transition-all">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Team Collaboration
              </h3>
              <p className="text-muted-foreground">
                Share agendas with your team, gather input, and ensure everyone comes prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why AserMeet?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Save hours of meeting preparation time',
              'Never miss important discussion points',
              'Keep meetings focused and productive',
              'Easy to use, no learning curve',
              'Export and share with your team',
              'Works with any type of meeting',
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join AserMeet today and start preparing better meetings with AI.
          </p>
          {!user && (
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display font-bold gradient-text">AserMeet</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AserMeet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}