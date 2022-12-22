import { HomePage } from '../src/pages/Home/HomePage'
import { ListPage } from './pages/ListPage/ListPage';
import { Header } from '../src/components/Header/header'
import { Footer } from '../src/components/Footer/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <ListPage/>
      <Footer/>
    </div>
  );
}

export default App;
