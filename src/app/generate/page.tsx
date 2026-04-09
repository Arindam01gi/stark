"use client";

import { useState } from "react";
import { Sparkles, Wand2, Type, Layout, Palette, Send, History, Download, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Generate() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generationDone, setGenerationDone] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setGenerationDone(true);
        }, 3000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in fade-in slide-in-from-right-4 duration-700 h-[calc(100vh-4rem)]">
            {/* Settings / Form */}
            <div className="lg:col-span-5 space-y-8 flex flex-col h-full overflow-y-auto pr-4">
                <header>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Create Space</h1>
                    <p className="text-muted-foreground text-sm">Describe your dream room and let Aura AI bring it to life.</p>
                </header>

                <section className="space-y-6">
                    <div className="space-y-3">
                        <label className="text-sm font-semibold flex items-center gap-2">
                            <Type size={16} className="text-primary" />
                            Prompt
                        </label>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g. A sun-drenched Scandinavian living room with floor-to-ceiling windows and oak flooring..."
                            className="w-full h-32 rounded-2xl border bg-card p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all placeholder:opacity-50"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                <Layout size={16} className="text-primary" />
                                Room Type
                            </label>
                            <select className="w-full h-12 rounded-xl border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                                <option>Living Room</option>
                                <option>Kitchen</option>
                                <option>Bedroom</option>
                                <option>Office</option>
                                <option>Bathroom</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                <Palette size={16} className="text-primary" />
                                Style
                            </label>
                            <select className="w-full h-12 rounded-xl border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                                <option>Scandinavian</option>
                                <option>Industrial</option>
                                <option>Mid-Century</option>
                                <option>Art Deco</option>
                                <option>Minimalist</option>
                                <option>Bohemian</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-semibold">Inspiration Presets</label>
                        <div className="flex flex-wrap gap-2">
                            {["Sunny Day", "Cinematic Night", "Cozy Winter", "Spring Morning", "Cyberpunk", "Earth Tones"].map((preset) => (
                                <button
                                    key={preset}
                                    className="px-4 py-2 rounded-full border bg-card text-xs font-medium hover:border-primary/50 hover:bg-primary/5 transition-all"
                                >
                                    {preset}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mt-auto pt-6 border-t pb-10">
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={cn(
                            "w-full h-14 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all relative overflow-hidden group shadow-xl shadow-primary/20",
                            isGenerating ? "bg-muted cursor-not-allowed" : "bg-primary text-primary-foreground transform active:scale-95"
                        )}
                    >
                        {isGenerating ? (
                            <>
                                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Wand2 size={20} className="group-hover:rotate-12 transition-transform" />
                                Generate My Space
                            </>
                        )}

                        {!isGenerating && (
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                        )}
                    </button>
                </div>
            </div>

            {/* Result Display */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative rounded-[2.5rem] bg-sidebar border overflow-hidden">
                {!generationDone && !isGenerating ? (
                    <div className="text-center space-y-4 max-w-sm px-6">
                        <div className="w-20 h-20 bg-primary/10 text-primary flex items-center justify-center rounded-3xl mx-auto mb-6">
                            <History size={40} />
                        </div>
                        <h2 className="text-2xl font-bold">No Generation Yet</h2>
                        <p className="text-sm text-muted-foreground">Adjust your settings and click generate to see the magic happen.</p>
                    </div>
                ) : isGenerating ? (
                    <div className="space-y-8 flex flex-col items-center w-full px-12">
                        <div className="w-full h-[400px] rounded-3xl bg-muted animate-pulse overflow-hidden relative border border-primary/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer" />
                        </div>
                        <div className="space-y-2 text-center w-full max-w-xs">
                            <div className="h-4 bg-muted rounded w-3/4 mx-auto animate-pulse" />
                            <div className="h-3 bg-muted rounded w-1/2 mx-auto animate-pulse" />
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full p-8 flex flex-col gap-6 animate-in zoom-in duration-500">
                        <div className="relative flex-1 group rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                                alt="Generated Interior"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                            <div className="absolute top-6 right-6 flex flex-col gap-2">
                                <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                    <Download size={18} />
                                </button>
                                <button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Scandinavian Minimalist</h3>
                                <p className="text-sm text-muted-foreground">Ultra HD • Living Room • 16:9</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="h-10 rounded-xl bg-card border px-4 text-xs font-semibold hover:bg-muted transition-all">Variations</button>
                                <button className="h-10 rounded-xl bg-primary text-primary-foreground px-4 text-xs font-semibold hover:opacity-90 shadow-lg shadow-primary/20">Upscale 8K</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
        </div>
    );
}
