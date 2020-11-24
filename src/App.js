import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import {CSSTransition} from 'react-transition-group';

const RESTURANTS = [
  {"id": 1, "name": "Cabanos", "category": "meats", "website": "http://cabanos.ca", "bg-pic": "" },
  {"id": 2, "name": "Chica's Nashville Hot Chicken", "category": "meats", "website": "https://www.chicaschicken.net/order/", "bg-pic": "" },
  {"id": 3, "name": "Kansas King", "category": "meats", "website": "https://www.kansasking.com/menus", "bg-pic": "" },
  {"id": 4, "name": "XXI Chophouse", "category": "meats", "website": "https://www.xxichophouse.com/dinner", "bg-pic": "" },
  {"id": 5, "name": "Wow! Wing House", "category": "meats", "website": "http://www.wowwinghouse.com/morningside-milner/", "bg-pic": "" },
  {"id": 6, "name": "Top Gun Burger", "category": "meats", "website": "http://www.topgunburgerto.com/menu/", "bg-pic": "" },
  {"id": 7, "name": "The Captain's Boil", "category": "seafood", "website": "https://thecaptainsboil.com/locations/", "bg-pic": "" },
  {"id": 8, "name": "Goodfellas Wood Stove Pizza", "category": "pizza", "website": "", "bg-pic": "" },
  {"id": 9, "name": "Papa Giuseppes", "category": "pizza", "website": "", "bg-pic": "" },
  {"id": 10, "name": "KyKy Kookies", "category": "dessert", "website": "https://www.kykykookies.com/", "bg-pic": "" },
  {"id": 11, "name": "Holy Shakes", "category": "food-truck", "website": "https://416-food-truck-company.square.site/", "bg-pic": "" },
  {"id": 12, "name": "August 8", "category": "seafood", "website": "http://august8.ca/", "bg-pic": "" },
  {"id": 13, "name": "Kaka", "category": "seafood", "website": "http://kakaallyoucaneat.ca/", "bg-pic": "" },
  {"id": 14, "name": "Barsa", "category": "tapas", "website": "https://barsataberna.com/", "bg-pic": "" },
  
]; 


/* Aliyah, Did You Eat Entry Point */
class App extends React.Component {

  render(){
    return (
      <div class="container">
  
          <header>
            <i class="fas fa-bars"></i>
            <h1>Aliyah, did you eat?</h1>
            <i class="far fa-map"></i>
          </header>

    <ListView resturants={RESTURANTS}/>

    <footer> Aliyah Cottle </footer>
  
  </div>

    );
  }
}

/* List View - Components include: Custom Refine, Quick Refine, Resturant List */
class ListView extends React.Component {
    
render(){  
  return (
    <div class="list_view">

     <CustomRefine />

     <button>Pick Something Nice For Us?</button>

      <div class="show-list">

        <QuickRefine />
      
          <Fade left>
            <ResturantList resturants={this.props.resturants} />
          </Fade>

       </div>

    </div>
      );
    }
}

/* Custom Refine Component: Refine by Location, Category or Price Range */
class CustomRefine extends React.Component {

  render(){
    return (
      <div class="custom-select">

      <p>Refine:</p>

      <select class="location-select">
        <option value="0">Location</option>
        <option value="1">Any</option>
        <option value="2">Brampton</option>
        <option value="3">Mississauga</option>
        <option value="4">Milton</option>
        <option value="5">Oakville</option>
        <option value="6">Niagara Region</option>
        <option value="7">Toronto</option>
        <option value="8">Scarbourough</option>
      </select>


      <select class="category-select">
        <option value="0">Category</option>
        <option value="1">Any</option>
        <option value="2">Meat</option>
        <option value="3">Pizza</option>
        <option value="4">Seafood</option>
        <option value="5">Tacos</option>
        <option value="6">Breakfast</option>
        <option value="7">Drinks</option>
      </select>

      <select class="price-select">
        <option value="0">Price Range</option>
        <option value="1">Any</option>
        <option value="2">$</option>
        <option value="3">$$</option>
        <option value="4">$$$</option>
      </select>
      
    </div>


    );
  }
}

/* Quick Refine Component: After list is generated, further and quickly add or take away more categories */
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

/* Resturant List Component: Generated list of resturant choices */
class ResturantList extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      show: false
    };
  }


  showModal = () =>{
    this.setState({ show: true});
    
  }

  hideModal = () => {
    this.setState({ show: false});
  }
      render(){
      return (
        <div>
        
         {this.props.resturants.map((resturant, index) =>
          (
           <div class="resturant_item" key={index}>
            <div class="overlay">
             <div class="resturant_category"><p>{resturant.category}</p></div>
             <div class="resturant_name"><p><a onClick={(resturant) => this.showModal(resturant)}>{resturant.name}</a></p></div>
            </div>   
           </div>

         
           ))}  

            <ResturantCard show={this.state.show} handleClose={this.hideModal} children={this.props.resturants}></ResturantCard>        
        </div>

        
      );
    }
}

/* Resturant Card Component: Generated card for restuant list */
const ResturantCard = ({ handleClose, show, children}) => {
   const showHideClassName = show ? 'modal display-block': 'modal display-none';

   return (

    <CSSTransition
    in={show}
    timeout={300}
    classNames="alert">
 
     
      <div class={showHideClassName}>
          
        <div class="close_window"><button onClick={handleClose}>X</button></div>
    
          <div class="resturant_details">
  
           <h1>Resturant Name</h1>
              <h3>Category</h3>
              <p>Aliyah's take: here I put the information that I would want my date or 
                friends to hear about this place and my fav things about it</p>
              <p>Website</p>
              <p>Embed map here</p>
  
              <button>Date?</button>
  
          </div>
            
      </div>

    </CSSTransition>

   );
}


export default App;
