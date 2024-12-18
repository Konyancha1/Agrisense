import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/heroSection';
import MainLayout from './layouts/mainLayout';
import ClientsSection from './components/clientSection';
import AboutSection from './components/aboutSection';
import SolutionsSection from './components/solutionsSection';
import ContactUsSection from './components/contactSection';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Home />
        <ClientsSection />
        <AboutSection />
        <SolutionsSection />
        <ContactUsSection />
      </MainLayout>
    </Router>
  );
};

export default App;

