import BookmarkButton from "@/components/BookmarkButton";
import PropertyContactForm from "@/components/PropertyContactForm";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import ShareButtons from "@/components/ShareButtons";
import connectDB from "@/config/database"
import Property from "@/models/Property";
// import { IProperty } from "@/types";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  params: Promise<{ id: string }>
}

const PropertyPage = async ({ params }: Props) => {
  const { id } = await params
  await connectDB();
  const propertyDoc = await Property.findById(id).lean();
  const property = convertToSerializeableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      <PropertyHeaderImage
        image={property?.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <a
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </a>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            {property&&<PropertyDetails property={property} />}
            <aside className='space-y-4 mr-2'>
              <BookmarkButton property={property} />
              <ShareButtons property={property} />
              <PropertyContactForm property={property} />
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property?.images}/>
    </>

  )
}

export default PropertyPage