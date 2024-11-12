import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const PetNameGenerator = () => {
  const [animalType, setAnimalType] = useState('');
  const [gender, setGender] = useState('');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateNames = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const mockNames = [
        `${gender === 'female' ? 'Luna' : 'Max'} the ${animalType}`,
        `${gender === 'female' ? 'Bella' : 'Charlie'} the ${animalType}`,
        `${gender === 'female' ? 'Daisy' : 'Rocky'} the ${animalType}`,
      ];
      setGeneratedNames(mockNames);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">AI Pet Name Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={generateNames} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Enter type of pet (e.g., cat, dog)"
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
              className="bg-transparent border-gray-300"
              required
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              type="button"
              variant={gender === 'male' ? 'default' : 'outline'}
              onClick={() => setGender('male')}
              className="flex-1"
            >
              Male
            </Button>
            <Button
              type="button"
              variant={gender === 'female' ? 'default' : 'outline'}
              onClick={() => setGender('female')}
              className="flex-1"
            >
              Female
            </Button>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={!animalType || !gender || loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Names'
            )}
          </Button>

          {generatedNames.length > 0 && (
            <div className="mt-6 space-y-2">
              <h3 className="font-medium">Generated Names:</h3>
              <ul className="space-y-1">
                {generatedNames.map((name, index) => (
                  <li 
                    key={index}
                    className="p-2 rounded bg-gray-100 dark:bg-gray-800"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default PetNameGenerator;
