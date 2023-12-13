import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: 'Hair Styling',
      description: 'Transform your look with our expert hair styling services. Whether it\'s a trendy cut, color, or special occasion styling, we\'ve got you covered.',
      imageUrl: 'https://source.unsplash.com/800x600/?hair,styling',
    },
    {
      title: 'Skin Care',
      description: 'Indulge in our rejuvenating skin care treatments. Experience the luxury of facials, peels, and other services tailored to enhance your skin\'s natural beauty.',
      imageUrl: 'https://source.unsplash.com/800x600/?skin,care',
    },
    {
      title: 'Nail Art',
      description: 'Express your style with our creative nail art designs. From classic manicures to trendy nail art, our skilled technicians will make your nails stand out.',
      imageUrl: 'https://source.unsplash.com/800x600/?nail,art',
    },
    {
      title: 'Massage Therapy',
      description: 'Relax and unwind with our massage therapy services. Our skilled therapists will help you release tension and achieve a state of total relaxation.',
      imageUrl: 'https://source.unsplash.com/800x600/?massage,therapy',
    },
    {
      title: 'Makeup Application',
      description: 'Enhance your natural beauty with our professional makeup application services. Perfect for special occasions or a glamorous night out.',
      imageUrl: 'https://source.unsplash.com/800x600/?makeup,application',
    },
    {
      title: 'Waxing Services',
      description: 'Achieve smooth and hair-free skin with our waxing services. Our experienced technicians provide effective and comfortable hair removal solutions.',
      imageUrl: 'https://source.unsplash.com/800x600/?waxing,services',
    },
    {
      title: 'Manicures & Pedicures',
      description: 'Pamper your hands and feet with our luxurious manicure and pedicure services. Choose from a variety of styles and treatments to suit your preferences.',
      imageUrl: 'https://source.unsplash.com/800x600/?manicure,pedicure',
    },
    {
      title: 'Eyelash Extensions',
      description: 'Accentuate your eyes with our eyelash extension services. Our skilled technicians will enhance your lashes for a natural or glamorous look.',
      imageUrl: 'https://source.unsplash.com/800x600/?eyelash,extensions',
    },
    {
      title: 'Bridal Packages',
      description: 'Make your special day even more memorable with our bridal packages. From pre-wedding treatments to bridal makeup, we have everything to make you feel beautiful.',
      imageUrl: 'https://source.unsplash.com/800x600/?bridal,packages',
    },
    // Add more services as needed
  ];

  return (
    <div className="h-min-content bg-gray-900 text-white">
      <h1 className='text-4xl text-center uppercase font-bold py-8 bg-gray-800'>Our Services</h1>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="mb-4 rounded-md h-40 w-full object-cover" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Services;
