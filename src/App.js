import './App.css';
import AboutMe from './Components/AboutMe';
import AchievementsCount from './Components/AchievementsCount';
import FloatingWhatsapp from './Components/FloatingWhatsapp';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Map from './Components/Map';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AchievementsCount/>
      <Services/>
      <AboutMe/>
      <Map/>
      {/* <Footer/> */}
      <FloatingWhatsapp/>
    </div>
  );
}

export default App;
