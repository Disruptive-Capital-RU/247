"use client";

import React, { useState } from "react"; import { bookAppointment, NewAppointment } from "@/utils/appointment"; type AppointmentFormProps = { serviceTypes: { id: string; name: string }[]; onSuccess?: () => void; }; export default function AppointmentForm({ serviceTypes, onSuccess, }: AppointmentFormProps) { const [isSubmitting, setIsSubmitting] = useState(false); const [message, setMessage] = useState<{ text: string; type: "success" | "error"; } | null>(null); async function handleSubmit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setIsSubmitting(true); const formData = new FormData(e.currentTarget); const appointmentData: Partial<NewAppointment> = { serviceId: formData.get("service-type") as string, date: formData.get("appointment-date") as string, time: formData.get("appointment-time") as string, notes: formData.get("notes") as string, // Include user ID from authentication userId: "current-user-id", // This should come from your auth context }; try { const result = await bookAppointment(appointmentData as NewAppointment); if (result.error) { setMessage({ text: result.error, type: "error" }); } else { setMessage({ text: "Appointment booked successfully!", type: "success", }); e.currentTarget.reset(); if (onSuccess) onSuccess(); } } catch (error) { setMessage({ text: "Failed to book appointment. Please try again later.", type: "error", }); } finally { setIsSubmitting(false); } } return ( <div className="appointment-form-container"> {message && ( <div className={`message ${message.type}`}>{message.text}</div> )} <form onSubmit={handleSubmit} className="appointment-form"> <div className="form-group"> <label htmlFor="service-type">Service Type</label> <select id="service-type" name="service-type" required> <option value="">Select a service</option> {serviceTypes.map((service) => ( <option key={service.id} value={service.id}> {service.name} </option> ))} </select> </div> <div className="form-group"> <label htmlFor="appointment-date">Date</label> <input type="date" id="appointment-date" name="appointment-date" min={new Date().toISOString().split("T")[0]} required /> </div> <div className="form-group"> <label htmlFor="appointment-time">Time</label> <input type="time" id="appointment-time" name="appointment-time" required /> </div> <div className="form-group"> <label htmlFor="notes">Special Requests</label> <textarea id="notes" name="notes" rows={4} placeholder="Any special requests or requirements" ></textarea> </div> <button type="submit" className="submit-button" disabled={isSubmitting}> {isSubmitting ? "Booking..." : "Book Appointment"} </button> </form> </div> ); }
