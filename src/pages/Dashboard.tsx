import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  PlusCircle, 
  FileText, 
  Clock, 
  TrendingUp,
  Zap
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'there';

  return (
    <div className="page-container">
      <div className="page-content">
        {/* Welcome Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Welcome back, <span className="gradient-text">{firstName}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your AI-powered meeting preparation assistant. Create agendas, prepare talking points, and make every meeting count.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="glass border-border/50 card-hover group animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow transition-all">
                <PlusCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-display">New Agenda</CardTitle>
              <CardDescription>
                Create a new meeting agenda with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/new-agenda">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Create Agenda
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/50 card-hover group animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="font-display">Your Agendas</CardTitle>
              <CardDescription>
                View and manage your saved meeting agendas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" asChild className="w-full">
                <Link to="/agendas">
                  View Agendas
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-border/50 card-hover group animate-fade-up md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="font-display">Recent Activity</CardTitle>
              <CardDescription>
                No recent activity yet. Create your first agenda!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Your recent agendas will appear here
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-display font-bold mb-6">Coming Soon</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Meeting Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Track your meeting preparation patterns and improve over time
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Smart Suggestions</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered suggestions for better meeting outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}