"use client";

interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

interface Props {
  service: Service;
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
}

const ServiceCard: React.FC<Props> = ({ service, selectedServices, setSelectedServices }) => {
  const isChecked = selectedServices.includes(service._id);

  const handleCheckboxChange = () => {
    setSelectedServices((prevSelectedServices) => {
      if (isChecked) {
        return prevSelectedServices.filter((id) => id !== service._id);
      } else {
        return [...prevSelectedServices, service._id];
      }
    });
  };

  return (
    <div
      className="flex w-full justify-between cursor-pointer items-center bg-[var(--head-color)] text-slate-900 py-4 px-6 gap-4 rounded"
      onClick={handleCheckboxChange}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold capitalize">{service.name}</h2>
        <p>{service.description}</p>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <section className="flex flex-col gap-2 items-center justify-center">
          <span>₹{service.price}</span>
          <span>{service.duration} min</span>
        </section>
        <input
          type="checkbox"
          name="selection"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id="selection"
          className="w-5 h-5 border-gray-400 rounded-full transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
