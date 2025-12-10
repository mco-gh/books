import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AnalysisResult } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    books: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "Estimated title text visible on the spine, or 'Unknown Book' if not legible.",
          },
          colorDescription: {
            type: Type.STRING,
            description: "A short description of the spine color and pattern (e.g., 'Blue with gold text').",
          },
          polygon: {
            type: Type.ARRAY,
            description: "An array of 4 coordinates (x, y) representing the corners of the spine polygon. Coordinates must be normalized to a 0-1000 scale (0,0 top-left, 1000,1000 bottom-right). Order points clockwise starting from top-left.",
            items: {
              type: Type.OBJECT,
              properties: {
                x: { type: Type.INTEGER },
                y: { type: Type.INTEGER },
              },
              required: ["x", "y"],
            },
          },
        },
        required: ["title", "colorDescription", "polygon"],
      },
    },
  },
  required: ["books"],
};

export const analyzeBookshelf = async (base64Image: string): Promise<AnalysisResult> => {
  try {
    // Remove data URL prefix if present for the API call
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg", // Assuming JPEG/PNG, the API handles standard image types well
              data: base64Data,
            },
          },
          {
            text: "Analyze this image of a bookshelf. Detect every individual book spine visible. For each spine, create a precise bounding polygon. Return the coordinates on a normalized 1000x1000 grid. Make sure the polygon tightly hugs the spine, even if it is leaning or tilted.",
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.2, // Low temperature for more deterministic coordinate generation
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text received from Gemini.");
    }

    const data = JSON.parse(text) as { books: any[] };
    
    // Add unique IDs to the books for React keys
    const processedBooks = data.books.map((book, index) => ({
      ...book,
      id: `book-${index}-${Date.now()}`,
    }));

    return { books: processedBooks };
  } catch (error) {
    console.error("Error analyzing bookshelf:", error);
    throw error;
  }
};
