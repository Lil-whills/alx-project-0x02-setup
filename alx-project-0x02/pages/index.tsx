import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 2" content="This is the content of card 2." />
        <Card title="Card 3" content="This is the content of card 3." />
      </main>
    </>
  );
}
