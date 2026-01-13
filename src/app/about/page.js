
export const metadata = {
  title: "About Me | David Robert",
  description: "Learn more about my journey as a Data Scientist and ML Engineer.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto pt-10 pb-20 space-y-16">
      {/* Introduction */}
      <section className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl shadow-mocha/10 bg-mocha/5">
            <img
              src="/images/profile.jpg"
              alt="David Robert"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-4xl font-bold font-serif text-mocha">Hi, I'm David.</h1>
          <p className="text-lg text-charcoal/80 leading-relaxed text-justify">
            I am a Data Scientist and Machine Learning Engineer passionate about bridging the gap between complex data and human understanding. With a background in computer science and statistics, I specialize in building interpretable AI models that drive decision-making.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed text-justify">
            My philosophy is simple: technology should serve people, not the other way around. I strive to create elegant, efficient, and ethical AI solutions.
          </p>
          <div className="pt-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-mocha text-cream font-medium rounded-full shadow-lg hover:bg-terracotta hover:shadow-terracotta/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience / Journey */}
      <section>
        <h2 className="text-3xl font-bold font-serif text-mocha mb-10 border-b border-mocha/10 pb-4">My Journey</h2>
        <div className="relative border-l-2 border-mocha/10 ml-4 space-y-12">
          {[
            {
              year: "2023 - Present",
              role: "Senior ML Engineer",
              company: "Tech Innovators Inc.",
              description: "Leading a team of 5 engineers to deploy large-scale NLP models for customer support automation."
            },
            {
              year: "2021 - 2023",
              role: "Data Scientist",
              company: "DataCorp Solutions",
              description: "Developed predictive models for churn reduction and supply chain optimization using Python and SQL."
            },
            {
              year: "2019 - 2021",
              role: "Junior Analyst",
              company: "StartUp Alpha",
              description: "Started my career analyzing user behavior data and creating automated dashboards."
            }
          ].map((item, index) => (
            <div key={index} className="relative pl-8">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-terracotta border-4 border-cream shadow-sm"></span>
              <span className="text-sm font-bold text-terracotta tracking-wide block mb-1">{item.year}</span>
              <h3 className="text-xl font-bold text-mocha">{item.role}</h3>
              <p className="text-charcoal/60 font-medium mb-2">{item.company}</p>
              <p className="text-charcoal/80 leading-relaxed bg-white/40 p-4 rounded-lg border border-white/50 backdrop-blur-sm shadow-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
