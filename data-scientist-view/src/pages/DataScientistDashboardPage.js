
import './DataScientistDashboardPage.scss';
import { useEffect, useState } from 'react';


const providerOptions = {};

function DataScientistDashboardPage() {
  useEffect(() => {

  });

  return (
    <div className="DataScientistDashboardPage">
      <div className="DataScientistDashboardPage__inner">
        <div className='DataScientistDashboardPage__leftSide'>
          <div className='DataScientistDashboardPage__ideContainer'>
            <div className='DataScientistDashboardPage__tabs'>
              <div className='DataScientistDashboardPage__tab'>
                heimdall.py
              </div>
              <div className='DataScientistDashboardPage__tab'>
                nb.ipynb
              </div>
              <button className='DataScientistDashboardPage__addNewTabBtn'>+</button>
            </div>
            <div className='DataScientistDashboardPage__codeEditor'>

            </div>

          </div>
        </div>
        <div className='DataScientistDashboardPage__rightSide'>

          <div className='DataScientistDashboardPage__tabs'>
            <div className='DataScientistDashboardPage__tab'>
              Patients
            </div>
            <div className='DataScientistDashboardPage__tab'>
              Hospitals
            </div>
            <div className='DataScientistDashboardPage__tab'>
              Deaths
            </div>
            <button className='DataScientistDashboardPage__addNewTabBtn'>+</button>
          </div>
          <div className='DataScientistDashboardPage__tables'>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Age</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">B12 Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>34</td>
                  <td>Jersey City</td>
                  <td>NJ</td>
                  <td>89</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Johnson</td>
                  <td>28</td>
                  <td>Boise</td>
                  <td>ID</td>
                  <td>120</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>Bird</td>
                  <td>39</td>
                  <td>Boston</td>
                  <td>MA</td>
                  <td>300</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>



    </div>
  );
}

export default DataScientistDashboardPage;
