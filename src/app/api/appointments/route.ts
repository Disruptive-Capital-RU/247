import { NextResponse } from "next/server";

// Mock database for appointments
let appointments = [
  {
    id: "1",
    userId: "user1",
    serviceId: "3",
    date: "2023-05-15",
    time: "10:00",
    status: "confirmed",
    notes: "First time client",
  },
  {
    id: "2",
    userId: "user2",
    serviceId: "4",
    date: "2023-05-16",
    time: "14:30",
    status: "confirmed",
    notes: "",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (userId) {
    const userAppointments = appointments.filter(
      (appointment) => appointment.userId === userId
    );
    return NextResponse.json(userAppointments);
  }

  // In a real app, you would check for admin permissions here
  return NextResponse.json(appointments);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.userId || !body.serviceId || !body.date || !body.time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new appointment
    const newAppointment = {
      id: (appointments.length + 1).toString(),
      status: "pending",
      notes: body.notes || "",
      ...body,
    };

    // In a real app, you would save to a database here
    appointments.push(newAppointment);

    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
