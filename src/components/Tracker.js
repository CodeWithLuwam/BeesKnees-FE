import "../style/Tracker.css";
import Table from 'react-bootstrap/Table';



const Tracker = ({exercisesData, getAllExercises}) => {
  
  const exerciseInfo = () => {
    return exercisesData.map((exerciceData, index) => (
      
      <tr
        key={index}
      >
        <td>{exerciceData.name}</td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
        <td className="input-text"><input type="text" ></input></td>
      </tr>
    ));
  };

  return <>
    <Table className="traker-table" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
        </tr>
      </thead>
      <tbody>
        {exerciseInfo()}
      </tbody>
    </Table>

    <Table className="traker-table2" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
        </tr>
      </thead>
      <tbody>
        {exerciseInfo()}
      </tbody>
    </Table>

    <Table className="traker-table" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
        </tr>
      </thead>
      <tbody>
        {exerciseInfo()}
      </tbody>
    </Table>
    <Table className="traker-table2" striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
          <th>Date</th>
          <th>Sets</th>
          <th>Reps/Mins</th>
        </tr>
      </thead>
      <tbody>
        {exerciseInfo()}
      </tbody>
    </Table>



</>;
};

export default Tracker;