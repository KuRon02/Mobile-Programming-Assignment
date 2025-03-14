import { addDoc, collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./config.js";

//Function that enables the use of Firebase databases
export function useFireLocations() {
    const [locations, setLocations] = useState([]);

    //Upon opening app load all of the data from the database and order it by stars descending
    useEffect(()=>{

        const q = query(collection(db, LOCATIONS_REF), orderBy('stars', 'desc'));

        onSnapshot(q, querySnapshot => {
            setLocations( querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }))
        });

    }, []);

    return locations;
}

//Function that adds a new entry to the database
export function addPlace(lName, lDescription, stars) {
    addDoc( collection(db, LOCATIONS_REF), {lName, lDescription, stars} )
        .catch(error => console.log(error.message))
}