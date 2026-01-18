import { useState, useEffect } from "react";
import { propertyService } from "../services/api";
import type { Property } from "../types";

export default function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    setLoading(true);
    try {
      const response = await propertyService.getAll();
      setProperties(response.data);
    } catch (error) {
      console.error("Erro ao carregar imóveis:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Imóveis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-2">{property.address}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              R$ {property.price.toLocaleString("pt-BR")}
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>🛏️ {property.bedrooms} quartos</span>
              <span>🚿 {property.bathrooms} banheiros</span>
              <span>📐 {property.squareMeters}m²</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
