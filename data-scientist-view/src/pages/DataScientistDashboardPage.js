
import './DataScientistDashboardPage.scss';
import { useEffect, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const providerOptions = {};

function DataScientistDashboardPage() {

  const [code, setCode] = useState(
    `import banana

  class Monkey:
    # Bananas the monkey can eat.
    capacity = 10
    def eat(self, n):
        """Make the monkey eat n bananas!"""
        self.capacity -= n * banana.size

    def feeding_frenzy(self):
        self.eat(9.25)
        return "Yum yum"
    `
  );

  useEffect(() => {


  });

  const uploadModel = async () => {
    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
      }),
    });
    const data = await response.json();
    console.log("uploadModel", data);
  }

  const saveModel = async () => {
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
      }),
    });
    const data = await response.json();
    console.log("saveModel", data);
  }

  const testModel = async () => {
    const response = await fetch('/api/submitJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
      }),
    });
    const data = await response.json();
    console.log("submitJob", data);
  };

  const submitJob = async () => {
    const response = await fetch('/api/submitJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
      }),
    });
    const data = await response.json();
    console.log("submitJob", data);
  };

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
              <CodeEditor
                value={code}
                language="py"
                placeholder="Please enter Python code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                  fontSize: 12,
                  backgroundColor: "#1a1a1c;",
                  fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
              />
            </div>
            <div className='DataScientistDashboardPage__BtnsWrapper'>
              <div className='DataScientistDashboardPage__leftBtns'>
                <button 
                  className='DataScientistDashboardPage__uploadBtn DataScientistDashboardPage__actionBtn'
                  onClick={() => uploadModel()}
                >
                  Upload
                </button>
                <button 
                  className='DataScientistDashboardPage__saveBtn DataScientistDashboardPage__actionBtn'
                  onClick={() => saveModel()}
                  >
                  Save
                </button>
              </div>
              <div className='DataScientistDashboardPage__rightBtns'>
                <button 
                  className='DataScientistDashboardPage__uploadBtn DataScientistDashboardPage__actionBtn'
                  onClick={() => testModel()}
                >
                  Test
                </button>
                <button 
                  className='DataScientistDashboardPage__submitJobBtn DataScientistDashboardPage__actionBtn'
                  onClick={() => submitJob()}
                  >
                  Submit Job
                </button>
              </div>

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
