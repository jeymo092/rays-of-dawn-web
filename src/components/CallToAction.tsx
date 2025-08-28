import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-sunset text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join Us in Making a Difference
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Your support can transform the life of a vulnerable girl and help break the cycle of poverty. 
          Together, we can create lasting change in Kenya.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90">
            Donate Today
          </Button>
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Sponsor a Girl
          </Button>
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Volunteer With Us
          </Button>
        </div>

        {/* Impact Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">$50/month</h3>
            <p className="text-white/80">Sponsors a girl's full education</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">$100/month</h3>
            <p className="text-white/80">Provides safe housing & care</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💝</div>
            <h3 className="text-xl font-bold mb-2">$25/month</h3>
            <p className="text-white/80">Supplies hygiene products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;