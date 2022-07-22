import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetworks, fetchOneNetwork} from '../services/dataAPI';
import clases from "./networks.module.scss";

const Networks = () => {
    const dispath = useDispatch()
    const networks = useSelector(state => state.networks.networks)
    const stations = useSelector(state => state.stations.stations)

    useEffect(()=>{
        fetchNetworks().then(data => dispath({type:"FETCH_NETWORKS", payload:data}))
    },[])
    useEffect(()=>{
        if (Object.keys(networks).length > 0 ){
            // console.log(networks.networks[0].id)
            // fetchOneNetwork(networks.networks[0].id).then(data =>{
            //     data.network.stations.map(station =>{dispath({type:"CHOOSE_NETWORK", payload:station.name})})
            // })
            fetchOneNetwork(networks.networks[0].id).then(data => dispath({type:"CHOOSE_NETWORK", payload:data}))
            // fetchOneNetwork(networks.networks[0].id).then(data=>console.log(data))
        }
    },[networks])
    return (
        <div className={clases.container}>
            {Object.keys(networks).length > 0 ?
                <div>
                    {networks.networks.map(network => 
                        <div
                            key={network.id}
                            // onClick={dispath()}
                        >
                            {/* {console.log(network.id)} */}
                            {network.id}
                        </div>
                    )}
                </div>:
                <div>
y
                </div>
            }
            {Object.keys(stations).length > 0 ?
                <div>
                    {stations.network.stations.map(station => 
                        <div
                            key={station.id}
                            
                        >
                            {station.id}
                        </div>
                    )}
                </div>:
            <div>
y
            </div>
            }
        </div>
    );
};

export default Networks;