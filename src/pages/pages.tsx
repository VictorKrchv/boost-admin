import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home/page';
import { paths } from './paths';
import { ProductsPage } from './products/page';

export const Pages = () => {
  return (
    <Routes>
      <Route path={paths.home()} element={<HomePage />} />
      <Route path={paths.products()} element={<ProductsPage />} />
    </Routes>
  );
};
