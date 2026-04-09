import { Filter, Grid2X2, List, Search } from "lucide-react";

const portfolioItems = [
    { title: "Mid-Century Modern Lounge", category: "Living Room", style: "Mid-Century", date: "Mar 12, 2026", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
    { title: "Neo-Industrial Kitchen", category: "Kitchen", style: "Industrial", date: "Mar 10, 2026", image: "https://images.unsplash.com/photo-1768413292179-d958b344f1d4?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
    { title: "Zen Garden Bedroom", category: "Bedroom", style: "Japanese Minimalist", date: "Mar 08, 2026", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
    { title: "Marble Haven Bathroom", category: "Bathroom", style: "Luxury Modern", date: "Feb 28, 2026", image: "https://images.unsplash.com/photo-1696987007764-7f8b85dd3033?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
    { title: "Scandi-Boho Terrace", category: "Outdoor", style: "Bohemian", date: "Mar 01, 2026", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
    { title: "Emerald Velvet Study", category: "Home Office", style: "Art Deco", date: "Mar 05, 2026", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?fm=jpg&q=60&w=3000&auto=format&fit=crop" },
];

import Image from "next/image";

export default function Portfolio() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
                    <p className="text-muted-foreground">Your curated collection of AI-generated masterpieces.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search styles..."
                            className="h-10 w-64 rounded-xl border bg-card pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border bg-card hover:bg-muted transition-colors">
                        <Filter size={18} />
                    </button>
                </div>
            </header>

            <div className="flex border-b pb-4 gap-6">
                {["All", "Living Room", "Kitchen", "Bedroom", "Office", "Bathroom"].map((cat, i) => (
                    <button
                        key={i}
                        className={`text-sm font-medium transition-colors hover:text-primary ${i === 0 ? "text-primary border-b-2 border-primary pb-4 -mb-[18px]" : "text-muted-foreground"}`}
                    >
                        {cat}
                    </button>
                ))}
                <div className="ml-auto flex items-center gap-2">
                    <button className="p-2 text-primary bg-primary/10 rounded-lg"><Grid2X2 size={18} /></button>
                    <button className="p-2 text-muted-foreground hover:bg-muted rounded-lg"><List size={18} /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted shadow-sm transition-all hover:shadow-2xl hover:shadow-primary/20">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300 z-20">
                                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2">{item.style}</span>
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-sm opacity-80">{item.date}</p>
                                <button className="mt-4 w-full h-10 rounded-xl bg-white text-black font-semibold text-sm hover:bg-primary hover:text-white transition-colors">
                                    View Case Study
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-start px-2">
                            <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-xs text-muted-foreground">{item.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ImageIcon({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
    )
}
