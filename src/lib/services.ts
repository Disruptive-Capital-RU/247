import { fetchApi } from "./api";
import { Service } from "@/types";

/**
 * Get all services
 */
export async function getAllServices() {
  return fetchApi<Service[]>("/services");
}

/**
 * Get services by category
 */
export async function getServicesByCategory(category: string) {
  return fetchApi<Service[]>(`/services?category=${category}`);
}

/**
 * Get service by ID
 */
export async function getServiceById(id: string) {
  return fetchApi<Service>(`/services/${id}`);
}

/**
 * Create a new service (admin only)
 */
export async function createService(serviceData: Omit<Service, "id">) {
  return fetchApi<Service>("/services", {
    method: "POST",
    body: JSON.stringify(serviceData),
  });
}
