export type User = {
    id: number;
    email: string;
    password: string;
    name: string;
    cellphone: string;
    userType: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Property = {
    id: number;
    title: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    squareMeters: number;
    floors: number;
    type: "house" | "apartment" | "land";
    description: string;
    pool: boolean;
    garage: number;
    recreationArea: boolean;
    barbecue: boolean;
    airConditioning: boolean;
    furnished: boolean;
    images: string[];
    createdAt: Date;
}

export type AuthResponse = {
    token: string;
    user: User;
};
