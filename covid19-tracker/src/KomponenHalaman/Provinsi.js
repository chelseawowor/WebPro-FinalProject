import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import NumberFormat from 'react-number-format';

const Provinsi = ({provinsi, posotif, sembuh, meninggal}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => setData(response.data.data));
    }, []);

    console.log(data);
    
    return (
        <div>
            <h2>Data jumlah kasus di Indonesia</h2>
            <tr className="table">
                <th>Provinsi</th>
                <th>Jumlah Kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
            </tr>
            {data.map((item) => {
                  return(
                      <tr className="table">
                          <th className="kolom">{item.provinsi}</th>
                          <th className="kolom"><NumberFormat value={item.kasusPosi} /></th>
                          <th className="kolom"><NumberFormat value={item.kasusSemb} /></th>
                          <th className="kolom"><NumberFormat value={item.kasusMeni} /></th>
                       </tr>
                  )
        })}
        </div>
    )
};

export default Provinsi;
