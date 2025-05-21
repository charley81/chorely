import { initialChores } from '@/app/utils/data';

type ChoresPageProps = {
  params: {
    choreId: string;
  };
};

export default function ChorePage({ params }: ChoresPageProps) {
  const { choreId } = params;
  const chore = initialChores.find((chore) => chore.id === choreId);

  if (!chore) {
    return <div>Chore: {params.choreId} not found</div>;
  }
  return <div>ChoresPage for {chore?.title}</div>;
}
