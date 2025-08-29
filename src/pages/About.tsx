import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUsers, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Miale Ya Pambazuko
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rays of Dawn - Empowering vulnerable Kenyan girls since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2016, Miale Ya Pambazuko (Rays of Dawn) was born from a deep conviction that every girl deserves hope, dignity, and opportunity. We began our journey witnessing the struggles of vulnerable girls in Kenya facing poverty, early marriages, and limited access to education.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small rescue operation has grown into a comprehensive support system that addresses the root causes of vulnerability while providing immediate relief and long-term empowerment.
              </p>
            </div>
            <div className="bg-gradient-hope rounded-lg p-8 text-white">
              <div className="text-center">
                <FontAwesomeIcon icon={faHeart} className="text-6xl mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To provide hope, education, and comprehensive support to vulnerable Kenyan girls, empowering them to break the cycle of poverty and achieve their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeart} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Compassion</h3>
              <p className="text-muted-foreground">Leading with empathy and understanding in every interaction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Community</h3>
              <p className="text-muted-foreground">Building strong networks of support and belonging</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
              <p className="text-muted-foreground">Believing in the transformative power of learning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHandshake} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Integrity</h3>
              <p className="text-muted-foreground">Operating with transparency and accountability</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;