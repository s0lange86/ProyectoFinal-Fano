import { CartProvider } from './context/CartContext';
import MainRouter from './routes/MainRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  )
}

export default App