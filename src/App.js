import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [data_result,setData_result] = useState()
  const [responseform, setresponseform] = useState([])
  const [batuk, setbatuk] = useState(false)
  const [tenggorokan, settenggorokan] = useState(false)
  const [demam, setdemam] = useState(false)
  const [nafas, setnafas] = useState(false)
  const [pusing, setpusing] = useState(false)
  const [diare, setdiare] = useState(false)
  const [lelah, setlelah] = useState(false)
  const [otot, setotot] = useState(false)
  const [dada, setdada] = useState(false)
  const [indra, setindra] = useState(false)

  useEffect(() => {
    getData()
  },[])

  const getData = () =>{
    axios.get('http://localhost:5000/data').then((response) => {
      let data = response.data.data
      setData_result(data)
      console.log(data_result);
    }).catch(error => {
      console.error('Error: '+error);
    })
  }

  function getResponse(){
    let arr = []
    if (batuk){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (tenggorokan){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (demam){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (nafas){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (pusing){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (diare){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (lelah){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (otot){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (dada){
      arr.push(1)
    }else{
      arr.push(0)
    }
    if (indra){
      arr.push(1)
    }else{
      arr.push(0)
    }

    axios.post('http://localhost:5000/calculate',{data : arr}).then((response) => {
      let data = response.data.data
      setresponseform(data)
      console.log(responseform);
    }).catch(error => {
      console.error('Error: '+error);
    })
  }

  function getSymptoms(symptoms){
    let str = ""

    if (symptoms.includes("0")){
      str += "Batuk, "
    }
    if (symptoms.includes("1")){
      str += "Nyeri Tenggorokan, "
    }
    if (symptoms.includes("2")){
      str += "Demam, "
    }
    if (symptoms.includes("3")){
      str += "Sesak Nafas, "
    }
    if (symptoms.includes("4")){
      str += "Pusing Kepala, "
    }
    if (symptoms.includes("5")){
      str += "Diare, "
    }
    if (symptoms.includes("6")){
      str += "Mudah Lelah, "
    }
    if (symptoms.includes("7")){
      str += "Nyeri Otot, "
    }
    if (symptoms.includes("8")){
      str += "Nyeri Dada, "
    }
    if (symptoms.includes("9")){
      str += "Hilang Indra Perasa, "
    }
    

    return str
  }
  
  if (data_result == null) {
    return <>Still loading...</>;
  }

  return (
    <>
    <div className="container-results" >
      <div className="results-header">RESULTS OF ANALYSIS</div>
      <table>
        <tbody>
        <tr>
          <th>Generation</th>
          <th>Accuracy</th>
          <th>No of Attributes</th>
          <th>Attributes</th>
        </tr>
        <tr>
          <td>{parseInt(data_result['0'].no) +1}</td>
          <td>{parseFloat(data_result['0'].bestFSAccuracy).toFixed(6)}</td>
          <td>{data_result['0'].NoOfAttributes}</td>
          <td>{getSymptoms(data_result['0'].bestSelect)}</td>
        </tr>
        <tr>
          <td>{parseInt(data_result['1'].no) +1}</td>
          <td>{parseFloat(data_result['1'].bestFSAccuracy).toFixed(6)}</td>
          <td>{data_result['1'].NoOfAttributes}</td>
          <td>{getSymptoms(data_result['1'].bestSelect)}</td>
        </tr>
        <tr>
          <td>{parseInt(data_result['2'].no) +1}</td>
          <td>{parseFloat(data_result['2'].bestFSAccuracy).toFixed(6)}</td>
          <td>{data_result['2'].NoOfAttributes}</td>
          <td>{getSymptoms(data_result['2'].bestSelect)}</td>
        </tr>
        <tr>
          <td>{parseInt(data_result['3'].no) +1}</td>
          <td>{parseFloat(data_result['3'].bestFSAccuracy).toFixed(6)}</td>
          <td>{data_result['3'].NoOfAttributes}</td>
          <td>{getSymptoms(data_result['3'].bestSelect)}</td>
        </tr>
        <tr>
          <td>{parseInt(data_result['4'].no) +1}</td>
          <td>{parseFloat(data_result['4'].bestFSAccuracy).toFixed(6)}</td>
          <td>{data_result['4'].NoOfAttributes}</td>
          <td>{getSymptoms(data_result['4'].bestSelect)}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div className="container-form">
      <div className="results-header">FORM TESTING</div>
      <div className='form-box'>
        <div className="form">
          <label className="label">Batuk
            <input type="checkbox" onChange={()=>{setbatuk(!batuk)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Nyeri Tenggorokan
            <input type="checkbox" onChange={()=>{settenggorokan(!tenggorokan)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Demam
            <input type="checkbox" onChange={()=>{setdemam(!demam)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Sesak Nafas
            <input type="checkbox" onChange={()=>{setnafas(!nafas)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Pusing Kepala
            <input type="checkbox" onChange={()=>{setpusing(!pusing)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Diare
            <input type="checkbox" onChange={()=>{setdiare(!diare)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Mudah Lelah
            <input type="checkbox" onChange={()=>{setlelah(!lelah)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Nyeri Otot
            <input type="checkbox" onChange={()=>{setotot(!otot)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Nyeri Dada
            <input type="checkbox" onChange={()=>{setdada(!dada)}}/>
            <span className="checkmark"></span>
          </label>
          <label className="label">Hilang Indra Perasa
            <input type="checkbox" onChange={()=>{setindra(!indra)}}/>
            <span className="checkmark"></span>
          </label>
          <input className='button-submit' type="submit" value="Submit" onClick={()=>{getResponse()}} />
        </div>
        <div className='result-form'>
          <table>
            <tbody>
            <tr>
              <th>Generation</th>
              <th>Features</th>
              <th>Prediction</th>
            </tr>
            {responseform.map((data,idx)=>
              <tr key={idx}>
                <td>{idx +1}</td>
                <td>{data.features}</td>
                <td>{data.prediction == 1 && "Positive"}{data.prediction == 0 && "Negative"}{data.prediction == 2 && "Influenza"}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
