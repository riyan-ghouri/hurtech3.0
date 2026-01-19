import Link from "next/link";

export default function BuildTogetherCTA({heading}) {
  return (
    <section className="w-full bg-[#c9daf9] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
          {heading}
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-3xl text-[16px] leading-relaxed text-gray-600">
          Let&apos;s discuss how custom software can solve your specific
          challenges. Design, build, and scale digital commerce solutions that
          drive revenue and operational excellence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#contact" className="rounded-lg bg-blue-600 px-8 py-4 text-[16px] font-semibold text-white transition hover:bg-blue-700">
            Contact us
          </Link>

          <button className="rounded-lg border border-blue-600 px-10 py-4 text-sm font-medium text-blue-700 cursor-pointer transition hover:bg-blue-50">
            Book a meeting
          </button>
        </div>
      </div>
    </section>
  );
}
