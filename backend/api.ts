import firebaseConfig from '../src/config';
import { initializeApp } from 'firebase/app';
const firebaseApp = initializeApp(firebaseConfig);

//backend server for handling app events
import {
    Auth,
    getAuth,
} from 'firebase/auth';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Request, Response } from 'express';
import { Auth, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const db = getFirestore(firebaseApp);

const app = express();
app.use(cors());
app.use(cookieParser());

app.post('/api/addUser', (req: Request, res: Response) => {
    //make it so it gets the user auth from the frontend
    try {
        addDoc(collection(db, "users"), {
            value: "ok!"
        })
        res.status(200).json({ message: 'Ok!' });
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Not found!' });
    }
})

app.post('/api/tasks', (req: Request | null, res: Response) => {
    console.log(req?.body);
    
    try {
        // let res = addDoc(collection(db, "tasks"), {
        //     title: 'test',
        //     description: 'test',
        //     status: 'test',
        //     user_id: 'test'
        // })
        // console.log(res?.then(data => console.log(data)))
        res.status(200).json({ message: 'Ok!' });
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Not found!' });
    }
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

