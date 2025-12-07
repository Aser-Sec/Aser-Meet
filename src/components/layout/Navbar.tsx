import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  User, 
  LogOut,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/agendas', label: 'Agendas', icon: FileText },
  { href: '/new-agenda', label: 'New Agenda', icon: PlusCircle },
  { href: '/account', label: 'Account', icon: User },
];

export function Navbar() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 blur-lg bg-primary/30 animate-glow-pulse" />
            </div>
            <span className="font-display text-xl font-bold gradient-text">
              AserMeet
            </span>
          </Link>

          {/* Desktop Navigation */}
          {user && (
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'nav-link flex items-center gap-2',
                      isActive && 'active'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <div className="px-4 py-4 space-y-2">
            {user && navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
            {user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted w-full"
              >
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            ) : (
              <div className="space-y-2 pt-2 border-t border-border">
                <Link
                  to="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-center rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-center rounded-lg text-sm font-medium bg-primary text-primary-foreground"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}