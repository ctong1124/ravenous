import React from 'react';
import ReactDOM from 'react-dom';
import './Business.css';

let business2 = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business2.imageSrc} alt=''/>
        </div>
        <h2>{business2.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business2.address}</p>
            <p>{business2.city}</p>
            <p>{business2.state} {business2.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business2.category}</h3>
            <h3 className="rating">{business2.rating} stars</h3>
            <p>{business2.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    )
  }
};

// class Business extends React.Component {
//   render() {
//     return (
//       <div className="Business">
//         <div className="image-container">
//           <img src={this.props.business.imageSrc} alt=''/>
//         </div>
//         <h2>{this.props.business.name}</h2>
//         <div className="Business-information">
//           <div className="Business-address">
//             <p>{this.props.business.address}</p>
//             <p>{this.props.business.city}</p>
//             <p>{this.props.business.state} {this.props.business.zipCode}</p>
//           </div>
//           <div className="Business-reviews">
//             <h3>{this.props.business.category}</h3>
//             <h3 className="rating">{this.props.business.rating} stars</h3>
//             <p>{this.props.business.reviewCount} reviews</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// };


export default Business;
