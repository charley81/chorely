type PlaceholderProps = {
  label: string;
};

export function Placeholder({ label }: PlaceholderProps) {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center">
      <h2 className="text-lg text-center">{label}</h2>
    </div>
  );
}
