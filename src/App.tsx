import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import HomeCards from './components/home/HomeCards'
import JobListings from './components/jobListings/JobListings'

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HomeCards />
            <JobListings />
          </>
        } />

        <Route path="/jobs" element={<JobListings />} />
      </Routes>
    </Router>
  );
}

export default App;