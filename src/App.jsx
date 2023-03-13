import './App.css'
import {TextField} from '@mui/material';
import {Stack} from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)
  const [result, setResult] =  useState(0)

  const Calculate = (e) => {
    e.preventDefault()
    if(amount==0 || interest==0 || year==0){
      alert("Please enter a valid number")
    } else{
        let output = parseInt(amount)*parseFloat(interest)*parseFloat(year)/100
         setResult(output)
    }
  }

  const Reset = () => {
    setResult(0)
    window.location.reload()
  }

    return (

        <div className="app">
            <div className="container">
                <div className="title">
                    <h1>Simple Calculator</h1>
                    <p>calculate your simple interest easily</p>
                </div>

                <div className="amount-card">
                    <div className="card-text">
                        <h2>₹ {result}</h2>
                        <p>Total simple interest</p>
                    </div>
                </div>

                <form onSubmit={e => Calculate(e)}>
                    <div className="text-div">
                        <div className="text-input">
                            <TextField onChange={e => setAmount(e.target.value)} className='input-box' id="outlined-basic" label="₹ Principal amount" variant="outlined"/>
                        </div>

                        <div className="text-input">
                            <TextField onChange={e => setInterest(e.target.value)} className='input-box' id="outlined-basic" label="Rate of interest % (p.a)" variant="outlined"/>
                        </div>

                        <div className="text-input">
                            <TextField onChange={e => setYear(e.target.value)} className='input-box' id="outlined-basic" label="Time Period (yr)" variant="outlined"/>
                        </div>
                    </div>

                    <div className="buttons">
                        <Stack direction="row"
                            spacing={2}>
                            <Button type='submit' className='btn' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
                            <Button onClick={Reset} className='btn' style={{color:"black", border:'1px solid black'}} variant="outlined">Reset</Button>
                        </Stack>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default App
