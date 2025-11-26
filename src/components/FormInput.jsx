import React from "react";

export default function FormInput({ label, name, type = "text", value, onChange, required=false, textarea=false }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: "block", marginBottom: 6 }}>{label}</label>
      {textarea ? (
        <textarea name={name} value={value} onChange={onChange} required={required} style={{ minHeight: 100 }} />
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} required={required}/>
      )}
    </div>
  );
}
