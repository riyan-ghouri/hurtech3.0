export default function TechcareTrends() {
  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-2xl text-2xl font-semibold text-gray-900 md:text-3xl">
            Make the most of the leading trends in edtech
          </h2>

          <p className="max-w-lg text-sm leading-relaxed text-gray-600">
           From AI-driven personalization to immersive experiences, we help education companies tap into the most impactful technologies shaping the future of learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 01 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">01</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              AI-powered personalization
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
             growth in international & GCC orders for a global retailer
            </p>
          </div>

          {/* Card 02 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">02</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
             Immersive learning (AR/VR)
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              app rating on App Store for a major sports ecommerce platform
            </p>
          </div>

          {/* Card 03 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">03</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
             Data-driven insights
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              more user engagement with hyper-personalization for a US proptech
            </p>
          </div>

          {/* Card 04 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">04</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              Automation for efficiency
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              higher conversion for a top global marketplace
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
