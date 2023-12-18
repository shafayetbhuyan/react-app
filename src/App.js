import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserAdd from './components/Settings/auth/User/Add/UserAdd';
import UserList from './components/Settings/auth/User/List/UserList';
import PsuAdd from './components/master-data/psu/Add/PsuAdd';
import PsuList from './components/master-data/psu/List/PsuList';
import KhanaAdd from './components/master-data/Khana/Add/KhanaAdd';
import KhanaList from './components/master-data/Khana/List/KhanaList';
import RegistererAdd from './components/master-data/Registerer/Add/RegistererAdd';
import RegistererList from './components/master-data/Registerer/List/RegistererList';
import UserLocationsAdd from './components/UserLocations/Add/UserLocationsAdd';
import UserLocationsList from './components/UserLocations/List/UserLocationsList';
import ScheduleAdd from './components/master-data/Schedule/Add/ScheduleAdd';
import ScheduleList from './components/master-data/Schedule/List/ScheduleList';
import QuestionTopicAdd from './components/master-data/QuestionTopic/Add/QuestionTopicAdd';
import QuestionTopicList from './components/master-data/QuestionTopic/List/QuestionTopicList';
import QuestionAdd from './components/master-data/Question/Add/QuestionAdd';
import QuestionList from './components/master-data/Question/List/QuestionList';

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
              <Route path="/settings/auth/User/Add/" exact element={<UserAdd />} />
              <Route path="/settings/auth/User/List/" exact element={<UserList />} />
              <Route path="/master-data/Psu/Add/" exact element={<PsuAdd />} />
              <Route path="/master-data/Psu/List/" exact element={<PsuList />} />
              <Route path="/master-data/Khana/Add/" exact element={<KhanaAdd />} />
              <Route path="/master-data/Khana/List/" exact element={<KhanaList />} />
              <Route path="/master-data/Registerer/Add/" exact element={<RegistererAdd />} />
              <Route path="/master-data/Registerer/List/" exact element={<RegistererList />} />
              <Route path="/UserLocations/Add/" exact element={<UserLocationsAdd />} />
              <Route path="/UserLocations/List/" exact element={<UserLocationsList />} />
              <Route path="/master-data/question/Schedule/Add/" exact element={<ScheduleAdd />} />
              <Route path="/master-data/question/Schedule/List/" exact element={<ScheduleList />} />
              <Route path="/master-data/question/QuestionTopic/Add/" exact element={<QuestionTopicAdd />} />
              <Route path="/master-data/question/QuestionTopic/List/" exact element={<QuestionTopicList />} />
              <Route path="/master-data/question/Question/Add/" exact element={<QuestionAdd />} />
              <Route path="/master-data/question/Question/List/" exact element={<QuestionList />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
