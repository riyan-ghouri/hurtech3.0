


export default function OrganizationsSection({items}) {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-lg text-3xl font-semibold text-gray-900 md:text-4xl">
            Organizations we work with
          </h2>

          <p className="max-w-md text-[16px] leading-relaxed text-gray-500">
            From care providers to research labs, we help healthcare
            organizations deliver smarter services with digital innovation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl bg-gray-100 p-8 transition hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-3 text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
