export default function HealthcareTrends() {
  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 items-center text-center md:flex-row md:items-start md:justify-between md:text-left">

          <h2 className="max-w-2xl text-3xl font-semibold text-gray-900 md:text-4xl">
            Make most of the leading trends in healthcare
          </h2>

          <p className="max-w-lg text-[16px] leading-relaxed text-gray-600">
            Modern technologies are reshaping how care is delivered, accessed,
            and managed — opening new paths to efficiency and accessibility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 01 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">01</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              Telemedicine
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              growth in international & GCC orders for a global retailer
            </p>
          </div>

          {/* Card 02 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">02</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              AI for clinical decision
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              app rating on App Store for a major sports ecommerce platform
            </p>
          </div>

          {/* Card 03 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">03</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              Remote patient monitoring
            </h4>
            <p className="text-sm leading-relaxed text-gray-500">
              more user engagement with hyper-personalization for a US proptech
            </p>
          </div>

          {/* Card 04 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-3xl font-medium text-gray-900">04</h3>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              Telemedicine
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
