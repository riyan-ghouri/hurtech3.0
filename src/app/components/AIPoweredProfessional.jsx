
export default function AIPoweredProfessional({data}) {
  return (
    <section className="w-full h-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <h2 className="mb-6 max-w-xl text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
              {data.tittle}
            </h2>

            <p className="max-w-xl text-[16px] leading-relaxed text-gray-500">
              {data.desc}
            </p>
          </div>

          {/* Right Image */}
          <div className="relative md:h-96 w-full  overflow-hidden rounded-2xl sm:h-60">
            <img
              src={data.src}
              alt="AI Healthcare"
             
            />
          </div>

        </div>
      </div>
    </section>
  );
}
