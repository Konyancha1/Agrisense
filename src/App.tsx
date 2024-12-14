import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import MainLayout from './layouts/mainLayout';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;

