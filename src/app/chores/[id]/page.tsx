type ChorePageProps = {
  params: {
    id: string;
  };
};

export default async function ChorePage({ params }: ChorePageProps) {
  const { id } = await params;
  return <div>SingleChorePage for chore: {id}</div>;
}
