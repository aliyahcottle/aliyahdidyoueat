import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import {CSSTransition} from 'react-transition-group';
import {resturantData} from './resturants';
import GoogleMap from 'google-map-react';
import {ReactComponent as ReactLogo} from './images/sorry_dunno.svg';


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

    <footer> So, Aliyah likes to eat but hates to make reservations. <i>Aliyah, did you eat</i> is a personal application to test my developer skills and see some friends as an added bonus.</footer>
  
  </div>

    );
  }
}

/* List View - Components include: Custom Refine, Quick Refine, Resturant List */
class ListView extends React.Component {

constructor(props){
  super(props);
  this.state = {
    refineLocation: 'all',  // refine location state. default: all
    refineCategory: 'all', // refine category state. default: all
    refinePrice: 'all' // refine price state. default: $
  };

  this.handleChangeLocation = this.handleChangeLocation.bind(this);
  this.handleChangeCategory = this.handleChangeCategory.bind(this);
  this.handleChangePrice = this.handleChangePrice.bind(this);
}

handleChangeLocation(location){this.setState({refineLocation: location});}

handleChangeCategory(category){this.setState({refineCategory: category});}

handleChangePrice(price){this.setState({refinePrice: price});}
    
render(){  
  return (
    <div class="list_view">

     <CustomRefine onRefineLocation={this.handleChangeLocation}
                   onRefineCategory={this.handleChangeCategory} 
                   onRefinePrice={this.handleChangePrice}
                   location={this.state.refineLocation}
                   category={this.state.refineCategory}
                   price={this.state.refinePrice}/>

      <div class="show-list">

   
        <QuickRefine/>
      
          <Fade left>
            <ResturantList resturants={this.props.resturants} 
                           refineLocation={this.state.refineLocation} 
                           refineCategory={this.state.refineCategory} 
                           refinePrice={this.state.refinePrice} />
          </Fade>

       </div>

    </div>
      );
    }
}

/* Custom Refine Component: Refine by Location, Category or Price Range */
class CustomRefine extends React.Component {

  constructor(props){
    super(props);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);

  }
  
  handleChangeLocation(e){this.props.onRefineLocation(e.target.value);}
  handleChangeCategory(e){this.props.onRefineCategory(e.target.value);}
  handleChangePrice(e){this.props.onRefinePrice(e.target.value);}


  render(){

    const location = this.props.location;
    const category = this.props.category;
    const price = this.props.price;

    return (
    <div id="top">
      <div class="custom-select">
      <p>Refine:</p>
      <div>
        <select name="location-select" class="location-select" onChange={this.handleChangeLocation} value={location}>
          <option value="all">Location</option>
          <option value="brampton">Brampton</option>
          <option value="mississauga">Mississauga</option>
          <option value="milton">Milton</option>
          <option value="oakville">Oakville</option>
          <option value="niagara">Niagara Region</option>
          <option value="toronto">Toronto</option>
          <option value="scarbourough">Scarbourough</option>
        </select>
      </div>
    

      <div>
        <select name="category-select" class="category-select" onChange={this.handleChangeCategory} value={category}>
          <option value="all">Category</option>
          <option value="meat">Meat</option>
          <option value="pizza">Pizza</option>
          <option value="seafood">Seafood</option>
          <option value="tacos">Tacos</option>
          <option value="breakfast">Breakfast</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>


      <div>
        <select name="price-select" class="price-select" onChange={this.handleChangePrice} value={price}>
          <option value="all">Price</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </div>
     
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

      const location = this.props.refineLocation;
      const category = this.props.refineCategory;
      const price = this.props.refinePrice;

      return (
        <div class="resturant_list dark_bg">

          <h1>Food Choices</h1>
  
         {this.props.resturants.filter((resturant) => {

           if (location === 'all' && category === 'all' && price === "all"){
             return (this.props.resturants)
           }
          })
         .map((resturant, index) => {

          console.log(resturant.length);
           if (resturant.length === 0){
             return <ReactLogo/>
 
           } else return (
          
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
        )})}
       
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
  
  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  const showHideClassName = show ? 'modal display-block': 'modal display-none';

   return (

    <CSSTransition
    in={show}
    timeout={300}
    classNames="alert">
 
     
    <div class={showHideClassName}>

      <div class="map_section">

   
        <div class="resturant_details">
              
               <div class="detail_container">

                <h1>{resturantName}</h1>
                <h3>{resturantCategory}</h3>

                <p>{resturantDescription}</p>
              
                <a href={resturantURL} target="_blank" rel="noreferrer">{resturantName}</a>
                
              </div>
              
                <div class="map" style={{ height: '100vh', width: '100vw' }}>
              <GoogleMap
                bootstrapURLKeys={{key: 'AIzaSyDM7yM72S7w7OPdmnKiCOlrJyY5rwBRN1o'}}
                defaultCenter={defaultProps.center}
                zoom={11}>
              </GoogleMap>
            </div>

                <div class="resturant_buttons">
                  <button>Text Aliyah</button>
                  <button>Book Table</button>
                </div>
                
                <a href={lastResturant} onClick={handleClose}><button>Find more food</button></a>

          </div>  
      </div>


          
      </div>

    </CSSTransition>

   );
}


export default App;
