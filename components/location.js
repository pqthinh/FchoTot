import React , {useState, useEffect}from 'react'
import {View, Text}  from 'react-native'

export default function LocationComponent () {

    const [place, setPlace] = useState(null)
    const location = require('../data/dvhcvn.json')
    const [tinh, setTinh] = useState(null)
    const [huyen, setHuyen] = useState(null)
    const [xa, setXa] = useState(null)
    const [arrTinh, setArrTinh] = useState(location.data)
    const [arrHuyen, setarrHuyen] = useState(null)
    const [arrXa, setarrXa] = useState(null)

    return(
        <div className="row">
            <div className="col">
            Tỉnh:
                <ul>
                {
                    this.state.arrTinh.map(x=> (
                    <li key={x.level1_id} onClick={()=> this.setState({arrHuyen: x.level2s})}>
                        {x.name}
                    </li>
                    ))
                }
                </ul>
            </div>
            <div className="col">
            Huyen:
                <ul>
                {
                    this.state.arrHuyen?.map(x=> (
                    <li key={x.level2s} onClick={()=> this.setState({arrXa: x.level3s})}>
                        {x.name}
                    </li>
                    ))
                }
                </ul>
            </div>
            <div className="col">
            Xa:
                <ul>
                {
                    this.state.arrXa?.map(x=> (
                    <li key={x.level3s} >
                        {x.name}
                    </li>
                    ))
                }
                </ul>
            </div>
            {/* {location.data.length} */}
        </div>
          
    )
}