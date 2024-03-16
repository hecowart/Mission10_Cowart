import { useEffect, useState } from 'react';
import { Bowlers } from '../types/Bowlers';

function BowlerLeagueList() {
  const [data, setData] = useState<Bowlers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const rsp = await fetch('http://localhost:5118/Bowling');
      const f = await rsp.json();
      setData(f);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowling League Table</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {`${f.bowlerFirstName} ${f.bowlerMiddleInit ? f.bowlerMiddleInit + '. ' : ''}${f.bowlerLastName}`}{' '}
              </td>
              <td>{f.teamName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerLeagueList;
