import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-sunset"></div>
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Giving Hope and a Better Tomorrow to
          <span className="block text-hope"> Kenyan Girls</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Empowering vulnerable girls through education, mentorship, and comprehensive support services
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hope" size="lg" className="px-8 py-4 text-lg">
            Donate Now
          </Button>
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Become a Volunteer
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-hope">500+</div>
            <div className="text-sm text-white/80">Girls Supported</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-hope">120+</div>
            <div className="text-sm text-white/80">Scholarships</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-hope">75+</div>
            <div className="text-sm text-white/80">Rescue Cases</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-hope">8</div>
            <div className="text-sm text-white/80">Years of Service</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;