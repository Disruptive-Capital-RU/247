import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export function ServiceList() {
  const services = useQuery(api.services.getAllServices);
  const createService = useMutation(api.services.createService);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    duration: "",
    imageUrl: "",
    isAvailable: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createService(newService);
    setNewService({
      name: "",
      description: "",
      category: "",
      price: 0,
      duration: "",
      imageUrl: "",
      isAvailable: true,
    });
  };

  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services.map((service) => (
          <div key={service._id} className="border rounded-lg p-4 shadow-sm">
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${service.price}</span>
              <span className="text-sm text-gray-500">{service.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Service Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-4">Add New Service</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Service Name"
            value={newService.name}
            onChange={(e) =>
              setNewService({ ...newService, name: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={newService.description}
            onChange={(e) =>
              setNewService({ ...newService, description: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={newService.category}
            onChange={(e) =>
              setNewService({ ...newService, category: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newService.price}
            onChange={(e) =>
              setNewService({ ...newService, price: Number(e.target.value) })
            }
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Duration"
            value={newService.duration}
            onChange={(e) =>
              setNewService({ ...newService, duration: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newService.imageUrl}
            onChange={(e) =>
              setNewService({ ...newService, imageUrl: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
}
