import React from "react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    id: "1",
    title: "Luxury Travel",
    description:
      "Private jet bookings, yacht charters, and exclusive resort accommodations.",
    imageUrl: "/img/moscow-skyline.jpg",
    linkUrl: "/services/travel",
  },
  {
    id: "2",
    title: "Personal Shopping",
    description:
      "VIP shopping experiences with personal stylists at exclusive boutiques.",
    imageUrl: "/img/moscow-interior.jpg",
    linkUrl: "/services/shopping",
  },
  {
    id: "3",
    title: "Wellness Services",
    description:
      "Comprehensive wellness treatments and services for optimal health.",
    imageUrl: "/img/spa-services.jpg",
    linkUrl: "/wellness",
  },
  {
    id: "4",
    title: "Medical Concierge",
    description:
      "Priority access to top medical specialists and facilities worldwide.",
    imageUrl: "/img/concierge-medical.jpg",
    linkUrl: "/medical",
  },
  {
    id: "5",
    title: "Event Management",
    description:
      "Custom event planning and VIP access to exclusive gatherings.",
    imageUrl: "/img/gala.jpg",
    linkUrl: "/events",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Premium Services</h1>
        <p>Exclusive services tailored to exceed your expectations</p>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            linkUrl={service.linkUrl}
          />
        ))}
      </div>
    </div>
  );
}
