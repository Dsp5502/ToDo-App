import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../container/App';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
