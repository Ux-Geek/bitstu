import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Briana Isabella Torres",
    role: "Co-Founder & CEO",
    bio: "CS & Design @ Northeastern • Former SWE Intern @ Apple • AI systems for Massachusetts state government • RAG pipelines & agentic architecture",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Heather Carminati",
    role: "Co-Founder & CTO",
    bio: "MS CS @ Northeastern • Frontend engineering • Full-stack product development • Technical architecture & infrastructure",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-20">Two women in STEM. One vision.</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {TEAM.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-brand-orange font-semibold mb-6">{member.role}</p>
                  <div className="flex gap-4">
                    <Linkedin className="w-5 h-5 text-white hover:text-brand-orange cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 text-white hover:text-brand-orange cursor-pointer transition-colors" />
                    <Mail className="w-5 h-5 text-white hover:text-brand-orange cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
