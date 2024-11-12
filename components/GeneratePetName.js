// components/GeneratePetName.js

import { useState } from "react";

export default function GeneratePetName() {
  const [petName, setPetName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneratePetName = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generatePetName", {
        method: "POST",
      });
      const data = await response.json();
      setPetName(data.petName);
    } catch (error) {
      console.error("Error generating pet name:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleGeneratePetName}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Pet Name"}
      </button>
      {petName && (
        <p className="mt-4 text-lg font-semibold">
          Your new pet name: {petName}
        </p>
      )}
    </div>
  );
}
