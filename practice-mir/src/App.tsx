import './App.css'  
import PageLayout from './components/Layouts/PageLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';

function App() {

  return (
    <Router>
      <PageLayout>
        <MainPage/>
      </PageLayout>
    </Router>
  )
}

export default App
