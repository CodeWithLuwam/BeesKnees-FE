import "../style/Tracker.css";
import NaviBar from "./NaviBar";
// import { Table } from 'react-bootstrap'; 
import Table from 'react-bootstrap/Table';



const Tracker = () => {
  
  return <>
  <NaviBar/>
    <Table id="traker-table" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  
  
  

</>;
};

export default Tracker;