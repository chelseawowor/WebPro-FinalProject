import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import '../App.css';

const Indo = ({name, value}) => {
    const [confirmed, setConfirmed] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [deaths, setDeaths] = useState([]);

    useEffect(() => {
        axios.get("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => {
            setConfirmed(response.data.jumlahKasus);
            setRecovered(response.data.sembuh);
            setDeaths(response.data.meninggal);
        })
    }, []);

    // console.log(confirmed);
    // console.log(recovered);
    // console.log(deaths);
    
    return (
        <div>
            <h2>Data jumlah kasus di Indonesia
                <div className="card1">
                <Card className="card-kasus"
                    name="Positif"
                    value={confirmed}
                />
                <Card className="card-sembuh"
                    name="Sembuh"
                    value={recovered}
                />
                <Card className="card-meninggal"
                    name="Meninggal"
                    value={deaths}
                />
                </div>
            </h2>
        </div>
        
    )
};

export default Indo;
