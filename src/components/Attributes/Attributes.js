import React from "react";

export default function Attributes({ attributes }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="table__title">Attributes</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(attributes).map(([name, value]) => (
          <tr>
            <td className="sheet__item">
              {name}: {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
