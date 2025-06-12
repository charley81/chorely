import { initialChores } from '@/data';

type SingleChorePageProps = {
  params: Promise<{ choreId: string }>;
};

export default async function SingleChorePage({
  params,
}: SingleChorePageProps) {
  const { choreId } = await params;
  const chore = initialChores.find((chore) => chore.id === choreId);

  if (!chore) {
    return <h3 className="mt-20 text-6xl">Chore not found</h3>;
  }

  return (
    <div>
      <h2 className="mt-20 text-2xl">{chore.title}</h2>
      <p className="text-xl">{chore.conent}</p>
    </div>
  );
}
