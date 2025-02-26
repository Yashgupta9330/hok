"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Trophy,
  Users,
  Calendar,
  ChevronRight,
  Gamepad2,
  Star,
  Zap,
  Shield,
  Target,
  Award,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/80 to-background/40">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
            alt="Gaming Arena"
            className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-60 dark:opacity-40"
          />
        </div>
        <div
          className={`relative z-10 text-center px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6 animate-float">
            <Star className="w-6 h-6 text-primary animate-glow" />
            <span className="text-xl font-semibold text-primary">
              Premier Gaming Tournaments
            </span>
            <Star className="w-6 h-6 text-primary animate-glow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
            Elite Gaming Tournaments
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Compete in prestigious tournaments, prove your skills, and win
            amazing prizes
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/tournaments"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Browse Tournaments
              <ChevronRight className="ml-2 h-5 w-5 animate-pulse" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
              <Zap className="ml-2 h-5 w-5 animate-pulse" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-primary/60 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: Trophy, text: "Total Prize Pool", value: "$500K+" },
            { icon: Users, text: "Active Players", value: "10K+" },
            { icon: Gamepad2, text: "Games Supported", value: "20+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl border border-border/50 transform hover:scale-105 transition-all hover:shadow-xl animate-slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <stat.icon className="w-8 h-8 text-primary animate-glow" />
                <h3 className="text-2xl font-bold text-primary">
                  {stat.value}
                </h3>
              </div>
              <p className="text-foreground/80 font-medium">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-float">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Choose Us
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Experience competitive gaming at its finest with our premium
              tournament platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Fair Play Guarantee",
                description:
                  "Advanced anti-cheat systems and professional moderation ensure fair competition for all participants.",
              },
              {
                icon: Target,
                title: "Skill-Based Matchmaking",
                description:
                  "Compete against players of similar skill levels for balanced and exciting matches.",
              },
              {
                icon: Award,
                title: "Instant Rewards",
                description:
                  "Secure payment system ensures prize money is distributed quickly and safely to winners.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-card/95 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all transform hover:scale-[1.02] hover:shadow-xl animate-slide-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:animate-glow" />
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent animate-glow" />
        <div className="max-w-7xl mx-auto relative">
          <div className="bg-card/95 backdrop-blur-sm p-12 rounded-3xl border border-border/50 text-center transform hover:scale-[1.01] transition-transform hover:shadow-2xl">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Ready to Compete?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of players competing in tournaments across multiple
              games and platforms.
            </p>
            <Link
              href="/tournaments"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
