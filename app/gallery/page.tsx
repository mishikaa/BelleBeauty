import DisplayImages, {DisplayImagesProps } from '@/components/DisplayImages';

 const Gallery: React.FC = () => {
  const images1 = [];
  for (let i=1;i<=21;i++) {
      images1.push(`/gallery/makeup/img${i}.jpg`);
  }

  const images2 = [];
  for (let i=1;i<=24;i++) {
      images2.push(`/gallery/hair/img${i}.jpg`);
  }

  const displayImagesProps1: DisplayImagesProps = {
    title: "our makeovers",
    images: images1,
  };

  const displayImagesProps2: DisplayImagesProps = {
    title: "hair styling / treatments",
    images: images2,
  };

  return (
    <div className='w-full h-full'>
        <h1 className='text-4xl w-full text-center uppercase font-bold py-8 bg-gray-800'>Our Gallery</h1>
        <DisplayImages {...displayImagesProps1}/>
        <DisplayImages {...displayImagesProps2}/>
    </div>
  )
}

export default Gallery;