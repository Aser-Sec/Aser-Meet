import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Calendar, Shield } from 'lucide-react';

export default function Account() {
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || 'User';
  const email = user?.email || '';
  const initials = fullName
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  const createdAt = user?.created_at 
    ? new Date(user.created_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : 'Unknown';

  return (
    <div className="page-container">
      <div className="page-content max-w-3xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            Account Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account information and preferences
          </p>
        </div>

        {/* Profile Card */}
        <Card className="glass border-border/50 mb-6 animate-fade-up">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary text-xl font-display">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-display text-xl">{fullName}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  {email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Account Info */}
        <Card className="glass border-border/50 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <CardTitle className="font-display">Profile Information</CardTitle>
                <CardDescription>
                  Your account details
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={fullName}
                disabled
                className="bg-muted/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                value={email}
                disabled
                className="bg-muted/50"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <Calendar className="h-4 w-4" />
              Member since {createdAt}
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Shield className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <CardTitle className="font-display">Security</CardTitle>
                <CardDescription>
                  Manage your security preferences
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" disabled>
              Change Password (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}