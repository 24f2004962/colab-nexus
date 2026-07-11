import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, LayoutDashboard, ShieldCheck, Users, Sparkles, Clock, Zap } from "lucide-react";
import { BrandLogo, brandLogoUrl } from "@/components/brand-logo";

export const Route = createFileRoute("/")({
  component: Landing,
});

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(): TimeRemaining {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      // Deadline: July 14, 2026, 11:59 PM
      const deadline = new Date(2026, 6, 14, 23, 59, 59).getTime();
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeRemaining;
}

function Landing() {
  const countdown = useCountdown();
  return (
    <div className="min-h-screen hero-bg">
      {/* Nav */}
      <header className="border-b border-border/50 backdrop-blur-xl sticky top-0 z-40 bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/">
            <BrandLogo size={36} withWordmark />
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/auth">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="shadow-glow">
                Apply <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 text-center">
        <div
          className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-[420px] max-w-3xl opacity-40 blur-3xl"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="relative">
          <div className="mx-auto mb-8 flex justify-center animate-scale-in">
            <img
              src={brandLogoUrl}
              alt="CoLab Nation"
              className="h-28 w-28 rounded-2xl shadow-glow ring-1 ring-white/10 object-cover"
            />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/20 px-4 py-1.5 text-xs text-emerald-700 dark:text-emerald-300 animate-fade-in">
            <Zap className="h-3.5 w-3.5 text-emerald-500" />
            🔴 LIVE HIRING · Apply Now!
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl animate-fade-in">
            One workspace to run
            <br />
            <span className="gradient-text">the entire organization.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in">
            Recruitment, onboarding, tasks, projects, departments, meetings, and reports —
            every layer of CoLab Nation, unified.
          </p>
          
          {/* Countdown Timer */}
          <div className="mt-10 mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <p className="font-semibold text-primary">Hiring closes on July 14th</p>
            </div>
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              <div className="rounded-lg bg-surface p-4 border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.days}</div>
                <div className="text-xs text-muted-foreground mt-1">Days</div>
              </div>
              <div className="rounded-lg bg-surface p-4 border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.hours}</div>
                <div className="text-xs text-muted-foreground mt-1">Hours</div>
              </div>
              <div className="rounded-lg bg-surface p-4 border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.minutes}</div>
                <div className="text-xs text-muted-foreground mt-1">Minutes</div>
              </div>
              <div className="rounded-lg bg-surface p-4 border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.seconds}</div>
                <div className="text-xs text-muted-foreground mt-1">Seconds</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
          <Link to="/register">
            <Button size="lg" className="shadow-glow">
              Apply to join
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="lg" variant="outline">
              Member sign in
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          New signups are reviewed by an admin before workspace access is granted.
        </p>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Everything you need</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="surface-1 rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 text-center text-xs text-muted-foreground">
        © CoLab Nation · Internal workspace
      </footer>
    </div>
  );
}

const features = [
  { icon: Users, title: "Smart Recruitment", desc: "Applicant pipeline with resume uploads, interviews, assignments, and department-scoped approvals. Track every candidate efficiently." },
  { icon: LayoutDashboard, title: "Tasks & Projects", desc: "Kanban boards, timelines, and calendar views across every team. Collaborate seamlessly with real-time updates." },
  { icon: Building2, title: "5 Departments", desc: "Technical, Content & Design, Marketing, PR, Events — each with dedicated dashboards and team management." },
  { icon: ShieldCheck, title: "Role-Based Access", desc: "Super Admin, Department Heads, and Members with granular, secure permissions and RLS policies." },
  { icon: Sparkles, title: "Member Directory", desc: "Discover team members, view profiles, connect with colleagues, and build network across departments." },
  { icon: Users, title: "Live Announcements", desc: "Stay updated with organization-wide announcements, news, and important team communications." },
];
