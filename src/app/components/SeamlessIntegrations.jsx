import Image from "next/image";

const integrations = [
  { name: "Adobe", src: "/logos/adobe.svg" },
  { name: "Google Cloud", src: "/logos/google-cloud.svg" },
  { name: "Google Partner", src: "/logos/google.svg" },
  { name: "PayPal", src: "/logos/paypal.svg" },
  { name: "Odoo", src: "/logos/odoo.svg" },
  { name: "Entrepreneur", src: "/logos/entrepreneur.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Magento", src: "/logos/magento.svg" },
];

export default function SeamlessIntegrations() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Seamless Integrations
        </h2>

        <p className="mt-4 max-w-4xl mx-auto text-gray-500 text-base leading-relaxed">
          We empower leading brands to transform B2B solutions, marketplaces,
          and retail ecosystems with cutting-edge technology, AI-powered
          personalization, and scalable digital solutions.
        </p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-2xl bg-white p-6
                         shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                         transition-all duration-300
                         hover:-translate-y-1.5
                         hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
