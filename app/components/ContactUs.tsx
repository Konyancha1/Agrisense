import React from "react";

const ContactUsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24" id="contact-us">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#16A34A]">
            Ready to transform how you grow, certify, and finance agriculture?
          </h2>
          <p className="text-gray-600 mt-2">
            Let us know what you&apos;re interested in and we&apos;ll get in touch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-full shadow-md rounded-xl overflow-hidden">
          <iframe
            title="Transform how you grow, certify, and finance agriculture"
            src="https://forms.zohopublic.com/kevinonyanchaagrise1/form/Transformhowyougrowcertifyandfinanceagriculture/formperma/PIwjgGUU6qf5c6QPJxsvJU_hY5SUwSY2CcpZLo-I6p0"
            frameBorder="0"
            style={{
              width: "100%",
              height: "600px",
              border: "none",
            }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
