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
           <div class="resturant_item" key={resturant.index}>
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


    constructor(props){
      super(props);
      this.state = {
        meatCategory: false,
        pizzaCategory: false,
        seafoodCategory: false,
        tacoCategory: false,
        breakfastCategory: false,
        drinksCategory: false
      };
    }

    ToggleCategory(category){
      
     switch (category) {
       case 'meat': 
        this.setState((currentState) => ({
        meatCategory: !currentState.meatCategory,
        }));
        break;

        case 'pizza': 
        this.setState((currentState) => ({
        pizzaCategory: !currentState.pizzaCategory,
        }));
        break;

        case 'seafood': 
        this.setState((currentState) => ({
        seafoodCategory: !currentState.seafoodCategory,
        }));
        break;
        
        case 'taco': 
        this.setState((currentState) => ({
        tacoCategory: !currentState.tacoCategory,
        }));
        break;

        case 'breakfast': 
        this.setState((currentState) => ({
        breakfastCategory: !currentState.breakfastCategory,
        }));
        break;

        case 'drinks': 
        this.setState((currentState) => ({
        drinksCategory: !currentState.drinksCategory,
        }));
        break;

     }  
   }
    render(){
      return (
        <div class="quick_refine">
  
        
        <button onClick={ () => this.ToggleCategory('meat')} class={ this.state.meatCategory ? "meat-on" : "quick_button"}>
          <span class="emoji">🥩</span>
        </button>
        <button onClick={ () => this.ToggleCategory('pizza')} class={ this.state.pizzaCategory ? "pizza-on" : "quick_button"}>
          <span class="emoji">🍕</span>
        </button>
        <button onClick={ () => this.ToggleCategory('seafood')} class={ this.state.seafoodCategory ? "seafood-on" : "quick_button"}>
          <span class="emoji">🍣</span>
        </button>
        <button onClick={ () => this.ToggleCategory('taco')} class={ this.state.tacoCategory ? "tacos-on" : "quick_button"}>
          <span class="emoji">🌮</span>
        </button>
        <button onClick={ () => this.ToggleCategory('breakfast')} class={ this.state.breakfastCategory ? "breakfast-on" : "quick_button"}>
          <span class="emoji">🥞</span>
        </button>
        <button onClick={ () => this.ToggleCategory('drinks')} class={ this.state.drinksCategory ? "drinks-on" : "quick_button"}>
          <span class="emoji">🍻</span>
        </button>
  
      </div>
      );
    }
  }

export default App;
