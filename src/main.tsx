import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Font Awesome Configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faGraduationCap, 
  faHome, 
  faHeart, 
  faHandshake, 
  faBriefcase, 
  faBook, 
  faGift,
  faBars,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGraduationCap, 
  faHome, 
  faHeart, 
  faHandshake, 
  faBriefcase, 
  faBook, 
  faGift,
  faBars,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
)

createRoot(document.getElementById("root")!).render(<App />);
