export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
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
    // Safely parse body — handles both raw and pre-parsed cases
    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch { body = {}; }
    }

    const { messages } = body || {};

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
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
- Generative AI & LLMs: LangChain, RAG Pipelines, Prompt Engineering, LLM Fine-Tuning (LoRA, QLoRA), Vector Databases (FAISS, ChromaDB, Pinecone), Models (GPT, LLaMA 3, Gemma), Agentic AI (LangGraph, CrewAI), MCP, AWS Bedrock, Nvidia NIM.
- AI & Machine Learning: PyTorch, TensorFlow, Deep Learning, CNN (EfficientNet-B0), RNN, LSTM, GRU, Transformers (Self-Attention, Multi-Head Attention, Encoder-Decoder, Positional Encoding).
- Programming: Python (Primary), JavaScript, C++, SQL.
- Tools: Flask, Streamlit, OpenCV, MTCNN, PostgreSQL, MySQL, Power BI, Git, GitHub, Hugging Face, Neo4j, AWS SageMaker, AWS Lambda.

## PROJECTS
1. FER + Emotion-Based Music Recommender (Advanced): Real-time Facial Emotion Recognition using EfficientNet-B0 and MTCNN. Detects emotion over 10-second window, recommends Bollywood songs (1990-2025) matched to mood. Supports voice input and YouTube search. Tech: Python, PyTorch, Flask, OpenCV.
2. Generative AI — LangChain & RAG Pipeline: End-to-end RAG pipelines using LangChain, vector stores and LLMs. Features prompt engineering, memory, agents. Based on Krish Naik's course.
3. AI-Powered Notes App: Full-stack app with AI-generated summaries. Tech: React, Node.js, Express, PostgreSQL.
4. IMDB Sentiment Analysis: Movie review sentiment prediction using RNNs. Tech: Python, TensorFlow.
5. Electricity Load Forecasting: Time-series forecasting for electricity demand. Tech: Python, ML.
6. Personalized Diet Recommender: ML-based nutrition recommendation system.
7. Threadink App: Full-stack content creation platform. Tech: React, Node.js, Express.

## CERTIFICATIONS & COURSES
- Complete Generative AI Course with LangChain & Hugging Face — Krish Naik (Featured)
  Topics covered: LSTM, GRU, Transformers, LLMs, LangChain, RAG, Chatbots, Fine-Tuning (LoRA/QLoRA), LangGraph, CrewAI, MCP, AWS Bedrock, Nvidia NIM, Neo4j Graph Databases.
- Supervised Machine Learning — Coursera
- Generative AI Fundamentals — Google Cloud
- Web Development Bootcamp — Udemy
- Microsoft Power BI — Infosys

## LEADERSHIP & ACTIVITIES
- Managing Director, CRID: Managed and directed multi-domain teams ensuring successful execution of flagship events through strategic leadership and crisis management.
- Event Manager, Entrepreneurship Cell: Organized startup-focused events collaborating with founders and CEOs; handled planning, coordination, and execution.

## HOBBIES & INTERESTS
- Fitness & Gym: Passionate about working out regularly, keeping disciplined and energetic.
- Building AI Projects in free time.
- Learning from AI experts like Krish Naik.
- Exploring new Generative AI research and tools.

## LOOKING FOR
- Data Science roles (internship or full-time)
- Generative AI / LLM Engineer roles
- Machine Learning Engineer roles
- Open to remote and on-site positions

## FAQ
Q: Is Amrit available for opportunities?
A: Yes! Reach out via LinkedIn or the contact form on the portfolio.
Q: Does Amrit have leadership experience?
A: Yes, he served as Managing Director of CRID and Event Manager for the Entrepreneurship Cell.
Q: What are Amrit's hobbies?
A: Fitness/gym, building AI projects, and learning from experts like Krish Naik.
`;

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
      return res.status(response.status).json({ 
        error: errorData.error?.message || "Failed to fetch response from Groq." 
      });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}