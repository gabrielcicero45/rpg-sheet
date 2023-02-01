import React from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
export default function Inventory({ inventory, strength }) {
  let totalWeight = 0;
  inventory.forEach((item) => {
    totalWeight += Object.values(item)[0].weight * item.amount;
  });
  return (
    <table>
      <thead>
        <tr>
          <th className="table__title" colSpan={5}>
            Inventory
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Weight</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => {
          return <InventoryItem key={Object.keys(item)[0]} item={item} />;
        })}
        <tr>
          <td colSpan={2}></td>
          <td>Total Weight: </td>
          <td colSpan={2}>{totalWeight.toFixed(2)}</td>
        </tr>
        <tr>
          <td colSpan={2}></td>
          <td>Weight Status:</td>
          <td colSpan={2}>
            {totalWeight > strength * 2 ? "Overweight" : "Ok"}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
