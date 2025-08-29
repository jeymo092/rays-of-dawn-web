import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHome, faHeart, faGift } from '@fortawesome/free-solid-svg-icons';

const Impact = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hope text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transforming lives and building brighter futures for Kenyan girls
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-elegant">
              <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-white" />
              </div>
              <div className="text-4xl font-bold text-hope mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Girls Supported</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-8 shadow-elegant">
              <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-white" />
              </div>
              <div className="text-4xl font-bold text-trust mb-2">120+</div>
              <div className="text-muted-foreground font-medium">Scholarships Awarded</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-8 shadow-elegant">
              <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHome} className="text-2xl text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">75+</div>
              <div className="text-muted-foreground font-medium">Rescue Cases</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-8 shadow-elegant">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeart} className="text-2xl text-white" />
              </div>
              <div className="text-4xl font-bold text-hope mb-2">8</div>
              <div className="text-muted-foreground font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories of transformation and hope from the girls we've supported
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-warm">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Grace's Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "Thanks to Miale Ya Pambazuko, I completed my secondary education and am now studying nursing. They didn't just save me from early marriage, they gave me a future."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-warm">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faHeart} className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Mary's Recovery</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "The counseling and support I received helped me heal from trauma. Now I'm a mentor to other girls facing similar challenges."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-warm">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faGift} className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Faith's Dream</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "The vocational training program taught me tailoring skills. I now run my own small business and support my younger siblings' education."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Impact;