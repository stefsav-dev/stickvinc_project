import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return(
        <>
        <section id="hero-1" className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="container mx-auto flex flex-col items-center justify-center text-center py-24 px-4 md:py-32">
                {/* Headline */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Build faster with <span className="text-primary">shadcn/ui</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    Beautifully designed components built with Radix UI and Tailwind CSS. 
                    Copy, paste, and start building your app today.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button size="lg" className="rounded-full">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full">
                        View Docs
                    </Button>
                    </div>
                </div>
        </section>

        <section id="hero-2" className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="container mx-auto flex flex-col items-center justify-center text-center py-24 px-4 md:py-32">
                {/* Headline */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Build faster with <span className="text-primary">shadcn/ui</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    Beautifully designed components built with Radix UI and Tailwind CSS. 
                    Copy, paste, and start building your app today.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button size="lg" className="rounded-full">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full">
                        View Docs
                    </Button>
                    </div>
                </div>
        </section>

        <section id="hero-3" className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="container mx-auto flex flex-col items-center justify-center text-center py-24 px-4 md:py-32">
                {/* Headline */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Build faster with <span className="text-primary">shadcn/ui</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    Beautifully designed components built with Radix UI and Tailwind CSS. 
                    Copy, paste, and start building your app today.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button size="lg" className="rounded-full">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full">
                        View Docs
                    </Button>
                    </div>
                </div>
        </section>
        </>
    )
}