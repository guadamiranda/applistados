import { HomePage } from '../src/pages/Home/HomePage'
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
        <HomePage/> 
      <Footer/>
    </div>
  );
}

export default App;
