import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserAdd from './components/settings/auth/user/Add/UserAdd';
import UserList from './components/settings/auth/user/List/UserList';
import PsuAdd from './components/master-data/psu/Add/PsuAdd';
import PsuList from './components/master-data/psu/List/PsuList';
import KhanaAdd from './components/master-data/khana/Add/KhanaAdd';
import KhanaList from './components/master-data/khana/List/KhanaList';
import RegistererAdd from './components/master-data/registerer/Add/RegistererAdd';
import RegistererList from './components/master-data/registerer/List/RegistererList';
import UserLocationsAdd from './components/user-locations/Add/UserLocationsAdd';
import UserLocationsList from './components/user-locations/List/UserLocationsList';
import ScheduleAdd from './components/master-data/schedule/Add/ScheduleAdd';
import ScheduleList from './components/master-data/schedule/List/ScheduleList';
import QuestionTopicAdd from './components/master-data/question-topic/Add/QuestionTopicAdd';
import QuestionTopicList from './components/master-data/question-topic/List/QuestionTopicList';
import QuestionAdd from './components/master-data/question/Add/QuestionAdd';
import QuestionList from './components/master-data/question/List/QuestionList';

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
              <Route path="/settings/auth/user/Add/" exact element={<UserAdd />} />
              <Route path="/settings/auth/user/List/" exact element={<UserList />} />
              <Route path="/master-data/psu/Add/" exact element={<PsuAdd />} />
              <Route path="/master-data/psu/List/" exact element={<PsuList />} />
              <Route path="/master-data/khana/Add/" exact element={<KhanaAdd />} />
              <Route path="/master-data/khana/List/" exact element={<KhanaList />} />
              <Route path="/master-data/registerer/Add/" exact element={<RegistererAdd />} />
              <Route path="/master-data/registerer/List/" exact element={<RegistererList />} />
              <Route path="/user-locations/Add/" exact element={<UserLocationsAdd />} />
              <Route path="/user-locations/List/" exact element={<UserLocationsList />} />
              <Route path="/master-data/question/schedule/Add/" exact element={<ScheduleAdd />} />
              <Route path="/master-data/question/schedule/List/" exact element={<ScheduleList />} />
              <Route path="/master-data/question/question-topic/Add/" exact element={<QuestionTopicAdd />} />
              <Route path="/master-data/question/question-topic/List/" exact element={<QuestionTopicList />} />
              <Route path="/master-data/question/question/Add/" exact element={<QuestionAdd />} />
              <Route path="/master-data/question/question/List/" exact element={<QuestionList />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
