import { Sparkles, ArrowUpRight, Clock, Box, Palette } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <header className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold tracking-tight">Bonjour, John</h1>
                <p className="text-muted-foreground">Ready to transform your living spaces today?</p>
            </header>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Total Designs", value: "24", icon: Box, color: "text-blue-500" },
                    { label: "Active Project", value: "Living Room #4", icon: Sparkles, color: "text-primary" },
                    { label: "Rendering Hours", value: "1.2h", icon: Clock, color: "text-orange-500" },
                    { label: "Credits", value: "850", icon: Palette, color: "text-purple-500" },
                ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="flex items-center justify-between">
                                <div className={stat.color}>
                                    <Icon size={24} />
                                </div>
                                <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" size={20} />
                            </div>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight">Recent Transformations</h2>
                    <button className="text-sm font-medium text-primary hover:underline underline-offset-4">View All</button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Emerald Heights - APT 402", style: "Scandinavian Minimalist", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
                        { title: "Oak Ridge - Kitchen V1", style: "Industrial Modern", image: "https://images.unsplash.com/photo-1768413292179-d958b344f1d4?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
                        { title: "Velvet Sky - Bedroom", style: "Zen Minimalist", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
                    ].map((item, i) => (
                        <div key={i} className="group overflow-hidden rounded-2xl border bg-card transition-all hover:scale-[1.02] hover:shadow-xl">
                            <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-end p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-sm font-medium">{item.style}</span>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col gap-1">
                                <h4 className="font-semibold text-lg leading-tight">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">Generated 2 days ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="flex-1 space-y-4 relative z-10">
                    <h2 className="text-3xl font-bold leading-tight">Unlock Photorealistic Renders</h2>
                    <p className="text-muted-foreground max-w-md">Upgrade to Aura Pro and get access to unlimited 8K renders, private mode, and dedicated cloud storage.</p>
                    <button className="h-12 rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:opacity-90 transition-all transform active:scale-95 shadow-lg shadow-primary/20">
                        Go Pro - $19/mo
                    </button>
                </div>
                <div className="w-80 h-48 bg-sidebar rounded-2xl border shadow-2xl relative z-10 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 opacity-30">
                        <Sparkles size={40} className="text-primary" />
                        <span className="text-xs font-mono tracking-widest uppercase">Aura AI v2.4</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
