import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    showSearchBar: true
  };

  // logoutWithHide = () => {
  //   return this.props.logout, this.props.hide;
  // }

  hideMenuOnClick = () => {};

  render() {
    const { user, logout, isLoggedIn } = this.props;
    
    return (
      <nav className="navbar" id="navBar" role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to={"/"} className="nav-btn" onClick={this.props.show}>
              <li>Home</li>
            </Link>

            <Link to={"#"} className="nav-btn" onClick={this.props.show}>
              <li>Categories</li>
            </Link>

            {isLoggedIn && user.isAdmin ? (
              <>
                <Link
                  to={"/adminPage"}
                  className="nav-btn"
                  onClick={this.props.show}
                >
                  <li>Admin Page</li>
                </Link>

                <Link
                  to={"/adminAddProduct"}
                  className="nav-btn"
                  onClick={this.props.show}
                >
                  <li>Add Prouct</li>
                </Link>

                <p>username: {user.username}</p>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link
                  to={"/profilePage"}
                  className="nav-btn"
                  onClick={this.props.show}
                >
                  <li>Profile</li>
                </Link>
              </>
            )}

            {isLoggedIn && !user.isAdmin ? (
              <>
                <p>username: {user.username}</p>
                <button onClick={logout}>Logout</button>

                <Link
                  to={"/myCartPage"}
                  className="nav-btn"
                  onClick={this.props.show}
                >
                  <h4>MyCartPage</h4>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="navbar-button" onClick={this.props.hide}>
                    Login
                  </button>{" "}
                </Link>
                <br />
                <Link to="/signup">
                  <button className="navbar-button" onClick={this.props.hide}>
                    Sign Up
                  </button>{" "}
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default withAuth(Navbar);

//--------------SAFE NAVBAR BELOW THIS LINE ------------
// -----------------------------------------------------

// class Navbar extends Component {
//   state = {
//     showSearchBar: true
//   }

//   // logoutWithHide = () => {
//   //   return this.props.logout, this.props.hide;
//   // }

//   render() {
//     const { user, logout, isLoggedIn } = this.props;

//     return (
//       <nav className="navbar" id="navBar" role="navigation">

//         <div id="menuToggle">
//           <input type ="checkbox" />
//           <span></span>
//           <span></span>
//           <span></span>

//           <ul id="menu">

//             <Link to={"/"} className="nav-btn" onClick={this.props.show}>
//               <li>Home</li>
//             </Link>

//             <Link to={"/profilePage"} className="nav-btn" onClick={this.props.show}>
//               <li>Profile</li>
//             </Link>

//             <Link to={"#"} className="nav-btn" onClick={this.props.show}>
//               <li>Categories</li>
//             </Link>

//             <Link to={"/myCartPage"} className="nav-btn" onClick={this.props.show}>
//               <h4>MyCartPage</h4>
//             </Link>

//             {isLoggedIn ? (
//               <>
//                 <p>username: {user.username}</p>
//                 <button onClick={logout}>Logout</button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login">
//                   <button className="navbar-button" onClick={this.props.hide}>Login</button>{" "}
//                 </Link>
//                 <br />
//                 <Link to="/signup">
//                   <button className="navbar-button" onClick={this.props.hide}>Sign Up</button>{" "}
//                 </Link>
//               </>
//             )}

//           </ul>

//         </div>
//       </nav>
//     );
//   }
// }

// export default withAuth(Navbar);

// ---------IF / ELSE NAVBAR FAILED BELOW--------------
// -----------------------------------------------------

{
  /* <nav className="navbar" id="navBar" role="navigation">
        
<div id="menuToggle">
  <input type ="checkbox" />
  <span></span>
  <span></span>
  <span></span>

  <ul id="menu">

    <Link to={"/"} className="nav-btn" onClick={this.props.show}>
      <li>Home</li>
    </Link>

    <Link to={"/profilePage"} className="nav-btn" onClick={this.props.show}>
      <li>Profile</li>
    </Link>

    <Link to={"#"} className="nav-btn" onClick={this.props.show}>
      <li>Categories</li>
    </Link>


    {
      if (isLoggedin) {
        return ( 
        (  
        <>
          <p>username: {user.username}</p>
          <button onClick={logout}>Logout</button>
        </>
        )
        if ({isAdmin}) {
          <>
            <Link to{"/"}>
              <li>Admin Page</li>
            </Link>
          </>
        }

        else if ({!isAdmin}) {
          <>
            <Link to={"/profilePage"} className="nav-btn" onClick={this.props.show}>
            <li>Profile</li>
            </Link>
          </>
        } )          
      }

      else {
        <>
          <Link to="/login">
            <button className="navbar-button" onClick={this.props.hide}>Login</button>{" "}
          </Link>
          <br />
          <Link to="/signup">
            <button className="navbar-button" onClick={this.props.hide}>Sign Up</button>{" "}
          </Link>
        </>
      }
   }



    <Link to={"/myCartPage"} className="nav-btn" onClick={this.props.show}>
      <h4>MyCartPage</h4>
    </Link>          

  </ul>    

</div>
</nav> */
}
