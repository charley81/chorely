import { initialChores } from '@/app/utils/data';
import { Placeholder } from '@/components/placeholder';

type ChoresPageProps = {
  params: Promise<{ choreId: string }>;
};

export default async function ChorePage({ params }: ChoresPageProps) {
  const { choreId } = await params;
  const chore = initialChores.find((chore) => chore.id === choreId);

  if (!chore) {
    return <Placeholder label="Chore not found" />;
  }
  return <div>ChoresPage for {chore?.title}</div>;
}
