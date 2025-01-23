import React, { useState } from 'react'

export default function Match() {
    const [team, setTeam] = useState(null);
    const [toss, setToss] = useState();
    const [play, setPlay] = useState();
    const [overs, setOvers] = useState(0);

    let selectTeam = (team) => {
        console.log("selected a team");
        setTeam(team)
    }

    let randomToss = () => {
        let toss = Math.ceil(Math.random(5) * 10) > 5 ? "Heads" : "Tails";
        setToss(toss);
        selectPlay();
        setOvers(5);
    }

    let selectPlay = () => {
        let play = Math.ceil(Math.random(5) * 10) > 5 ? "Batting" : "Bowling";
        setPlay(play);
    }

    return (
        <div>
            <select name="" id="">
                <option value="defaultTeam" selected disabled>Select your team</option>
                <option value="team1" onClick={() => selectTeam}>team1</option>
                <option value="team2" onClick={() => selectTeam}>team2</option>
            </select> <br />

            <button onClick={randomToss}>Toss</button>
            <h3>{toss}</h3>
            <h3>{play}</h3>

            <h2>Number of overs is {overs}</h2>
        </div>
    )
}
