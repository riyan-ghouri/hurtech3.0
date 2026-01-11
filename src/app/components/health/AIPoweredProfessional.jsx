
export default function AIPoweredProfessional() {
  return (
    <section className="w-full h-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <h2 className="mb-6 max-w-xl text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
              The New AI-Powered Professional: Disruption Talks With WHO,
              Verdane & Shopfully
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-gray-500">
              What does it mean to be a professional in the age of AI? Our
              guests explore how AI is reshaping the way we work—from redefining
              job roles to leading teams that collaborate with smart tools.
              With experience spanning public health, tech, and venture
              capital, they share how to build meaningful innovation in a
              fast-changing world.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-72 w-full  overflow-hidden rounded-2xl sm:h-72">
            <img
              src="./doctor.png"
              alt="AI Healthcare"
             
            />
          </div>

        </div>
      </div>
    </section>
  );
}
