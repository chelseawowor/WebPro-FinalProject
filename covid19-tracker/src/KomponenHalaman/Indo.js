import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import '../App.css';

const Indo = ({nama, nilai}) => {
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
                <Card 
                    nama="Positif"
                    nilai={confirmed}
                />
                <Card 
                    nama="Sembuh"
                    nilai={recovered}
                />
                <Card 
                    nama="Meninggal"
                    nilai={deaths}
                />
                </div>
            </h2>
        </div>
        
    )
};

export default Indo;
