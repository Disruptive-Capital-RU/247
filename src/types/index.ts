// Service types
export type Service = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price?: string;
};

// Appointment types
export type AppointmentStatus = "pending" | "confirmed" | "cancelled";

export type Appointment = {
  id: string;
  userId: string;
  serviceId: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
};

export type NewAppointment = Omit<Appointment, "id" | "status"> & {
  status?: AppointmentStatus;
};

// User types
export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "user" | "admin";
  createdAt: string;
};
