import { NextResponse } from "next/server";

// This is just for mocking, in a real app you'd import from a shared data source
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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const appointmentIndex = appointments.findIndex((a) => a.id === id);

  if (appointmentIndex === -1) {
    return NextResponse.json(
      { error: "Appointment not found" },
      { status: 404 }
    );
  }

  // Update appointment status to cancelled
  appointments[appointmentIndex] = {
    ...appointments[appointmentIndex],
    status: "cancelled",
  };

  return NextResponse.json({
    success: true,
    appointment: appointments[appointmentIndex],
  });
}
