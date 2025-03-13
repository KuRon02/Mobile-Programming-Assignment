import { addDoc, collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./config.js";

export function useFireLocations() {
    const [locations, setLocations] = useState([]);

    useEffect(()=>{

        const q = query(collection(db, LOCATIONS_REF));

        onSnapshot(q, querySnapshot => {
            setLocations( querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }))
        });

    }, []);

    return locations;
}

export function addPlace(lName, lDescription, stars) {
    addDoc( collection(db, LOCATIONS_REF), {lName, lDescription, stars} )
        .catch(error => console.log(error.message))
}