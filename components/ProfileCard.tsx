import React from 'react';

interface ProfileCardProps {
  user: {
    id: string;
    image: string;
    name: string;
    email: string;
  };
  count: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, count }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl w-full text-center uppercase font-bold py-8 bg-gray-800">Profile</h1>

      <div className="w-full h-4/5 rounded-xl flex flex-col items-center space-y-4 animate-show">
        <div className="flex flex-col mt-4 items-center space-y-4 relative">
          <div className="relative">
            <svg
              className="w-44 h-44 text-green-500 absolute -right-6 -top-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <defs>
                <linearGradient id="AvatarGradient">
                  <stop offset="5%" stopColor="#AEDD9A" />
                  <stop offset="95%" stopColor="#44B973" />
                </linearGradient>
              </defs>
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30367 19 6.34267"
                stroke="url(#AvatarGradient)"
                strokeWidth="0.5"
                strokeLinecap="round"
              ></path>
            </svg>
            <img className="w-32 h-32 rounded-full z-10" src={user?.image} alt="Profile image" />
          </div>
          <p className="text-xl font-bold">{user?.name}</p>
          <p className="text-lg font-light">{user?.email}</p>
          <div className="flex items-center space-x-4">
            <p className="flex flex-col items-center cursor-pointer">
              <span className="text-lg font-bold text-green-500">{count}</span>
              <span className="text-sm font-light">Number of appointments made</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
