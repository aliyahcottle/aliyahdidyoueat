import logo, { ReactComponent } from './logo.svg';
import './App.css';

function App() {
  return (

  <div class="container">

    <header>
      <h1>Aliyah, did you eat?</h1>
    </header>

    <div class="description">
      <p>A novelty webapp where you can ask Aliyah out to do her 
        favourite pasttime, eat.</p>
    </div>

    <ListView/>
  
  </div>

  );
}

function ListView() {
    return (
      <div class="list_view">

      <ListComponent />
      <ListComponent />
      <ListComponent />
      <ListComponent />
      <ListComponent />
      <ListComponent />

    </div>
    );
  }

  function ListComponent(){
    return (
      <div class="resturant_item">
        <div class="overlay">
          <div class="resturant_category">Seafood</div>
          <div class="resturant_name">The Captain's Boil</div>
        </div>
      </div>
    )
  }


export default App;
