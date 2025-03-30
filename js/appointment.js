// Appointment booking functionality
const API_URL = "http://localhost:3000/api";

document.addEventListener("DOMContentLoaded", function () {
  const appointmentForm = document.getElementById("appointment-form");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", handleAppointmentSubmit);
  }
});

async function handleAppointmentSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const appointmentData = {
    clientName: formData.get("name"),
    clientEmail: formData.get("email"),
    clientPhone: formData.get("phone"),
    serviceType: formData.get("service-type"),
    date: formData.get("appointment-date"),
    notes: formData.get("notes"),
  };

  try {
    const response = await fetch(`${API_URL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    const result = await response.json();

    if (response.ok) {
      // Success
      showMessage("Appointment booked successfully!", "success");
      form.reset();
    } else {
      // Error
      showMessage(`Error: ${result.message}`, "error");
    }
  } catch (error) {
    showMessage("Server error. Please try again later.", "error");
    console.error("Error booking appointment:", error);
  }
}

function showMessage(message, type) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.className = `message ${type}`;

  const form = document.getElementById("appointment-form");
  form.parentNode.insertBefore(messageElement, form);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}
