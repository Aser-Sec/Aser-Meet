import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, PlusCircle, FolderOpen } from 'lucide-react';

export default function Agendas() {
  return (
    <div className="page-container">
      <div className="page-content">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold">
              Your Agendas
            </h1>
            <p className="text-muted-foreground mt-2">
              View and manage your saved meeting agendas
            </p>
          </div>
          <Button asChild>
            <Link to="/new-agenda">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Agenda
            </Link>
          </Button>
        </div>

        {/* Empty State */}
        <Card className="glass border-border/50 animate-fade-up">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mb-6">
              <FolderOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl font-display mb-2">
              No agendas yet
            </CardTitle>
            <CardDescription className="max-w-sm mb-6">
              Your saved agendas will appear here. Create your first agenda to get started with AI-powered meeting preparation.
            </CardDescription>
            <Button asChild>
              <Link to="/new-agenda">
                <FileText className="h-4 w-4 mr-2" />
                Create Your First Agenda
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}