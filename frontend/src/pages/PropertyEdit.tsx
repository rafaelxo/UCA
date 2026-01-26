import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { propertyService } from "../services/api";
import type { PropertyCreate } from "../types";

export default function PropertyEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const [formData, setFormData] = useState<PropertyCreate>({
    title: "",
    address: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    squareMeters: 0,
    floors: 1,
    type: "house",
    description: "",
    pool: false,
    garage: 0,
    recreationArea: false,
    barbecue: false,
    airConditioning: false,
    furnished: false,
    images: [],
  });

  useEffect(() => {
    loadProperty();
  }, [id]);

  const loadProperty = async () => {
    if (!id) return;
    setLoadingData(true);
    try {
      const response = await propertyService.getById(Number(id));
      const property = response.data;
      setFormData({
        title: property.title,
        address: property.address,
        price: property.price,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        squareMeters: property.squareMeters,
        floors: property.floors,
        type: property.type,
        description: property.description,
        pool: property.pool,
        garage: property.garage,
        recreationArea: property.recreationArea,
        barbecue: property.barbecue,
        airConditioning: property.airConditioning,
        furnished: property.furnished,
        images: property.images,
      });
    } catch (error) {
      console.error("Erro ao carregar imóvel:", error);
      alert("Imóvel não encontrado!");
      navigate("/properties");
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
            ? Number(value)
            : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    setLoading(true);
    try {
      await propertyService.update(Number(id), formData);
      alert("Imóvel atualizado com sucesso!");
      navigate(`/properties/${id}`);
    } catch (error) {
      console.error("Erro ao atualizar imóvel:", error);
      alert("Erro ao atualizar imóvel!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {loadingData ? (
        <div>Carregando...</div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">Editar Imóvel</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Título</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Endereço</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Preço (R$)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Tipo</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="house">Casa</option>
                  <option value="apartment">Apartamento</option>
                  <option value="land">Terreno</option>
                  <option value="commercial">Comercial</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Quartos
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Banheiros
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Garagem
                </label>
                <input
                  type="number"
                  name="garage"
                  value={formData.garage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Área (m²)
                </label>
                <input
                  type="number"
                  name="squareMeters"
                  value={formData.squareMeters}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Andares
                </label>
                <input
                  type="number"
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Descrição
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Comodidades</label>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="pool"
                  checked={formData.pool}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Piscina</span>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="recreationArea"
                  checked={formData.recreationArea}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Área de Lazer</span>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="barbecue"
                  checked={formData.barbecue}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Churrasqueira</span>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="airConditioning"
                  checked={formData.airConditioning}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Ar Condicionado</span>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="furnished"
                  checked={formData.furnished}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Mobiliado</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? "Salvando..." : "Salvar Alterações"}
              </button>

              <button
                type="button"
                onClick={() => navigate(`/properties/${id}`)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
