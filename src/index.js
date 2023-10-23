import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { fontSize: "48px", color: "red" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast react pizza co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="focaccia" />
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

function Footer() {
  const Hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen =
    Hour >= openHour && Hour <= closeHour
      ? "We are currently Open"
      : "We are currently closed";
  console.log(isOpen);
  // return React.createElement("footer", null, "We're currently open!");
  return <footer className="footer">{isOpen}</footer>;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
