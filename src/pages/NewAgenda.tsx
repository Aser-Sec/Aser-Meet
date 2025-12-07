import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Wand2 } from 'lucide-react';

export default function NewAgenda() {
  return (
    <div className="page-container">
      <div className="page-content max-w-3xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            Create New Agenda
          </h1>
          <p className="text-muted-foreground mt-2">
            Start by providing some details about your meeting
          </p>
        </div>

        {/* Form Card */}
        <Card className="glass border-border/50 animate-fade-up">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wand2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="font-display">Meeting Details</CardTitle>
                <CardDescription>
                  Provide information to generate your agenda
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Meeting Title</Label>
              <Input
                id="title"
                placeholder="e.g., Q4 Product Planning Session"
                className="bg-muted/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="participants">Participants</Label>
              <Input
                id="participants"
                placeholder="e.g., Product team, Engineering leads"
                className="bg-muted/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                placeholder="e.g., 60 minutes"
                className="bg-muted/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectives">Meeting Objectives</Label>
              <Textarea
                id="objectives"
                placeholder="Describe what you want to achieve in this meeting..."
                className="bg-muted/50 min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="context">Additional Context</Label>
              <Textarea
                id="context"
                placeholder="Any background information or specific topics to cover..."
                className="bg-muted/50 min-h-[100px]"
              />
            </div>

            <div className="pt-4">
              <Button className="w-full" disabled>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Agenda (Coming Soon)
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                AI-powered agenda generation will be available in the next update
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}