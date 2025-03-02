export interface IProperty {
    _id: string; // Using string instead of ObjectId for frontend
    owner: string; // Owner ID as a string
    name: string;
    type: string;
    description?: string;
    location?: {
      street?: string;
      city?: string;
      state?: string;
      zipcode?: string;
    };
    beds: number;
    baths: number;
    squareFeet: number;
    amenities?: string[];
    rates?: {
      nightly?: number;
      weekly?: number;
      monthly?: number;
    };
    sellerInfo?: {
      name?: string;
      email?: string;
      phone?: string;
    };
    images: string[];
    isFeatured?: boolean;
    createdAt?: string; // Dates as strings for frontend (ISO format)
    updatedAt?: string;
  }
  