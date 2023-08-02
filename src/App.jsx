import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationMenu from './components/navigationWheel/navigationMenu';
import Welcome from './components/welcome/welcome';
import AboutMe from './components/aboutMe/aboutMe';
import MyWorkList from './components/myWork/myWorkList';
import ContactMe from './components/contactMe/contactMe';
import CaseStudy from './components/myWork/caseStudy';
import Resume from './components/aboutMe/resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationMenu />}>
          <Route index element={<Welcome />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="work" element={<MyWorkList />} />
          <Route path="work/:name" element={<CaseStudy />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
