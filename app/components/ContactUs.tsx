import React, { useEffect } from "react";

const ContactUsSection: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-24" id="contact-us">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3x2 font-semibold text-[#16A34A]">
          Ready to transform how you grow, certify, and finance agriculture?
          </h2>
          <p className="text-2x1 md:text-3x3 font-semibold text-[Black]">
          Request Demo
          </p>
        </div>
        <div className="flex justify-center p-3">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/agrisense-coffee/30min"
            style={{
              minWidth: "320px",
              height: "700px",
              maxWidth: "100%",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;