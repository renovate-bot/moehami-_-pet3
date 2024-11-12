import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const PetNameGenerator: React.FC = () => {
  const [petType, setPetType] = useState<string>('');
  const [petName, setPetName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const generatePetName = async () => {
    if (!process.env.openai) {
      console.error('OpenAI API key is missing');
      return;
    }

    setLoading(true);
    const configuration = new Configuration({
      apiKey: process.env.openai,
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
      console.error('Error generating pet name:', error);
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

export default PetNameGenerator;
