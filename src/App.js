import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import {CSSTransition} from 'react-transition-group';
import {resturantData} from './resturants';
import GoogleMap from 'google-map-react';


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

    <ListView resturants={resturantData}/>

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
    <div id="top">
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

      this.ToggleCategory = this.ToggleCategory.bind(this);
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

        default:
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
      show: false, // determines weather resturant card shows
      currentName: '', // current resturant name
      currentCategory: '', // current resturant category
      currentWebsite: '', // current resturant website
      currentTake: '', // current resturant Aliyahs take
      currentBg: '', // currrent resturant background picture
      location: {  // current resturant location
        lat: 37.42216,
        lng: -122.08427
      },
      lastResturant: '', // scroll down to the last resturant last clicked on
    }; 
  };

  showModal = (id, name, category, website, description, newLocation) =>{
    this.setState({ show: true, 
                    currentName: name, 
                    currentCategory: category,
                    currentWebsite: website,
                    currentTake: description,
                    location: newLocation,
                    lastResturant: '#' + id
                  });   
  }

  hideModal = () => {
    this.setState({ show: false});
  }
      render(){
      return (
        <div>
        
         {this.props.resturants.map((resturant, index) =>
          (
          <div id={resturant.id} key={index}>
           <div class="resturant_item">
            <div class="overlay">
             <div class="resturant_category"><p>{resturant.category}</p></div>
             <div class="resturant_name">
               <p>
                 <a href="#top" onClick={(e) => 
                    this.showModal(resturant.id,
                                   resturant.name, 
                                   resturant.category,
                                   resturant.website,
                                   resturant.description, resturant.location)}>{resturant.name}</a>
                 </p>
              </div>
            </div>   
           </div>
          </div>

         
           ))}  

            <ResturantCard 
                show={this.state.show} 
                handleClose={this.hideModal} 
                resturantName={this.state.currentName}
                resturantCategory={this.state.currentCategory}
                resturantURL={this.state.currentWebsite}
                resturantDescription={this.state.currentTake}
                location={this.state.location}
                lastResturant={this.state.lastResturant}>
            </ResturantCard>        
        </div>

        
      );
    }
}

/* Resturant Card Component: Generated card for restuant list */
const ResturantCard = ({ handleClose, show, resturantName, resturantCategory, resturantURL, resturantDescription, location, lastResturant}) => {
   
  const showHideClassName = show ? 'modal display-block': 'modal display-none';

   return (

    <CSSTransition
    in={show}
    timeout={300}
    classNames="alert">
 
     
    <div class={showHideClassName}>

      <div class="map_section">

        <div class="map" style={{ height: '100vh', width: '100vw' }}>
          <GoogleMap
            bootstrapURLKeys={{key: 'AIzaSyDM7yM72S7w7OPdmnKiCOlrJyY5rwBRN1o'}}
            defaultCenter={location}
            zoom={11}>
          </GoogleMap>
        </div>

        <div class="resturant_details">
              
               <a class="exit" href={lastResturant} onClick={handleClose}><button>X</button></a>

               <div class="detail_container">

                <h1>{resturantName}</h1>
                <h3>{resturantCategory}</h3>

                <p>{resturantDescription}</p>
              
                <a href={resturantURL} target="_blank" rel="noreferrer">{resturantName}</a>
                
                <div id="map"></div>

                <div class="resturant_buttons">
                  <button>Text Aliyah</button>
                  <button>Book Table</button>
                </div>

              </div>
          </div>  
      </div>


          
      </div>

    </CSSTransition>

   );
}


export default App;
