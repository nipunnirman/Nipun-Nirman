export const projectsData = [
  {
    title: 'A/L BIOLOGY AI QUESTION ANSWER ASSISTANT',
    description: 'Multi-agent RAG system using a 3-agent LangGraph pipeline to answer A/L Biology questions with chunk-level citations.',
    highlights: [
      '3-agent LangGraph pipeline (Retrieval, Summarization, Verification) with hallucination detection.',
      'Biology textbook PDFs indexed into Pinecone vector database with Markdown formatted responses.',
      'Full stack deployment on Vercel with Python serverless backend and Vite built React chatbot UI.'
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Pinecone', 'React', 'Vercel'],
    link: 'https://al-bio-question-answer-resource-boo.vercel.app'
  },
  {
    title: 'Astrosera — Astronomy Learning Platform',
    description: 'A hybrid Retrieval-Augmented Generation (RAG) system integrating 6+ NASA APIs for real-time space data access alongside a historical knowledge base.',
    highlights: [
      'Architected a hybrid RAG system combining vector search (ChromaDB) and BM25 keyword search with reciprocal rank fusion.',
      'Built an AI agent with tool-calling capabilities using LangChain.',
      'Deployed a full-stack chatbot with a Streamlit frontend and FastAPI backend, containerized with Docker on AWS Elastic Beanstalk.'
    ],
    tech: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'Sentence Transformers', 'FastAPI', 'Docker', 'AWS']
  },
  {
    title: 'Dementia Risk Prediction Model',
    description: 'Binary classification model achieving 94.19% ROC-AUC for dementia prediction using 195,196 clinical records from NACC dataset.',
    highlights: [
      '94.19% ROC-AUC with minimal overfitting',
      '18 derived features through feature engineering',
      '90.16% accuracy with 83.27% F1-score'
    ],
    tech: ['Python', 'XGBoost', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    title: 'Exoplanet Discovery using Kepler Data',
    description: 'ML model predicting exoplanet candidates from NASA Kepler telescope data with interactive Streamlit application.',
    highlights: [
      'XGBoost binary classification on 15 astrophysical features',
      'SHAP explainability integration',
      'Real-time probability predictions'
    ],
    tech: ['Python', 'XGBoost', 'Streamlit', 'Scikit-Learn', 'SHAP']
  },
  {
    title: 'Cricket Toss Analysis & Win Prediction System',
    description: 'Comprehensive cricket analytics platform analyzing 500+ matches across 7 Sri Lankan cricket grounds, predicting match outcomes with 75%+ accuracy.',
    highlights: [
      'Built machine learning pipeline using XGBoost and Random Forest for optimal toss decision classifier, match winner predictor, and score regression.',
      'Feature engineering incorporating ground characteristics, team form, and meteorological data.',
      'Deployed interactive Streamlit dashboard and FastAPI backend with Docker containerization on AWS.'
    ],
    tech: ['Python', 'XGBoost', 'Scikit-Learn', 'Pandas', 'NumPy', 'Streamlit', 'FastAPI', 'Docker', 'AWS'],
    link: 'https://keththarama-stadium-toss-and-powerp.vercel.app'
  },
  {
    title: 'React E-Commerce Website',
    description: 'Responsive online store with shopping cart, product filtering, and mobile-first design.',
    highlights: [
      'Responsive design for all devices',
      'Product filtering and search',
      'Shopping cart functionality'
    ],
    tech: ['React', 'CSS', 'JavaScript', 'PHP']
  },
  {
    title: 'OralScan AI – Deep Learning Diagnostic Tool',
    description: 'Full-Stack web application leveraging a custom Convolutional Neural Network (CNN) to calculate oral cancer risk probabilities from patient images.',
    highlights: [
      'High-performance RESTful Python backend using FastAPI for rapid inference with TensorFlow/Keras.',
      'Premium glassmorphic UI using React and Vite with live webcam capture and real-time SVG risk visualizations.',
      'Split-deployment architecture with ML backend on Render and frontend on Vercel.'
    ],
    tech: ['Python', 'FastAPI', 'TensorFlow', 'Keras', 'React', 'Vite'],
    link: 'https://oral-cancer-detector-cnn-deep-learn.vercel.app'
  },
  {
    title: 'Monaragala District Development Projects Management System',
    description: 'Comprehensive full-stack web application to track, manage, and visualize development projects across the Monaragala District.',
    highlights: [
      'Responsive public interface featuring interactive project explorer, Leaflet.js map integration, and Recharts analytics dashboard.',
      'Secure administrative portal with Node.js, Express.js, and MongoDB, implementing JWT role-based authentication.',
      'Integrated Cloudinary for scalable media management and image hosting.'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'Recharts'],
    link: 'https://development-projects-web-applicatio.vercel.app'
  },
  {
    title: 'Through My Pencil Full Stack Art ECommerce Platform',
    description: 'Comprehensive full stack e-commerce and portfolio application featuring secure role-based authentication and persistent shopping cart.',
    highlights: [
      'Integrated an OpenAI powered virtual assistant with custom prompt engineering to automatically handle customer inquiries.',
      'Implemented a streamlined WhatsApp redirect checkout flow for direct order processing.',
      'Created a responsive, modern UI deployed to Vercel, supported by a RESTful Node.js/Express backend hosted on Render.'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI', 'Vite', 'Vercel', 'Render'],
    link: 'https://art-e-commerce-nine.vercel.app'
  },
  {
    title: 'Enterprise Chat Session Feedback System',
    description: 'Multi-tenant full-stack SaaS platform for dynamic post-chat feedback collection, eliminating IDOR vulnerabilities via secure UUID tokenization.',
    highlights: [
      'Implemented decoupled frontend-backend architecture featuring 2 distinct UI portals (Admin and Customer) built with React.',
      'Engineered a high-performance MongoDB data layer utilizing an Upsert pattern for real-time form configuration.',
      'Established zero-redundancy state management with strict 24-hour expiration validation.'
    ],
    tech: ['Kotlin', 'Spring Boot', 'React', 'Vite', 'MongoDB']
  },
  {
    title: 'A/L Study Focus — Full-Stack Study Management Web Application',
    description: 'Full-stack study management platform for A/L students with JWT-secured user authentication, supporting subject-specific session tracking.',
    highlights: [
      'Designed and implemented a RESTful API across 3 resource layers using Node.js and Express with a MongoDB backend.',
      'Developed an interactive weekly analytics dashboard with stacked bar charts displaying study time by subject.',
      'Resolved production 500 errors on Vercel by replacing ephemeral file-based caching with direct MongoDB queries.'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Recharts', 'Vite', 'Vercel'],
    link: 'https://a-l-study-focus.vercel.app'
  }
];