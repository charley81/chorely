import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Header title="Home Page" description="Your home page" />

      <h1>Welcome to Chorely</h1>
    </div>
  );
}
