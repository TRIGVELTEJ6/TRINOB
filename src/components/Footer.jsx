import React from "react";

export default function Footer(){
  return (
    <footer style={{ marginTop: 40, padding: 20, background: "#111827", color: "#fff" }}>
      <div className="container" style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Trinob Technologies — built with ❤️
      </div>
    </footer>
  );
}
