// Appointment management utilities
import { fetchApi } from "@/lib/api";
import { Appointment, NewAppointment } from "@/types";

/**
 * Book a new appointment
 */
export async function bookAppointment(appointmentData: NewAppointment) {
  return fetchApi<Appointment>("/appointments", {
    method: "POST",
    body: JSON.stringify(appointmentData),
  });
}

/**
 * Get all appointments for a user
 */
export async function getUserAppointments(userId: string) {
  return fetchApi<Appointment[]>(`/appointments?userId=${userId}`);
}

/**
 * Cancel an appointment
 */
export async function cancelAppointment(appointmentId: string) {
  return fetchApi<{ success: boolean }>(
    `/appointments/${appointmentId}/cancel`,
    {
      method: "PUT",
    }
  );
}

/**
 * Format date for display
 */
export function formatAppointmentDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
