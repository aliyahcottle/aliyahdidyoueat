import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';

const resturants = [
  {"name": "Cabanos", "category": "meats", "website": "http://cabanos.ca", "bg-pic": "" },
  {"name": "Chica's Nashville Hot Chicken", "category": "meats", "website": "https://www.chicaschicken.net/order/", "bg-pic": "" },
  {"name": "Kansas King", "category": "meats", "website": "https://www.kansasking.com/menus", "bg-pic": "" },
  {"name": "XXI Chophouse", "category": "meats", "website": "https://www.xxichophouse.com/dinner", "bg-pic": "" },
  {"name": "Wow! Wing House", "category": "meats", "website": "http://www.wowwinghouse.com/morningside-milner/", "bg-pic": "" },
  {"name": "Top Gun Burger", "category": "meats", "website": "http://www.topgunburgerto.com/menu/", "bg-pic": "" },
  {"name": "The Captain's Boil", "category": "seafood", "website": "https://thecaptainsboil.com/locations/", "bg-pic": "" },
  {"name": "Goodfellas Wood Stove Pizza", "category": "pizza", "website": "", "bg-pic": "" },
  {"name": "Papa Giuseppes", "category": "pizza", "website": "", "bg-pic": "" },
  {"name": "KyKy Kookies", "category": "dessert", "website": "https://www.kykykookies.com/", "bg-pic": "" },
  {"name": "Holy Shakes", "category": "food-truck", "website": "https://416-food-truck-company.square.site/", "bg-pic": "" },
  {"name": "August 8", "category": "seafood", "website": "http://august8.ca/", "bg-pic": "" },
  {"name": "Kaka", "category": "seafood", "website": "http://kakaallyoucaneat.ca/", "bg-pic": "" },
  {"name": "Barsa", "category": "tapas", "website": "https://barsataberna.com/", "bg-pic": "" },
  
]; 

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

      <div class="custom-select">

        <p>Refine:</p>

        <select class="location-select">
          <option value="0">Location:</option>
          <option value="1">Brampton</option>
          <option value="2">Mississauga</option>
          <option value="3">Milton</option>
          <option value="4">Oakville</option>
          <option value="5">Niagara Region</option>
          <option value="6">Toronto</option>
          <option value="7">Scarbourough</option>
        </select>


        <select class="category-select">
          <option value="0">Category:</option>
          <option value="1">Meat</option>
          <option value="2">Pizza</option>
          <option value="3">Seafood</option>
          <option value="4">Tacos</option>
          <option value="5">Breakfast</option>
          <option value="6">Drinks</option>
        </select>

        <select class="price-select">
          <option value="0">Price Range:</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
      </div>

    <div class="show-list">

    <QuickRefine />
      
      <Fade left>
        <ListComponent />

      </Fade>

    </div>

    </div>
      );
    }
  }

class ListComponent extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCard: false,
      resturantName: null,
      resturantCategory: null
    };

    this.displayResturantCard = this.displayResturantCard.bind(this);
  }

    componentWillUnmount() {

      this.setState((currentState) => ({
        showCard: false
      }));
    }
    
      displayResturantCard(name, category){


        this.setState((currentState) => ({
          showCard: true,
          resturantName: name,
          resturantCategory: category

          }));
      }
      
      render(){

       if (this.state.showCard){
         return  <Fade up><ResturantCard restName={this.state.resturantName} restCat={this.state.resturantCategory}/></Fade>;
       }

      return (
        <div>
         {resturants ? resturants.filter(resturants => resturants.category === 'meats' || 'seafood' || 'dessert').map(resturant => {
          
          return (
           <div class="resturant_item" key={resturant.index}>
            <div class="overlay">
             <div class="resturant_category"><p>{resturant.category}</p></div>
             <div class="resturant_name"><p><a onClick={() => this.displayResturantCard()}>{resturant.name}</a></p></div>
            </div>   
           </div>
           );
          })
          : "Loading..."}
        </div>
      );
    }
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

  class ResturantCard extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        cardClosed: false
      };

      this.closeCard = this.closeCard.bind(this);
    }

    closeCard(){
      this.setState((currentState) => ({
        cardClosed: true
        }));
    }

    render(){
      
      if (this.state.cardClosed){
        return <Fade><ListComponent /> </Fade>;
      }

      return (
        <div class="resturant_card">
          
          <div class="close_window"><button onClick={this.closeCard}>X</button></div>

          <div class="resturant_details">

         <h1>{this.state.resturantName}</h1>
            <h3>Category</h3>
            <p>Aliyah's take: here I put the information that I would want my date or 
              friends to hear about this place and my fav things about it</p>
            <p>Website</p>
            <p>Embed map here</p>

            <button>Date?</button>

          </div>
          
        </div>
      );
    }
  }

export default App;
