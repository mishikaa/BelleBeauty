// Searchbar.tsx
"use client";

import '@styles/Searchbar.css';
import { useEffect, useState } from 'react';
import ServiceCard from '@components/ServiceCard';
import { SearchResult } from '@components/SearchResult';

interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

interface Props {
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
}

const ServiceCardList: React.FC<Props & { data: Service[] }> = ({ data, selectedServices, setSelectedServices }) => {
  return (
    <div className='flex flex-col px-12 gap-4 justify-center items-center'>
      {data.map((service) => (
        <ServiceCard
          key={service._id}
          service={service}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
      ))}
    </div>
  );
};

const Searchbar: React.FC<Props> = ({ selectedServices, setSelectedServices }) => {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  const getResult = async () => {
    try {
      setIsLoading(true);
      const response = await SearchResult(keyword);
      setServices(response);
    } catch (error) {
      console.log("Failed to fetch services", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Gets triggered whenever keyword is changed
  useEffect(() => {
    getResult();
  }, [keyword]);

  return (
    <div className="w-full">
      <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form role="form" className="relative flex z-50 bg-white rounded-full">
            <input
              type="text"
              placeholder="Search for a service"
              className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
              onChange={(event) => setKeyword(event.target.value)}
              value={keyword}
              required
            />
          </form>
          <div className="glow glow-1 z-10 bg-[#B99470] absolute"></div>
          <div className="glow glow-2 z-20 bg-[#FEFAE0] absolute"></div>
          <div className="glow glow-3 z-30 bg-[#A9B388] absolute"></div>
          <div className="glow glow-4 z-40 bg-[#5F6F52] absolute"></div>
        </div>
      </div>

      {/* if the keyword is an empty string then no service cards will be displayed */}
      {services.length === 0 ? (
        <div className='uppercase flex justify-center mb-4 text-xl text-white'>no results found</div>
      ) : (
        keyword === '' ? (
          <></>
        ) : (
          <ServiceCardList
            data={services}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
          />
        )
      )}
    </div>
  );
};

export default Searchbar;
