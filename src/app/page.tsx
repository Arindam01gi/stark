import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12 animate-in fade-in duration-1000">
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-bounce">
          <Sparkles size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">v2.0 is now live</span>
        </div>

        <h1 className="text-7xl font-extrabold tracking-tighter leading-tight">
          Design your dream space <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/40">
            in seconds with AI.
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The ultimate platform for interior designers and homeowners. Transform any room with photorealistic AI renders tailored to your style.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Link
          href="/dashboard"
          className="group h-16 px-10 rounded-2xl bg-primary text-primary-foreground font-bold text-lg flex items-center gap-3 shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95"
        >
          Enter Dashboard
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/portfolio"
          className="h-16 px-10 rounded-2xl border border-border bg-card/50 backdrop-blur-sm font-bold text-lg flex items-center transition-all hover:bg-muted"
        >
          View Showcase
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 border-t w-full max-w-5xl">
        {[
          { icon: Zap, title: "Instant Rendering", desc: "Get high-quality 4K renders in under 30 seconds." },
          { icon: ShieldCheck, title: "Pro Privacy", desc: "Your designs are your own. Private storage by default." },
          { icon: Globe, title: "World Styles", desc: "60+ premium styles from Scandinavian to Cyberpunk." }
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center space-y-3 p-6 rounded-3xl border bg-card/20 hover:bg-card/40 transition-colors">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <feature.icon size={24} />
            </div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
