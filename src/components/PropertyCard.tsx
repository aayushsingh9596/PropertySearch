import { IProperty } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarker } from 'react-icons/fa';

interface Props {
    property: IProperty;
}

const PropertyCard = ({ property }: Props) => {
    const getRateDisplay = () => {
        const { rates } = property;
        if (rates?.monthly) {
            return `$${rates.monthly.toLocaleString()}/mo`;
        } else if (rates?.weekly) {
            return `$${rates.weekly.toLocaleString()}/wk`;
        } else if (rates?.nightly) {
            return `$${rates.nightly.toLocaleString()}/night`;
        }
        return "N/A";
    };

    return (
        <div className="w-full max-w-[450px] h-[450px] rounded-xl shadow-md bg-white flex flex-col">
            {/* Image Section */}
            <div className="h-[200px] relative">
                <Image
                    src={property.images[0]}
                    width={350}
                    height={200}
                    alt={property.name}
                    className="w-full h-full object-cover rounded-t-xl"
                />
                <h3 className="absolute top-2 right-2 bg-white px-3 py-1 rounded-lg text-blue-500 font-bold text-sm">
                    {getRateDisplay()}
                </h3>
            </div>

            {/* Details Section */}
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <div className="text-gray-600 text-sm">{property.type}</div>
                    <h3 className="text-lg font-bold truncate">{property.name}</h3>

                    {/* Icons & Stats */}
                    <div className="flex justify-between text-gray-500 text-sm mt-2">
                        <p className="flex items-center gap-1">
                            <FaBed /> {property.beds} <span className="hidden lg:inline">Beds</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <FaBath /> {property.baths} <span className="hidden lg:inline">Baths</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <FaRulerCombined /> {property.squareFeet} <span className="hidden lg:inline">sqft</span>
                        </p>
                    </div>

                    {/* Pricing Options */}
                    <div className="flex justify-between text-green-900 text-xs mt-3">
                        {property.rates?.weekly && <p className="flex items-center gap-1"><FaMoneyBill /> Weekly</p>}
                        {property.rates?.monthly && <p className="flex items-center gap-1"><FaMoneyBill /> Monthly</p>}
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-4 border-t pt-3 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-orange-700 text-xs">
                        <FaMapMarker />
                        <span>{property.location?.city}, {property.location?.state}</span>
                    </div>
                    <Link
                        href={`/properties/${property._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
