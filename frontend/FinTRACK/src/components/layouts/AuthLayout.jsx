import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

// Main Layout
const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* LEFT SIDE - Auth Form */}
      <div className="w-full md:w-[60%] px-12 pt-8 pb-12 flex flex-col">
        <h2 className="text-lg font-medium text-black mb-6">FinTRACK</h2>
        {children}
      </div>

      {/* RIGHT SIDE - Visual Section */}
      <div className="hidden md:block w-[40%] h-full relative bg-violet-50 p-8 overflow-hidden">
        {/* Background Shapes */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5 z-0" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10 z-0" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5 z-0" />

        {/* Stats Info Card */}
        <div className="relative z-10 mt-4">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>

        {/* Chart Image - Centered Bottom */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
  <img
    src={CARD_2}
    alt="Card Chart"
    className="w-[500px] max-w-[100%] shadow-xl object-cover rounded-xl"
  />
</div>

      </div>
    </div>
  );
};

export default AuthLayout;

// Reusable Card Component
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-md border border-gray-200 z-10 items-center">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px] font-semibold">${value}</span>
      </div>
    </div>
  );
};
