type SingleChorePageProps = {
  params: {
    choreId: string;
  };
};

export default async function SingleChorePage({
  params,
}: SingleChorePageProps) {
  const { choreId } = await params;
  return (
    <div>
      <h1 className="mt-20 text-center text-6xl">
        Single Chore Page for chore {choreId}
      </h1>
    </div>
  );
}
