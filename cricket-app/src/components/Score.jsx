import React, { useState } from 'react'

export default function Score() {
    const [score, setScore] = useState(0);
    const [overs, setOvers] = useState(0);
    const [runRate, setRunRate] = useState(0);
    const [batsman, setBatsman] = useState("Dhoni");
    const [bowler, setBowler] = useState("Shami");
    const [balls,setBalls] = useState(0);

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(0);
    const [fourth, setFourth] = useState(0);
    const [fifth, setFifth] = useState(0);
    const [sixth, setSixth] = useState(0);


    const addRunsToOver = (number)=>{
    console.log(number)
    //   if () {
        
    //   } else if (){
        
    //   }else if (){
        
    //   }else if (){
        
    //   }else if (){
        
    //   }else {
        
    //   }
    }

    return (
        <div>
            <h2>{batsman}</h2>
            <h2>{bowler}</h2>

            <button onClick={addRunsToOver(0)}>0</button>
            <button onClick={addRunsToOver}>1</button>
            <button onClick={addRunsToOver}>2</button>
            <button onClick={addRunsToOver}>3</button>
            <button onClick={addRunsToOver}>4</button>
            <button onClick={addRunsToOver}>6</button>
            <button onClick={addRunsToOver}>Wicket</button>

            <div>
                <h3>Over Table</h3>
                <table>
                    <tr>
                        <th>{first}</th>
                        <th>{second}</th>
                        <th>{third}</th>
                        <th>{fourth}</th>
                        <th>{fifth}</th>
                        <th>{sixth}</th>
                    </tr>
                </table>
            </div>

            <table border={2}>
                <tr>
                    <th>Score</th>
                    <th>Overs</th>
                    <th>Run Rate</th>
                </tr>
                <tr>
                    <td>{score}</td>
                    <td>{overs}</td>
                    <td>{runRate}</td>
                </tr>
            </table>

        </div>
    )
}
