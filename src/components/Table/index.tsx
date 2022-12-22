import { Table } from 'react-bootstrap';

export default function NoticesAndStickyNotes() {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          {Array.from({ length: 7 }).map((_, index) => (
            <th key={index} style={{ backgroundColor: '#e7e7e7' }}>
              Coluna {index}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          {Array.from({ length: 6 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          {Array.from({ length: 6 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          {Array.from({ length: 6 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}
