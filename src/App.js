import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';

class App extends React.Component {

  render(){
    return (
      <div class="container">
  
          <header>
            <i class="fas fa-bars"></i>
            <h1>Aliyah, did you eat?</h1>
            <i class="far fa-map"></i>
          </header>

    <ListView/>

    <footer> Aliyah Cottle </footer>
  
  </div>

    );
  }
}


class ListView extends React.Component {
    
  render(){  
  return (
      <div class="list_view">

        <h1>Select Location:</h1>

      <QuickRefine />
      
      <Fade left>
        <ListComponent />
      </Fade>
    </div>
      );
    }
  }

  function ListComponent(){

    const resturants = [
      {"name": "Cabanos", "category": "meats", "website": "http://cabanos.ca", "bg-pic": "" },
      {"name": "Chica's Nashville Hot Chicken", "category": "meats", "website": "https://www.chicaschicken.net/order/", "bg-pic": "" },
      {"name": "Kansas King", "category": "meats", "website": "https://www.kansasking.com/menus", "bg-pic": "" },
      {"name": "XXI Chophouse", "category": "meats", "website": "https://www.xxichophouse.com/dinner", "bg-pic": "" },
      {"name": "Wow! Wing House", "category": "meats", "website": "http://www.wowwinghouse.com/morningside-milner/", "bg-pic": "" },
      {"name": "Top Gun Burger", "category": "meats", "website": "http://www.topgunburgerto.com/menu/", "bg-pic": "" },
    ];
  
  
      return (
        <div>
         {resturants ? resturants.map(resturant => {
          
          return (
           <div class="resturant_item">
            <div class="overlay">
             <div class="resturant_category"><p>{resturant.category}</p></div>
             <div class="resturant_name"><p>{resturant.name}</p></div>
            </div>   
           </div>
           );
          })
          : "Loading..."}
        </div>
      );
    }

  class QuickRefine extends React.Component {

 /*    const emojiCategory = {

      meatCategory: 'Meat',
      pizzaCategory: 'Pizza & Pasta',
      sushiCategory: 'Seafood'
    }; */

    constructor(props){
      super(props);
      this.state = {
        buttonPressed: false,
      };
    }

    ToggleCategory(){
      this.setState((currentState) => ({
        buttonPressed: !currentState.buttonPressed,
      }));
    }

    render(){

      const category = this.state.emojiCategory

      return (
        <div class="quick_refine">
  
        
        <button onClick={ () => this.ToggleCategory()} class={ this.state.buttonPressed ? "meat-on" : "quick_button"}>
          <span class="emoji">🥩</span>
        </button>
        <button onClick={ () => this.ToggleCategory()} class={ this.state.buttonPressed ? "pizza-on" : "quick_button"}>
          <span class="emoji">🍕</span>
        </button>
        <button onClick={ () => this.ToggleCategory()} class={ this.state.buttonPressed ? "seafood-on" : "quick_button"}>
          <span class="emoji">🍣</span>
        </button>
        <button onClick={ () => this.ToggleCategory()} class={ this.state.buttonPressed ? "tacos-on" : "quick_button"}>
          <span class="emoji">🌮</span>
        </button>
        <button onClick={ () => this.ToggleCategory()} class={ this.state.buttonPressed ? "breakfast-on" : "quick_button"}>
          <span class="emoji">🥞</span>
        </button>
        <button onClick={ () => this.ToggleCategory()} class={ this.state.buttonPressed ? "drinks-on" : "quick_button"}>
          <span class="emoji">🍻</span>
        </button>
  
      </div>
      );
    }
  }

export default App;
