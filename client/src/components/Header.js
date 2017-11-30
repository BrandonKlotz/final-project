import React, { Component } from 'react';
import "font-awesome/css/font-awesome.css";


class Header extends Component {

  render() {

    return(
   		<header className="HeaderBar">
   			<h1>Senti</h1>

				<div className="dropdown">
					<button onClick={this.myFunction.bind(this)} className="dropbtn fa fa-bars fa-lg"></button>

					  <div id="myDropdown" className="dropdown-content">
					    <a href="#">Home</a>
					    <a href="#">About</a>
					    <a href="#">Contact</a>

					  </div>
				</div>
	   		</header>
    );
  }

 myFunction(event) {
    document.getElementById("myDropdown").classList.toggle("show");
};
}



export default Header;
