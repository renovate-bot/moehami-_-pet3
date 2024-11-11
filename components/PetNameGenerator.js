import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const PetNameGenerator: React.FC = () => {
  const [petType, setPetType] = useState('');
  const [petName, setPetName] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePetName = async () => {
    setLoading(true);
    const configuration = new Configuration({
      apiKey: process.env.openai, // Make sure to set this in your .env.local file
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Generate a unique name for a ${petType}.`,
        max_tokens: 10,
      });
      const name = response.data.choices[0].text.trim();
      setPetName(name);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pet Name Generator</h1>
      <input
        type="text"
        placeholder="Enter pet type (e.g., dog, cat)"
        value={petType}
        onChange={(e) => setPetType(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={generatePetName}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Pet Name'}
      </button>
      {petName && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Generated Pet Name:</h2>
          <p className="text-lg">{petName}</p>
        </div>
      )}
    </div>
  );
};

export default PetNameGeneratore;
