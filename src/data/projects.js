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
    title: 'Multi agent RAG System Using NASA data',
    description: 'Advanced Retrieval-Augmented Generation system combining vector search (ChromaDB) and keyword search (BM25) for semantic and lexical retrieval of NASA technical documents.',
    highlights: [
      'Enhanced accuracy achieved through reciprocal rank fusion.',
      'Interactive Streamlit frontend chatbot with FastAPI backend.',
      'Containerized with Docker for scalable deployment on AWS Elastic Beanstalk.'
    ],
    tech: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'Sentence Transformers', 'FastAPI', 'Docker']
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
    title: 'Cricket Toss Analysis & Prediction',
    description: 'Comprehensive cricket analytics platform analyzing 500+ matches across Sri Lankan grounds.',
    highlights: [
      '75%+ accuracy in match outcome prediction',
      'MAE < 20 runs for score prediction',
      'Real-time weather API integration'
    ],
    tech: ['Python', 'XGBoost', 'Streamlit', 'FastAPI', 'Docker', 'AWS'],
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
  }
];