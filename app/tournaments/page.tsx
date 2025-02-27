"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trophy, Users, Calendar, Search, Gamepad2, ArrowRight } from 'lucide-react';
import { Tournament } from '@/types/tournament';
import { defaultTournament } from '@/lib/data';

export default function Tournaments() {
  const [filter, setFilter] = useState<'all' | 'Upcoming' | 'Completed'>('all');
  const [search, setSearch] = useState('');
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    // Fetch the tournaments from the API
    async function fetchTournaments() {
      try {
        const response = await fetch(`${API_URL}/tournaments`);
        const data = await response.json();
        setTournaments(data);
      } catch (error) {
        console.error("Failed to fetch tournaments:", error);
      }
    }

    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesFilter = filter === 'all' || tournament.status === filter;
    const matchesSearch = tournament.title.toLowerCase().includes(search.toLowerCase()) ||
                         tournament.gameName.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
            Tournaments
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary/80 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                All Tournaments
              </button>
              <button
                onClick={() => setFilter('Upcoming')}
                className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                  filter === 'Upcoming'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary/80 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setFilter('Completed')}
                className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                  filter === 'Completed'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary/80 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                Completed
              </button>
            </div>
            <div className="relative w-full sm:w-80">
              {/* Ensure the search icon is visible in both dark and light themes */}
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search tournaments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="group bg-card/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-border/50 hover:border-primary/50 transition-all transform hover:scale-[1.02]"
            >
              <div className="relative h-56">
                <img
                  src={defaultTournament.image}
                  alt={tournament.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute top-4 right-4">
                  {/* Tag styling for visibility in both themes */}
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
                      tournament.status === 'Upcoming'
                        ? 'bg-green-100/90 text-green-800 dark:bg-green-900/40 dark:text-green-200'
                        : 'bg-blue-100/90 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200'
                    }`}
                  >
                    {tournament.status}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Gamepad2 className="w-5 h-5" />
                  <span className="font-medium">{tournament.gameName}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 line-clamp-1">{tournament.title}</h2>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {tournament.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Trophy className="w-5 h-5 mr-3 text-primary" />
                    <span className="font-medium">${tournament.prizePool.toLocaleString()} Prize Pool</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <span className="font-medium">{new Date(tournament.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span className="font-medium">{defaultTournament.participants}/{defaultTournament.maxParticipants} Teams</span>
                  </div>
                </div>
                <Link
                  href={`/tournaments/${tournament.id}`}
                  className="group/btn flex items-center justify-center w-full bg-primary text-primary-foreground py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  <span className="mr-2">View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="text-center py-16 bg-card/95 backdrop-blur-sm rounded-2xl">
            <p className="text-muted-foreground text-xl">No tournaments found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
