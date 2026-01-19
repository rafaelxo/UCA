import type { Property } from "../../types";
import { useNavigate } from "react-router-dom";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/properties/${property.id}`)}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <h2 className="text-xl font-bold mb-2">{property.title}</h2>
      <p className="text-gray-600 mb-2">{property.address}</p>
      <p className="text-2xl font-bold text-blue-600 mb-4">
        R$ {property.price.toLocaleString("pt-BR")}
      </p>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
        <span>🛏️ {property.bedrooms} quartos</span>
        <span>🚿 {property.bathrooms} banheiros</span>
        <span>📐 {property.squareMeters}m²</span>
        <span>🏢 {property.floors} andares</span>
      </div>

      <div className="flex gap-2 flex-wrap">
        {property.pool && (
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            🏊 Piscina
          </span>
        )}
        {property.garage > 0 && (
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
            🚗 {property.garage} vagas
          </span>
        )}
        {property.furnished && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            🛋️ Mobiliado
          </span>
        )}
      </div>
    </div>
  );
}
