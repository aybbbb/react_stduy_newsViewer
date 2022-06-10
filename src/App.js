import { Route, Routes } from '../node_modules/react-router-dom/index';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
