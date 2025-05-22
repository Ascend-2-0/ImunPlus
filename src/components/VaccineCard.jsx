import React from 'react';
import image6 from '../assets/image6.png';

const VaccineCard = ({ name }) => {
  return (
    <div className="bg-[#ffe5e5] rounded-lg p-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-4">
            <img src={image6} alt="Vaccine" className="w-16 h-16 rounded-full" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#2b4162]">{name}</h3>
          <button className="text-[#2b4162] font-medium mt-1">Detail</button>
        </div>
      </div>
      <div className="bg-[#a0c4e4] text-[#2b4162] px-4 py-1 rounded-md font-bold">GRATIS</div>
    </div>
  )
}

export default VaccineCard
