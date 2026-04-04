import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="w-full rounded-3xl border border-[#ead9ce] bg-[#f2e4db] px-8 py-16 sm:px-12">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#2b1914] sm:text-6xl">
            Redefining Excellence In Healthcare Delivery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f3b2a]">
            Get along the trusted management of VitaData for your medical
            needs. Your health is now in safe hands.
          </p>
        </section>
      </main>
    </div>
  );
}
