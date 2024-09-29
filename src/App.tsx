
import './App.css';
import { BreadcrumbsProvider } from './hooks/useBreadcrumbs';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BreadcrumbsProvider>
      <AppRoutes />
    </BreadcrumbsProvider>
  );
}

export default App;
