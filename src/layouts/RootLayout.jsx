import { Outlet, NavLink } from "react-router-dom";

export function click_dice() {
  setTimeout(()=> {
    document.getElementById("roll_them").click();
 }
 ,100);
  
}

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          {/*
          <h1>Jobarouter</h1>          
          */}
          <NavLink to="/">🏡</NavLink>
          {/* <NavLink to="about">👦</NavLink>
          <NavLink to="buttons">🎛️</NavLink>*/}
          <NavLink to="buttons3d">🛞</NavLink>
          <NavLink to="shop">🛒</NavLink>          
          <NavLink to="gallery">😺</NavLink>          
          <NavLink to="dice" onClick={click_dice}>🎲</NavLink>          
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}