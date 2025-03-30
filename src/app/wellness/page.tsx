import React from "react";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";

const wellnessServices = [
  {
    id: "101",
    title: "Luxury Spa",
    description:
      "Enjoy premium spa services with the best therapists in Moscow.",
    imageUrl: "/img/spa-services.jpg",
    linkUrl: "/wellness/spa",
    price: "From $200",
  },
  {
    id: "102",
    title: "Beauty Treatments",
    description:
      "High-end beauty treatments and therapies for discerning clients.",
    imageUrl: "/img/beauty-services.jpg",
    linkUrl: "/wellness/beauty",
    price: "From $150",
  },
  {
    id: "103",
    title: "Wellness Concierge",
    description:
      "Personal wellness planning and coordination for optimal health.",
    imageUrl: "/img/beauty-concierge.jpg",
    linkUrl: "/wellness/concierge",
    price: "Custom pricing",
  },
];

export default function WellnessPage() {
  return (
    <div className="wellness-page">
      <div className="wellness-hero">
        <h1>Wellness Services</h1>
        <p>
          Premium wellness services and treatments for our exclusive clientele
        </p>
      </div>

      <div className="services-container">
        {wellnessServices.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            linkUrl={service.linkUrl}
            price={service.price}
          />
        ))}
      </div>

      <div className="appointment-section">
        <h2>Book a Wellness Service</h2>
        <AppointmentForm
          serviceTypes={wellnessServices.map((service) => ({
            id: service.id,
            name: service.title,
          }))}
        />
      </div>
    </div>
  );
}
