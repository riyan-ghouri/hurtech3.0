import Image from "next/image";

const integrations = [
  { name: "Adobe", src: "/adobe.svg" },
  { name: "Google Cloud", src: "/google-cloud.svg" },
  { name: "Google Partner", src: "/google.svg" },
  { name: "PayPal", src: "/paypal.svg" },
  { name: "Odoo", src: "/odoo.png" },
  
];

export default function TrustedByHealthcare() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
            Why healthcare leaders choose us
          </h2>

          <p className="text-[16px] leading-relaxed text-gray-600">
            Healthcare organizations partner with us to streamline operations,
            improve patient outcomes, and deliver innovative services. We
            combine technical expertise with deep industry insight to create
            scalable solutions that drive results.
          </p>
        </div>

        {/* Logos */}
       <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
                 {integrations.map((item, index) => (
                   <div
                     key={index}
                     className="flex items-center justify-center cursor-pointer rounded-2xl gap-4 border border-gray-200 bg-white p-8
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
