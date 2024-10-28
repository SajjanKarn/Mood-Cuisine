import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = generativeAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
