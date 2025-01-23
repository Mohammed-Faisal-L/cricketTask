import React, { useState } from 'react'

export default function Score() {
    let [score, setScore] = useState(0);
    let [overs, setOvers] = useState(0);
    let [runRate, setRunRate] = useState(0);
    let [batsman, setBatsman] = useState("Dhoni");
    let [bowler, setBowler] = useState("Shami");
    let [balls, setBalls] = useState(0);

    let [first, setFirst] = useState(0);
    let [second, setSecond] = useState(0);
    let [third, setThird] = useState(0);
    let [fourth, setFourth] = useState(0);
    let [fifth, setFifth] = useState(0);
    let [sixth, setSixth] = useState(0);


    let addRunsToOver = () => {
        console.log(balls);
        if (balls === 7) {
            console.log(7);
            setBalls(1);
        }

        setBalls(balls++)

        if (balls === 1) {
            setFirst(1);
        } else if (balls === 2) {
            setSecond(2)
        } else if (balls === 3) {
            setThird(3)
        } else if (balls === 4) {
            setFourth(4)
        } else if (balls === 5) {
            setFifth(5)
        } else {
            setSixth(6)
        }
    }

    let wickets = () => {
        setThird("W");
    }

    return (
        <div>
            <h2>{batsman}</h2>
            <h2>{bowler}</h2>

            <button onClick={addRunsToOver}>0</button>
            <button onClick={addRunsToOver}>1</button>
            <button onClick={addRunsToOver}>2</button>
            <button onClick={addRunsToOver}>3</button>
            <button onClick={addRunsToOver}>4</button>
            <button onClick={addRunsToOver}>6</button>
            <button onClick={wickets}>Wicket</button>

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
