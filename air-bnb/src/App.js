import './App.css';
import Navbar from './Navbar'
import Card from './Card'
import lol from './lol.png'
// import Hero from './Hero'
// <Hero />

function App() {
  return (
    <div>
      <Navbar />
      <Card 
        img = {lol}
        rating = "5.0"
        review_count = {6}
        country = "USA"
        title = "Nishanth Krishna"
        price = "136"
      />
      <Card 
        img = {lol}
        rating = "5.0"
        review_count = {6}
        country = "USA"
        title = "Nishanth Krishna"
        price = "136"
      />
      <Card 
        img = {lol}
        rating = "5.0"
        review_count = {6}
        country = "USA"
        title = "Nishanth Krishna"
        price = "136"
      />
      <Card 
        img = {lol}
        rating = "5.0"
        review_count = {6}
        country = "USA"
        title = "Nishanth Krishna"
        price = "136"
      />

    </div>
  );
}

export default App;
