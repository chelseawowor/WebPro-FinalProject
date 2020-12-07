import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import '../App.css';

const Global = ({nama, nilai}) => {
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
    // console.log(recovered);
    // console.log(deaths);
    
    return (
        <div>
            <h2>Data jumlah kasus secara Global
                <div className="card1">
                <Card
                    nama="Positif"
                    nilai={confirmed.value}
                />
                <Card 
                    nama="Sembuh"
                    nilai={recovered.value}
                />
                <Card 
                    nama="Meninggal"
                    nilai={deaths.value}
                />
                </div>
            </h2>
        </div>
        
    )
};

export default Global;
