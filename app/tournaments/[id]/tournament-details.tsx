"use client";

import { useRouter } from 'next/navigation';
import { Trophy, Calendar, Users, ArrowLeft, Gamepad2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Tournament } from '@/types/tournament';
import { defaultTournament } from '@/lib/data';

interface TournamentDetailsProps {
  tournament: Tournament | undefined;
}

export default function TournamentDetailsContent({ tournament }: TournamentDetailsProps) {
  const router = useRouter();

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tournament not found</h1>
          <button
            onClick={() => router.back()}
            className="text-primary hover:text-primary/80 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tournaments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
          <img
            src={defaultTournament.image}
            alt={tournament.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 left-4">
          <Link
            href="/tournaments"
            className="inline-flex items-center px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/60 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tournaments
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center p-8 bg-gradient-to-t from-background to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
            {tournament.title}
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-xl text-primary/90">{tournament.gameName}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-border/50">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  tournament.status === 'Upcoming'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-100'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-100'
                }`}
              >
                {tournament.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 flex items-center text-muted-foreground hover:bg-secondary/70 transition-colors">
              <Trophy className="w-8 h-8 mr-3 text-primary" />
              <div>
                <div className="text-sm font-medium">Prize Pool</div>
                <div className="text-xl font-bold text-foreground">
                  ${tournament.prizePool.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 flex items-center text-muted-foreground hover:bg-secondary/70 transition-colors">
              <Calendar className="w-8 h-8 mr-3 text-primary" />
              <div>
                <div className="text-sm font-medium">Date</div>
                <div className="text-xl font-bold text-foreground">
                  {new Date(tournament.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 flex items-center text-muted-foreground hover:bg-secondary/70 transition-colors">
              <Users className="w-8 h-8 mr-3 text-primary" />
              <div>
                <div className="text-sm font-medium">Teams</div>
                <div className="text-xl font-bold text-foreground">
                  {defaultTournament.participants}/{defaultTournament.maxParticipants}
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 flex items-center text-muted-foreground hover:bg-secondary/70 transition-colors">
              <Gamepad2 className="w-8 h-8 mr-3 text-primary" />
              <div>
                <div className="text-sm font-medium">Game</div>
                <div className="text-xl font-bold text-foreground">
                  {tournament.gameName}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                About the Tournament
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{tournament.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Tournament Rules
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {defaultTournament.rules.map((rule, index) => (
                  <li
                    key={index}
                    className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 flex items-start hover:bg-secondary/70 transition-all transform hover:scale-[1.02]"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full mr-4 text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Prize Breakdown
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {defaultTournament.prizeBreakdown.map((prize, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 flex justify-between items-center hover:bg-secondary/70 transition-all transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center">
                      <Trophy 
                        className={`w-8 h-8 mr-4 ${
                          index === 0 ? 'text-yellow-500' : 
                          index === 1 ? 'text-gray-400' : 
                          index === 2 ? 'text-amber-600' : 'text-primary/60'
                        }`} 
                      />
                      <span className="text-xl font-bold">{prize.position}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">${prize.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}