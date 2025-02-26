import TournamentDetailsContent from './tournament-details';


export async function generateStaticParams() {
  const response = await fetch('http://localhost:8080/api/tournaments');
  const tournaments = await response.json();

  return tournaments.map((tournament: any) => ({
    id: tournament.id.toString(),
  }));
}

export default async function TournamentDetails({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:8080/api/tournaments/${params.id}`);
  const tournament = await response.json();

  return <TournamentDetailsContent tournament={tournament} />;
}
