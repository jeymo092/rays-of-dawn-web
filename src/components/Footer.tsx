import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-hope rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="font-bold text-xl">Miale Ya Pambazuko</div>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Empowering vulnerable Kenyan girls through education, mentorship, and comprehensive support services. 
              Building a brighter future, one girl at a time.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Email:</span> info@mialeyapambazuko.org
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> +254 XXX XXX XXX
              </p>
              <p className="text-sm">
                <span className="font-medium">Address:</span> Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hope">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#donate" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Transparency */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hope">Transparency</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#financials" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Financial Reports
                </a>
              </li>
              <li>
                <a href="#annual-report" className="text-primary-foreground/80 hover:text-hope transition-colors">
                  Annual Report
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Miale Ya Pambazuko. All rights reserved.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-hope transition-colors">
              <span className="sr-only">Facebook</span>
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-hope transition-colors">
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-hope transition-colors">
              <span className="sr-only">Instagram</span>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-hope transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;