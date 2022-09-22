import React from "react";
import { Table } from "reactstrap";

export default function ItemListContainer({ greeting, itemNames }) {
  return (
    <div>
      <h2 > Hola bienvenida {greeting} </h2>
      
      <Table className="table me-6 ms-2">
        <thead>
          <tr>
            {itemNames.map((item, row) => {
              return <th key={row}> {item.name} </th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
