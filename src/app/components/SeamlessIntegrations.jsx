import Image from "next/image";

const integrations = [
  { name: "Adobe", src: "/adobe.svg" },
  { name: "Google Cloud", src: "/google-cloud.svg" },
  { name: "Google Partner", src: "/google.svg" },
  { name: "PayPal", src: "/paypal.svg" },
  { name: "Odoo", src: "/odoo.png" },
  { name: "Entrepreneur", src: "/Entrepreneur.png" },
  { name: "Stripe", src: "/strip.svg" },
  { name: "Magento", src: "/magento.svg" },
];


export default function SeamlessIntegrations() {
  return (
    <section className="bg-gray-100 py-20 px-4">
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
              className="flex items-center justify-center cursor-pointer rounded-2xl gap-4 bg-white p-6
                         shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                         transition-all duration-300
                         hover:-translate-y-1.5
                         hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={item.name === "Entrepreneur" || item.name === "Odoo" || item.name === "Stripe" ? 80 : 50}
                height={item.name === "Entrepreneur" || item.name === "Odoo" || item.name === "Stripe" ? 80 : 50}
                className="object-contain rounded-xl"
              />

              <p className="text-xl font-medium">
                {item.name === "Entrepreneur" || item.name === "Odoo" || item.name === "Stripe" ? "" : item.name}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
