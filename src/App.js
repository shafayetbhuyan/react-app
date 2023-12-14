import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PsuList from './components/master-data/psu/List/PsuList';
import PsuAdd from './components/master-data/psu/Add/PsuAdd';

function App() {
  const Home = () => <div>Home bmmmbmmb</div>;
  const About = () => <div>About Pagefdfdfdfdffd</div>;
  const Contact = () => <div>Contact Page</div>;
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* <LeftSidebar menuData={menuData} /> */}
        <Layout>
          <div className='main'>
            <Routes>
              <Route path="/dashboard" exact element={<Home />} />
              <Route path="/svrs/master-data/Psu/Add/" exact element={<PsuAdd />} />
              <Route path="/master-data/psu/list" exact element={<PsuList />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
