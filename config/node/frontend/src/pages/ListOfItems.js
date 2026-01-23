import React, {useEffect, useState} from 'react';
import ParkCard from "../components/ParkCard";

function ListOfItems(props) {

    const [parks, setParks] = useState([]);

    useEffect(()=>{
        //http://localhost:10000/app/get_parks
        fetch('http://localhost:10000/app/get_parks')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setParks(res)
            })


         console.log('działa')
    },[])


    console.log('TO JEST MÓJ USERS I JEGO AKTUALNA ZAWARTOŚĆ', parks.data)

    return (
        <div>
            List of items
            <div>
                {parks.data?.map(park => <ParkCard park={park}/>)}
            </div>

        </div>
    );
}

export default ListOfItems;