import { ImageContextProvider } from './context/imageContext';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <ImageContextProvider>
      <AppRouter />
    </ImageContextProvider>
  );
}

export default App;
