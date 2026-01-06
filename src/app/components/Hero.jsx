    export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-105 w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580281658629-5a6c1d07e4f1?q=80&w=1920')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-5xl flex flex-col items-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Building Future{" "}
              <span className="font-bold">
                Health &amp; Education
              </span>{" "}
              tech
            </h1>

            <p className="mt-4 text-sm sm:text-base text-center text-blue-100">
              Tailored software development for HealthTech innovators and
              EdTech pioneers. Secure, <br /> compliant, and user-centric.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-md cursor-pointer bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition">
                Explore health tech
              </button>

              <button className="rounded-md border cursor-pointer border-white/70 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue-900 transition">
                Explore education tech
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
