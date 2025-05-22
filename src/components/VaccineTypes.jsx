"use client"

import { useState } from "react"
import VaccineCard from "./VaccineCard"

const VaccineTypes = () => {
  const [activeTab, setActiveTab] = useState("ibu")

  const vaccines = [
    { id: 1, name: "Vaksin RSV", icon: "shield" },
    { id: 2, name: "Vaksin Hepatitis B", icon: "shield" },
    { id: 3, name: "Vaksin COVID-19", icon: "shield" },
    { id: 4, name: "Vaksin DPT", icon: "shield" },
    { id: 5, name: "Vaksin MMR", icon: "shield" },
    { id: 6, name: "Vaksin Influenza", icon: "shield" },
  ]

  return (
    <div className="bg-[#2b4162] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Jenis Imunisasi</h2>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-200 rounded-md inline-flex p-1">
            <button
              className={`px-6 py-2 rounded-md ${activeTab === "ibu" ? "bg-white text-[#2b4162]" : "text-gray-700"}`}
              onClick={() => setActiveTab("ibu")}
            >
              Ibu Hamil
            </button>
            <button
              className={`px-6 py-2 rounded-md ${activeTab === "anak" ? "bg-white text-[#2b4162]" : "text-gray-700"}`}
              onClick={() => setActiveTab("anak")}
            >
              Anak
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vaccines.map((vaccine) => (
            <VaccineCard key={vaccine.id} name={vaccine.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VaccineTypes
