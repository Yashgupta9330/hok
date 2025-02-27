import TournamentDetailsContent from './tournament-details';


const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function generateStaticParams() {
  const response = await fetch(`${API_URL}/tournaments`);
  const tournaments = await response.json();

  return tournaments.map((tournament: any) => ({
    id: tournament.id.toString(),
  }));
}

export default async function TournamentDetails({ params }: { params: { id: string } }) {
  const response = await fetch(`${API_URL}/tournaments/${params.id}`);
  const tournament = await response.json();

  return <TournamentDetailsContent tournament={tournament} />;
}

