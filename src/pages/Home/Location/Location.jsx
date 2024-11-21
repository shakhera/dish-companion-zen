import React from "react";

const Location = () => {
  return (
    <section className="container mx-auto px-2 py-4">
      <address className="text-gray-600 text-center mb-4 px-3">
        Mawlana Bhashani Science and Technology University, Santosh,
        Tangail-1902
      </address>
      <div
        className="relative overflow-hidden max-h-[300px] sm:max-h-[400px] md:max-h-[400px]"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.1732697065954!2d89.88800857420676!3d24.23571786997397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfc7edb573571%3A0xda791ddc1ce793bd!2sMawlana%20Bhashani%20Science%20and%20Technology%20University!5e0!3m2!1sen!2sbd!4v1717958953172!5m2!1sen!2sbd"
          title="Google Maps"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
