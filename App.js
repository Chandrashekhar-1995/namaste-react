import React from "react";
import ReactDOM from 'react-dom/client';
import logo from './static/logo.svg';
import user from './static/user.png';

//1.- Create a nested Header Element using React.createElement(h1,h2,h3 inside a div with class "title).

// const heading = React.createElement("div", {class:"title"}, 
//     React.createElement("h1", {}, "This is h1"),
//     React.createElement("h2", {}, "This is h2"),
//     React.createElement("h3", {}, "This is h3"),);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 

//   2.- Create a same Element using JSX.

//     const heading = <div className="title">
//         <h1>Hi this is h1 tag</h1>
//         <h2>Hi this is h2 tag</h2>
//         <h3>Hi this is h3 tag</h3>
//     </div>

//     const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 


    //   3.- Create a functional Component of the same with JSX.

//  const Header = () => {
//    return(
//       <div className="title">
//         <h1>Hi this is h1 tag</h1>
//         <h2>Hi this is h2 tag</h2>
//         <h3>Hi this is h3 tag</h3>
//      </div>
//    )
//  }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>); 


// 5.- Composition of the Component  (Add a Component inside another).

// const One = () => ( <h1>First Component </h1>);


//  const Header = () => {
//    return(
//       <div>
//          <div>
//             <One/>
//          </div>
//          <div>
//             <h1>Hi this is h1 tag</h1>,
//              <h2>Hi this is h2 tag</h2>,
//              <h3>Hi this is h3 tag</h3>,
//          </div>
//      </div>
//    )
//  }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);

// 6.- Create a header Component From Scrach using Functional Component with JSX.
//   7.- Add A Logo on left.
//   8.- Add search bar in middle.
//   9.- Add User icon on right
//   10.- Add css to make it look nice.

const Header = () => {
   return (
     <div>
       <div className="header">
         <h1>Shekhar Mobile Shop</h1>
       </div>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <div>
           <img src={logo} alt="logo" />
         </div>
         <div style={{ flex: 1, textAlign: 'center' }}>
           <input type="text" placeholder="Search" />
         </div>
         <div>
           <img src={user} alt="user" />
         </div>
       </div>
     </div>
   );
 };
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Header />);

 

// day 4 make a new reposratery name Food Flow
Link = "https://github.com/Chandrashekhar-1995/Food-Flow"