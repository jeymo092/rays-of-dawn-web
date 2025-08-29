import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-trust text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join us in our mission to empower vulnerable Kenyan girls
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-elegant">
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your inquiry, how you'd like to help, or any questions you have..."
                    rows={6}
                  />
                </div>
                
                <Button variant="hope" size="lg" className="w-full">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We'd love to hear from you. Whether you want to volunteer, donate, or learn more about our work, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hope rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                    <p className="text-sm text-muted-foreground">Available Monday - Friday, 9 AM - 5 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">info@mialeyapambazuko.org</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">Address</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                    <p className="text-sm text-muted-foreground">Visit by appointment only</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-warm rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-primary mb-2">Ready to Make a Difference?</h3>
                <p className="text-muted-foreground mb-4">
                  Join our community of supporters and help us empower more girls.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hope" size="lg">
                    Donate Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Become a Volunteer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;