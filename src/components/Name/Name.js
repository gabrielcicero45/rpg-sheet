import React from "react";

export default function Name({ name,surname }) {
  return (
    <div className="sheet__item">
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
    </div>
  );
}
