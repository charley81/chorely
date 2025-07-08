import { Heading } from '@/components/heading';
import { initialChores } from '@/data';

type ChorePageProps = {
  params: {
    choreId: string;
  };
};

export default async function ChorePage({ params }: ChorePageProps) {
  const { choreId } = await params;
  const chore = initialChores.find((chore) => chore.id === choreId);

  if (!chore) {
    return <div>Chore not found</div>;
  }

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Chore Page"
        description={`You are viewing ${chore.title}`}
      />

      <h3>{chore.title}</h3>
      <p>{chore.content}</p>
    </div>
  );
}
