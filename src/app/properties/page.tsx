import PropertyCard from "@/components/PropertyCard";
// import { dummyProperties as properties } from '@/assets/dummyData/dummyProperties'
import { IProperty } from "@/types";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Pagination from "@/components/Pagination";

interface Props{
  searchParams: Promise<{ page?: string, pageSize?: string}>
}
const PropertiesPage = async ({ searchParams }:Props) => {

  await connectDB();
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const pageSize = parseInt(params.pageSize || "2", 10);
  const skip = (page - 1) * pageSize;
  const total = await Property.countDocuments({});
  const properties: IProperty[] = await Property.find({}).skip(skip).limit(pageSize);

  const showPagination = total > pageSize;

  return (
    <section className="px-4 py-6">
      <div className="conatainer-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (<p>No Properties Found</p>) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              properties.map((property: IProperty) => {
                return <PropertyCard key={property._id} property={property} />
              })
            }
          </div>
        )}
        {showPagination && (
          <Pagination
            page={page}
            pageSize={pageSize}
            totalItems={total}
          />
        )}
      </div>
    </section>
  )
}

export default PropertiesPage