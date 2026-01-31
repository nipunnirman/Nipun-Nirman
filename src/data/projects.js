export const projectsData = [
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
    title: 'NASA Hybrid RAG System',
    description: 'Advanced Retrieval-Augmented Generation system combining vector search and keyword search for NASA technical documents.',
    highlights: [
      'ChromaDB + BM25 hybrid search',
      'AI agent with 6+ NASA API integrations',
      'Docker containerized on AWS Elastic Beanstalk'
    ],
    tech: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'FastAPI', 'Docker']
  },
  {
    title: 'Cricket Toss Analysis & Prediction',
    description: 'Comprehensive cricket analytics platform analyzing 500+ matches across Sri Lankan grounds.',
    highlights: [
      '75%+ accuracy in match outcome prediction',
      'MAE < 20 runs for score prediction',
      'Real-time weather API integration'
    ],
    tech: ['Python', 'XGBoost', 'Streamlit', 'FastAPI', 'Docker', 'AWS']
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