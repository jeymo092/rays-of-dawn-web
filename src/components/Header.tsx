import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-warm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-sunset rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="font-bold text-xl text-primary">
              Miale Ya Pambazuko
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About Us
            </a>
            <a href="#programs" className="text-foreground hover:text-primary transition-smooth font-medium">
              Programs
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Impact
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>

          {/* Donate Button */}
          <Button variant="hope" className="hidden md:inline-flex">
            Donate Now
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;