

export const defaultTournament = {
    id: 1,
    title: "Apex Legends Global Series",
    gameName: "Apex Legends",
    date: "2025-04-15",
    prizePool: 150000,
    status: "Upcoming",
    description: "Join the most prestigious Apex Legends tournament of the year. Battle against the world's elite teams in intense matches that will test your skills, strategy, and teamwork. This tournament features the latest map rotations and competitive ruleset.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    participants: 45,
    maxParticipants: 60,
    rules: [
      "Teams must consist of exactly 3 players",
      "All participants must be 18+ years old",
      "Teams must use tournament client",
      "Match rules follow ALGS format",
      "All matches will be streamed"
    ],
    prizeBreakdown: [
      { position: "1st", amount: 75000 },
      { position: "2nd", amount: 40000 },
      { position: "3rd", amount: 20000 },
      { position: "4th", amount: 15000 }
    ]
  }