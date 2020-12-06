import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import '../App.css';

const Global = ({name, value}) => {
    const [confirmed, setConfirmed] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [deaths, setDeaths] = useState([]);

    useEffect(() => {
        axios.get("https://covid19.mathdro.id/api")
        .then((response) => {
            setConfirmed(response.data.confirmed);
            setRecovered(response.data.recovered);
            setDeaths(response.data.deaths);
        })
    }, []);

    console.log(confirmed);
    console.log(recovered);
    console.log(deaths);
    
    return (
        <div>
            <h2>Data jumlah kasus secara Global
                <div className="card1">
                <Card className="card-kasus"
                    name="Jumlah Kasus"
                    value={confirmed.value}
                />
                <Card className="card-sembuh"
                    name="Sembuh"
                    value={recovered.value}
                />
                <Card className="card-meninggal"
                    name="Meninggal"
                    value={deaths.value}
                />
                </div>
            </h2>
        </div>
        
    )
};

export default Global;
