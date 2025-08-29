import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faHome, 
  faGift, 
  faUsers, 
  faBriefcase, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';

const Programs = () => {
  const programs = [
    {
      icon: faGraduationCap,
      title: "Education Sponsorship",
      description: "We provide full scholarships for primary, secondary, and college education to ensure girls can achieve their academic dreams and break the cycle of poverty.",
      gradient: "bg-gradient-hope"
    },
    {
      icon: faHome,
      title: "Safe House Rescue Center", 
      description: "Our rescue center provides immediate safety, counseling, and support for girls facing vulnerability, abuse, or crisis situations.",
      gradient: "bg-gradient-trust"
    },
    {
      icon: faGift,
      title: "Feminine Health & Hygiene",
      description: "We provide sanitary towels, hygiene products, and health education to help girls maintain dignity and stay in school during menstruation.",
      gradient: "bg-gradient-sunset"
    },
    {
      icon: faUsers,
      title: "Mentorship Programs",
      description: "Connecting girls with role models and mentors who provide guidance, life skills training, and emotional support for personal growth.",
      gradient: "bg-gradient-warm"
    },
    {
      icon: faBriefcase,
      title: "Skills Development",
      description: "Vocational training and entrepreneurship programs that equip girls with practical skills for economic independence and self-reliance.",
      gradient: "bg-gradient-hope"
    },
    {
      icon: faHeart,
      title: "Psycho-social Support",
      description: "Professional counseling and therapy services to help girls heal from trauma and build resilience for a brighter future.",
      gradient: "bg-gradient-trust"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to vulnerable girls through these transformative initiatives that address their immediate needs and long-term empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 bg-background border-0 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-full ${program.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={program.icon} className="text-2xl text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;