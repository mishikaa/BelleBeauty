import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      <h1 className='text-4xl text-center uppercase font-bold py-8 bg-gray-800'>About BelleBeauty</h1>

      <div className="container mx-auto p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            At BelleBeauty, we are on a mission to redefine beauty standards. Our goal is to provide
            exceptional beauty services that enhance your natural beauty and boost your confidence. We
            are committed to delivering a delightful experience and creating a positive impact on our
            clients' lives.
          </p>
          <img
            src="https://source.unsplash.com/800x400/?beauty,salon"
            alt="Our Mission"
            className="mt-8 rounded-lg shadow-lg w-full"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-400">
            Get to know the passionate and skilled professionals behind BelleBeauty. Our team is
            dedicated to delivering top-notch beauty services tailored to your unique needs. We
            prioritize creativity, innovation, and customer satisfaction in everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <img
              src="https://source.unsplash.com/400x400/?team,beauty,salon"
              alt="Team Member 1"
              className="rounded-lg"
            />
            {/* Add similar img tags for other team members */}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Salon</h2>
          <p className="text-gray-400">
            Step into our modern and welcoming salon. We create a comfortable environment where you can
            relax and enjoy your beauty transformation. Our salon is equipped with state-of-the-art
            facilities to ensure you have a memorable experience.
          </p>
          <img
            src="https://source.unsplash.com/800x400/?salon,interior"
            alt="Salon Interior"
            className="mt-8 rounded-lg shadow-lg w-full"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400">
            Have questions or want to schedule an appointment? Reach out to us! We'd love to hear from
            you.
          </p>
          <img
            src="https://source.unsplash.com/800x400/?contact,beauty,salon"
            alt="Contact Us"
            className="mt-8 rounded-lg shadow-lg w-full"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
