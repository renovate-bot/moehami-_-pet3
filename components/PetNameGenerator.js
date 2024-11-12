import { useState } from "react";
import { Button } from "./pages/ui/button";
import { Input } from "./pages/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "./pages/ui/card";
import { Alert, AlertDescription } from "./pages/ui/alert";
import { Loader2 } from "lucide-react";

const PetNameGenerator = () => {
  const [animalType, setAnimalType] = useState("");
  const [gender, setGender] = useState("");
  const [generatedNames, setGeneratedNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateNames = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setGeneratedNames([]);

    try {
      const response = await fetch("/api/generate-names", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          animalType,
          gender,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate names");
      }

      const data = await response.json();
      setGeneratedNames(data.names);
    } catch (err) {
      setError("Failed to generate names. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
                className="bg-transparent"
                required
              />
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant={gender === "male" ? "default" : "outline"}
                onClick={() => setGender("male")}
                className="flex-1"
              >
                Male
              </Button>
              <Button
                type="button"
                variant={gender === "female" ? "default" : "outline"}
                onClick={() => setGender("female")}
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
                "Generate Names"
              )}
            </Button>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

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
    </div>
  );
};

export default PetNameGenerator;
