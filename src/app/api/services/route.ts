import { NextResponse } from "next/server";

export const services = [
  {
    id: "1",
    title: "Luxury Travel",
    description:
      "Private jet bookings, yacht charters, and exclusive resort accommodations.",
    imageUrl: "/img/moscow-skyline.jpg",
    category: "travel",
    price: "Custom pricing",
  },
  {
    id: "2",
    title: "Personal Shopping",
    description:
      "VIP shopping experiences with personal stylists at exclusive boutiques.",
    imageUrl: "/img/moscow-interior.jpg",
    category: "lifestyle",
    price: "From $500/hour",
  },
  {
    id: "3",
    title: "Spa & Wellness",
    description:
      "Comprehensive wellness treatments and services for optimal health.",
    imageUrl: "/img/spa-services.jpg",
    category: "wellness",
    price: "From $300/session",
  },
  {
    id: "4",
    title: "Medical Concierge",
    description:
      "Priority access to top medical specialists and facilities worldwide.",
    imageUrl: "/img/concierge-medical.jpg",
    category: "medical",
    price: "Custom pricing",
  },
  {
    id: "5",
    title: "Event Management",
    description:
      "Custom event planning and VIP access to exclusive gatherings.",
    imageUrl: "/img/gala.jpg",
    category: "events",
    price: "From $5,000/event",
  },
];

export async function GET(request: Request) {
  // Get query parameters for filtering
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let filteredServices = services;

  // Apply filters if provided
  if (category) {
    filteredServices = services.filter(
      (service) => service.category === category
    );
  }

  return NextResponse.json(filteredServices);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the incoming data (basic example)
    if (!body.title || !body.description || !body.category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real app, you would save to a database here
    // This is just a mock implementation
    const newService = {
      id: (services.length + 1).toString(),
      ...body,
    };

    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
