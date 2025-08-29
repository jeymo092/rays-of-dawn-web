import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Programs from "@/components/Programs";

const ProgramsPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-sunset text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive support services designed to empower and transform the lives of vulnerable girls
          </p>
        </div>
      </section>

      <Programs />
      
      <Footer />
    </main>
  );
};

export default ProgramsPage;