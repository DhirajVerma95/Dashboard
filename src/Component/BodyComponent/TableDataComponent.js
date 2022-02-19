import React from 'react'
import {Table} from 'react-bootstrap';
const TableDataComponent = () => {

  const   users = [
                {recentProject : 'Callabe Private Co.' , created : 'Wec-12-2021',
                 reporter : 'christain', due : 'Wec-12-2021', state : 'Progress'},
                 {recentProject : 'Camber Card' , created : 'Thu-05-2021',
                 reporter : 'Arthur Cook', due : 'Thu-05-2021', state : 'Open'},
                 {recentProject : 'Target' , created : 'Fri-10-2021',
                 reporter : 'Evelyn Tucker', due : 'Fri-10-2021', state : 'Progress'},
                 {recentProject : 'Gramma Limt' , created : 'Sat-2-2021',
                 reporter : 'Donald Curtis', due : 'Wec-12-2021', state : 'Open'}
    ];
  return (
    <div className="App">
        <div className='tableContainer'>
            <Table striped bordered hover variant='dark'>
                <tbody>
                <tr>
                    <td>RecentProject</td>
                    <td>Created</td>
                    <td>Reporter</td>
                    <td>Due</td>
                    <td>State</td>
                </tr>
                {
                    users.map((item, index) =>
                        <tr key={index}>
                            <td>{item.recentProject}</td>
                            <td>{item.created}</td>
                            <td>{item.reporter}</td>
                            <td>{item.due}</td>
                            <td>{item.state}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
            </div>
        </div>
)
                }

export default TableDataComponent