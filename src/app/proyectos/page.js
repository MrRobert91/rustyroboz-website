
export const metadata = {
  title: "Projects | David Robert",
  description: "A showcase of my recent work in Data Science and Machine Learning.",
};

const projects = [
  {
    title: "Predictive Maintenance System",
    description: "End-to-end pipeline to predict machinery failures using IoT sensor data. Reduced downtime by 25%.",
    tags: ["Python", "TensorFlow", "IoT"],
    link: "#"
  },
  {
    title: "Customer Sentiment Analysis",
    description: "Real-time dashboard analyzing brand sentiment across social media using BERT.",
    tags: ["NLP", "HuggingFace", "Streamlit"],
    link: "#"
  },
  {
    title: "Credit Risk Scoring Model",
    description: "Robust classification model for loan approval automation with high interpretability using SHAP.",
    tags: ["Scikit-learn", "XGBoost", "Finance"],
    link: "#"
  },
  {
    title: "Computer Vision for Quality Control",
    description: "Automated visual inspection system for manufacturing lines using defect detection algorithms.",
    tags: ["PyTorch", "OpenCV", "Edge AI"],
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto pt-10 pb-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold font-serif text-mocha mb-4">Selected Projects</h1>
        <p className="text-charcoal/70 text-lg">A collection of open source and professional work demonstrating my expertise in AI and Software Engineering.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl p-8 hover:shadow-lg hover:shadow-mocha/5 hover:border-terracotta/30 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-mocha font-serif group-hover:text-terracotta transition-colors">{project.title}</h3>
              <svg className="w-6 h-6 text-terracotta/50 group-hover:text-terracotta group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </div>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-cream border border-mocha/10 rounded-full text-xs font-medium text-mocha/70 uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
