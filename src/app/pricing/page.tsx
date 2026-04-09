import { Check, Zap, Crown, Building2 } from "lucide-react";

export default function Pricing() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-6xl mx-auto py-10">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tight">Simple, Transparent Pricing</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Choose the plan that fits your creative needs. Start designing for free and upgrade as you grow.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {[
                    {
                        name: "Basic",
                        price: "Free",
                        icon: Zap,
                        description: "For hobbyists exploring AI design.",
                        features: ["5 High-res generations / mo", "Standard styling models", "Public portfolio", "Community support"],
                        button: "Get Started",
                        highlight: false
                    },
                    {
                        name: "Pro",
                        price: "$19",
                        icon: Crown,
                        description: "For power users and homeowners.",
                        features: ["Unlimited 4K generations", "Access to Pro styles", "Private mode", "Priority rendering", "Cloud storage (5GB)"],
                        button: "Go Pro",
                        highlight: true
                    },
                    {
                        name: "Enterprise",
                        price: "$99",
                        icon: Building2,
                        description: "For interior design studios.",
                        features: ["Multiple user seats", "Custom style training", "API Access", "Dedicated manager", "8K Resolution export"],
                        button: "Contact Sales",
                        highlight: false
                    }
                ].map((plan, i) => {
                    const Icon = plan.icon;
                    return (
                        <div
                            key={i}
                            className={`relative flex flex-col p-8 rounded-3xl border transition-all hover:scale-[1.02] ${plan.highlight ? "bg-card border-primary shadow-2xl shadow-primary/20 scale-105 z-10" : "bg-card/50 border-border"}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-2xl ${plan.highlight ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                                    <Icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <span className="text-5xl font-extrabold">{plan.price}</span>
                                {plan.price !== "Free" && <span className="text-muted-foreground">/mo</span>}
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full h-12 rounded-2xl font-bold transition-all transform active:scale-95 ${plan.highlight ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:opacity-90" : "bg-muted hover:bg-muted/80"}`}
                            >
                                {plan.button}
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="mt-20 p-12 rounded-[3rem] bg-sidebar border flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold">Still have questions?</h2>
                <p className="text-muted-foreground max-w-lg">Check out our FAQ or reach out to our support team for any custom requirements or white-label solutions.</p>
                <div className="flex gap-4">
                    <button className="h-10 px-6 rounded-xl border border-border font-medium hover:bg-muted transition-colors">FAQ</button>
                    <button className="h-10 px-6 rounded-xl border border-border font-medium hover:bg-muted transition-colors">Support</button>
                </div>
            </div>
        </div>
    );
}
