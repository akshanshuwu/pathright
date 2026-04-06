import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Navbar from './components/common/Navbar';
import PageTransition from './components/common/PageTransition';
import Landing from './pages/Landing';
import Quiz from './pages/Quiz';
import Loading from './pages/Loading';
import Results from './pages/Results';
import Roadmap from './pages/Roadmap';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function Guard({ children }) {
  const { quizCompleted } = useAppContext();
  return quizCompleted ? children : <Navigate to='/quiz' replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/loading' element={<Guard><Loading /></Guard>} />
          <Route path='/results' element={<Guard><Results /></Guard>} />
          <Route path='/roadmap/:courseId' element={<Guard><Roadmap /></Guard>} />
          <Route path='/dashboard' element={<Guard><Dashboard /></Guard>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}
