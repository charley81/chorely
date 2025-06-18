type HeadingPageProps = {
  title: string;
  description?: string;
};

export function Heading({ title, description }: HeadingPageProps) {
  return (
    <div>
      <h1 className="mt-40 text-4xl font-bold">{title}</h1>
      {description && <p className="mt-2">{description}</p>}
    </div>
  );
}
