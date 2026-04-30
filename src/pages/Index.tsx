import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Award, Code2, Layers, Zap } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" /></svg>
);

const skills = {
  "AEM Sites": ["Components", "Templates", "Experience Fragments", "DAM", "Content Fragments"],
  "AEM Forms": ["Adaptive Forms", "Form Fragments", "Custom Submissions", "GuideBridgeAPI"],
  "Backend": ["Java", "Sling Models", "OSGi Services", "Servlets", "Maven"],
  "Frontend": ["HTL (Sightly)", "JavaScript", "jQuery", "Bootstrap", "AJAX"],
  "DevOps": ["Jenkins", "Adobe Pipelines", "Git", "Bitbucket", "SonarQube"],
  "Tools": ["JIRA", "IntelliJ", "Eclipse", "VS Code", "Apache HttpClient"],
};

const experience = [
  {
    company: "Nextrow Digital",
    via: "Direct",
    period: "Mar 2026 — Present",
    role: "AEM Developer",
    description: "Currently learning and working with AEM EDS (Adobe Experience Manager Edge Delivery Services) and Adobe Analytics.",
  },
  {
    company: "Pacific Life Insurance Company",
    via: "The Barbarian Group",
    period: "Jul 2025 — March 2026",
    role: "AEM Developer",
  },
  {
    company: "Suncorp Group Limited",
    via: "Cognizant Technology Solutions",
    period: "Nov 2023 — Jul 2025",
    role: "AEM Developer",
  },
  {
    company: "BDO Unibank",
    via: "Cognizant Technology Solutions",
    period: "Dec 2021 — Nov 2023",
    role: "AEM Developer",
  },
];

const highlights = [
  { icon: Layers, title: "Component Architecture", desc: "Built reusable AEM components & templates leveraging Sling Resource Merger, Sling Models, GuideBridgeAPI and ACS Commons." },
  { icon: Zap, title: "Integrations & APIs", desc: "Integrated Apigee-X, Duckcreek and external services with AEM Forms via Apache HttpClient and custom servlets." },
  { icon: Code2, title: "CI/CD & Quality", desc: "Implemented Jenkins & Adobe Pipelines with SonarQube and JUnit, streamlining delivery across environments." },
  { icon: Award, title: "Mentorship", desc: "Mentored junior engineers on AEM best practices and coordinated Go-Live activities with cross-functional teams." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] } }),
} as const;

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <nav className="container max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Nikhil<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#credentials" className="hover:text-foreground transition-colors">Credentials</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Journey</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Stack</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <a
            href="mailto:danielnikhil10@icloud.com"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
          >
            Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-32 bg-hero">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Available for AEM consulting
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] font-light text-balance"
          >
            Crafting <em className="italic gradient-text font-normal">enterprise</em><br />
            digital experiences<br />
            with <span className="font-semibold">Adobe AEM</span>.
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-12 grid md:grid-cols-[1fr_auto] gap-8 items-end"
          >
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Nikhil Dasari</span> — an Adobe Certified
              AEM Sites & Forms Developer with 4+ years designing scalable components, adaptive forms
              and OSGi services for global enterprises.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground font-mono">
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-accent" /> Hyderabad, IN</span>
              <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-accent" /> danielnikhil10@icloud.com</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden shadow-card"
          >
            {[
              { k: "4+", v: "Years experience" },
              { k: "3", v: "Enterprise clients" },
              { k: "2", v: "Adobe certifications" },
              { k: "AEMaaCS", v: "Edge Delivery Services (EDS) & AEM 6.5" },
            ].map((s) => (
              <div key={s.v} className="bg-card p-6">
                <div className="font-display text-3xl md:text-4xl font-light">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT / HIGHLIGHTS */}
      <section id="about" className="py-32 border-t border-border/60">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">— 01 / About</span>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight">
                What I bring to the table.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialise in designing and implementing AEM Sites and Adaptive Forms — customising
                components with Sling Models, Sightly (HTL) and GuideBridgeAPI. From editable templates
                and content policies to OSGi bundles and third-party integrations, I focus on shipping
                performant, maintainable solutions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card p-8 md:p-10 group hover:bg-accent-soft transition-colors"
              >
                <h.icon className="w-7 h-7 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-display text-2xl mb-3">{h.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="credentials" className="py-32 border-t border-border/60">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">— 02 / Credentials</span>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight">
                Certified by Adobe.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-4">
              {[
                {
                  title: "Adobe Certified Professional",
                  sub: "Adobe Experience Manager Developer",
                  platform: "Adobe",
                  url: "https://certification.adobe.com/credential/verify/898234ec-af3f-42e1-b42a-be5e94eb0bdc"
                },
                {
                  title: "Adobe Certified Expert",
                  sub: "Adobe Experience Manager Forms Developer",
                  platform: "Adobe",
                  url: "https://certification.adobe.com/credential/verify/95821776-4bf1-11f0-9b2a-42010a400fc3"
                },
                {
                  title: "Adobe Certified Professional",
                  sub: "Adobe Experience Manager Edge Delivery Services",
                  platform: "Adobe",
                  url: "public/nikhil-dasari-aem-edge-delivery-services-developer-professional-20260430.pdf"
                },
              ].map((c) => (
                <a
                  key={c.title}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group" // "block" makes the whole area clickable
                >
                  <div className="flex items-start gap-5 p-6 border border-border/60 rounded-lg group-hover:border-accent group-hover:shadow-card transition-all bg-card">
                    <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-xl group-hover:text-accent transition-colors">
                          {c.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-wider border border-accent/20">
                          {c.platform}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{c.sub}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 bg-secondary/40 border-y border-border/60">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">— 03 / Journey</span>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight">
                Where I've shipped.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex items-end">
              <p className="text-muted-foreground">
                Delivering AEM solutions for insurance, banking and financial services clients worldwide.
              </p>
            </div>
          </div>

          <div className="space-y-px bg-border rounded-lg overflow-hidden">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card p-8 md:p-10 grid md:grid-cols-12 gap-6 items-baseline group hover:bg-accent-soft transition-colors"
              >
                <div className="md:col-span-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {job.period}
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-3xl font-normal">{job.company}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {job.role} · via <em className="italic">{job.via}</em>
                  </p>
                  {job.description && (
                    <p className="text-sm text-muted-foreground/90 mt-3 leading-relaxed">
                      {job.description}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2 md:text-right">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all inline-block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">— 04 / Stack</span>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight">
                Tools of the trade.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex items-end">
              <p className="text-muted-foreground">
                A focused toolkit honed over four years across AEM 6.5 and AEM as a Cloud Service.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([cat, items], i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-card border border-border/60 rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-xl">{cat}</h3>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          background: "radial-gradient(ellipse at center, hsl(22 88% 55% / 0.4), transparent 60%)"
        }} />
        <div className="container max-w-4xl mx-auto px-6 text-center relative">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-glow">— 05 / Let's talk</span>
          <h2 className="font-display text-5xl md:text-7xl font-light mt-6 leading-[1.05] text-balance">
            Have an AEM project in mind?
          </h2>
          <p className="mt-8 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Whether it's a new build, a migration to AEMaaCS, or extending Adaptive Forms — I'd love to hear about it.
          </p>

          <a
            href="mailto:danielnikhil10@icloud.com"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            danielnikhil10@icloud.com
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="mt-16 flex items-center justify-center gap-6 text-primary-foreground/60">
            <a href="tel:+919502978048" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> +91 95029 78048
            </a>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
            <a href="https://www.linkedin.com/in/nikhil-dasari-35645320a/" aria-label="LinkedIn" className="hover:text-accent transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
            <a href="https://github.com/1Nikhil0" aria-label="GitHub" className="hover:text-accent transition-colors"><GithubIcon className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border/60">
        <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Nikhil Dasari</span>
          <span>Built with care · Hyderabad, India</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
