import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
//import logo from "/logo.png";

// export default function Navbar() {
//   const loc = useLocation();
//   return (
//     <header style={{ background: "#0f1724", color: "white", padding: "12px 0", position: "sticky", top: 0, zIndex: 50 }}>
//       <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <Link to="/" style={{ color: "white", fontWeight: 700, fontSize: 18 }}>Trinob Technologies</Link>

//         <nav>
//           <Link className="navlink" to="/">Home</Link>
//           <Link className="navlink" to="/careers">Careers</Link>
//           <Link className="navlink" to="/about">About Us</Link>
//           <Link className="navlink" to="/admin" style={{ color: "#fde047" }}>Admin</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/home")} style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "8px" }}>
        {/* <img src={logo} alt="Trinob Logo" className="logo" style={{ width: "32px", height: "32px" }} /> */}
        <span>Trinob Technologies</span>
      </div>
      <div className="navbar-right">
        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
        <NavLink to="/careers" className={({ isActive }) => isActive ? "active" : ""}>Careers</NavLink>
        <NavLink to="/admin" className={({ isActive }) => isActive ? "active" : ""}>Admin</NavLink>
      </div>
    </div>
  );
}