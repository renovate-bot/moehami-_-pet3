import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { animalType, gender } = req.body;

    const prompt = `Generate 5 creative and unique ${gender} pet names for a ${animalType}. 
      The names should be fun, memorable, and suitable for a ${gender} ${animalType}. 
      Return only the names separated by commas, nothing else.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a creative pet name generator. Generate only the names, separated by commas.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 150,
    });

    const namesString = completion.choices[0].message.content;
    const names = namesString.split(",").map((name) => name.trim());

    res.status(200).json({ names });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "Failed to generate names" });
  }
}
