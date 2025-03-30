import { NextResponse } from "next/server";
import { services } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const service = services.find((s) => s.id === id);

  if (!service) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  return NextResponse.json(service);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();

    // In a real app, you would update a database entry here
    const serviceIndex = services.findIndex((s) => s.id === id);

    if (serviceIndex === -1) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Update service
    const updatedService = {
      ...services[serviceIndex],
      ...body,
      id, // Ensure ID doesn't change
    };

    // In a real app, this would be persisted to a database

    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // In a real app, you would check admin permissions before allowing deletion

  const id = params.id;

  // In a real app, you would delete from a database here
  const serviceIndex = services.findIndex((s) => s.id === id);

  if (serviceIndex === -1) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  // In a real app, this would be persisted to a database

  return NextResponse.json({ success: true });
}
