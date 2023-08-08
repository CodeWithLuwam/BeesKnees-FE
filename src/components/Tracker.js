import "../style/Tracker.css";
import NaviBar from "./NaviBar";
import { Table } from 'react-bootstrap'; 


const Tracker = () => {
  
  return <>
  <div>
  <NaviBar/>
  
  <div className='p-5'>  
  <Table striped bordered hover>  
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
      <td>John</td>  
      <td>Doe</td>  
      <td>@John</td>  
    </tr>  
    <tr>  
      <td>2</td>  
      <td>Harry</td>  
      <td>Potter</td>  
      <td>@harrypotter</td>  
    </tr>  
    <tr>  
      <td>3</td>  
      <td colSpan={2}>Kylie Jainer</td>  
      <td>@Kylie</td>  
    </tr>  
  </tbody>  
</Table>  
</div> 
</div> 
  </>;
};

export default Tracker;