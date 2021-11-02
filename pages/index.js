import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-7xl font-semibold">Google Docs Clone</h1>
    </div>
  );
}
