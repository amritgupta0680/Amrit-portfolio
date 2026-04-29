export default async function handler(req, res) {
  // Add CORS headers for local testing, Vercel handles this in production via vercel.json usually, 
  // but good for direct API endpoints.
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array." });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "GROQ_API_KEY is not configured on the server." });
    }

    const SYSTEM_PROMPT = `
You are an intelligent AI assistant embedded in Amrit Gupta's personal portfolio website. 
Your goal is to answer questions about Amrit in a professional, polite, and enthusiastically helpful manner.
Always answer CONCISELY and accurately based ONLY on the following knowledge base. 
If a user asks something completely unrelated to Amrit or the portfolio, politely decline and steer the conversation back to Amrit's skills, projects, or background.

AMRIT GUPTA — PORTFOLIO KNOWLEDGE BASE
========================================

## PERSONAL INTRODUCTION
My name is Amrit Gupta. I am a final-year B.E. student specializing in Artificial Intelligence and Data Science. I am passionate about building intelligent systems powered by Generative AI, Large Language Models (LLMs), Deep Learning, and Data Science. I actively learn from industry leaders like Krish Naik and apply that knowledge to real-world projects.
I am actively seeking opportunities in Data Science and Generative AI roles where I can contribute to impactful, production-grade AI products.

## CONTACT & SOCIAL LINKS
- GitHub: https://github.com/amritgupta0680
- LinkedIn: https://www.linkedin.com/in/amrit-gupta-1162b232a
- Portfolio Website: https://amritgupta-portfolio.vercel.app
- Email: amritgupta0680@gmail.com

## EDUCATION
- Degree: Bachelor of Engineering (B.E.) in Artificial Intelligence and Data Science
- Currently in Final Year
- Relevant Coursework: Machine Learning, Deep Learning, Natural Language Processing, Data Structures & Algorithms, Database Management Systems, Computer Vision

## SKILLS
- Generative AI & LLMs: LangChain, RAG Pipelines, Prompt Engineering, LLM Fine-Tuning (LoRA), Vector Databases (FAISS, ChromaDB), Models (GPT, LLaMA 3, Gemma), Agentic AI (LangGraph, CrewAI).
- AI & Machine Learning: PyTorch, TensorFlow, Deep Learning, CNN (EfficientNet-B0), RNN, Transformers (Self-Attention, Encoder-Decoder).
- Programming: Python (Primary), JavaScript, C++, SQL.
- Tools: Flask, Streamlit, PostgreSQL, AWS (SageMaker, Bedrock).

## PROJECTS
1. FER + Emotion-Based Music Recommender (Advanced Version): Real-time Facial Emotion Recognition system using EfficientNet-B0 and MTCNN face detection. Recommends Bollywood songs matched to detected mood. Supports voice input (Speech-to-text) and YouTube search.
2. Generative AI — LangChain & RAG Pipeline: End-to-end pipelines using vector stores and LLMs for domain-specific questions. Features agent workflows.
3. AI-Powered Notes App: Full-stack app utilizing AI to generate concise note summaries. (React, Node, PostgreSQL).
4. IMDB Sentiment Analysis: Movie review sentiment prediction using RNNs.
5. Electricity Load Forecasting: Time-series forecasting for electricity demand patterns.
6. Personalized Diet Recommender: Machine learning-based nutrition recommender.
7. Threadink App: Full-stack content creation platform.

## CERTIFICATIONS & COURSES
- Complete Generative AI Course with LangChain & Hugging Face — Krish Naik
- Supervised Machine Learning — Coursera
- Generative AI Fundamentals — Google Cloud

## LEADERSHIP & ACTIVITIES
- Managing Director — CRID: Managed multi-domain teams for flagship events, making high-stakes decisions and crisis management.
- Event Manager — Entrepreneurship Cell: Organized startup events collaborating with founders and CEOs.

## HOBBIES & INTERESTS
- Fitness & Gym: Passionate about working out, keeping disciplined and energetic.
- Building AI Projects: In his free time.
- Learning from experts like Krish Naik.

## FREQUENTLY ASKED QUESTIONS
Q: Is Amrit available for freelance work?
A: Amrit is open to opportunities — reach out via LinkedIn or the contact form on the portfolio!
Q: Does Amrit have leadership experience?
A: Yes, he served as Managing Director of CRID and Event Manager for the E-Cell.
`;

    // Inject the system prompt at the beginning of the chat log
    const apiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API Error:", errorData);
      return res.status(response.status).json({ error: "Failed to fetch response from Groq." });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
