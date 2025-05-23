import Image from 'next/image';

interface Props {
    image: string | undefined
}

const PropertyHeaderImage = ({ image }: Props) => {
    return (
        <section>
            <div className='container-xl m-auto'>
                <div className='grid grid-cols-1'>
                    <Image
                        src={image ? image : ""}
                        alt=''
                        className='object-cover h-[400px] w-full'
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                    />
                </div>
            </div>
        </section>
    );
};
export default PropertyHeaderImage;
