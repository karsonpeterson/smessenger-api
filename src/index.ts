import initializeApp from './initialize-app';
import * as dotenv from 'dotenv';

const PORT = 3001;
dotenv.config();

initializeApp()
    .then(app => {
        app.listen(PORT, (err: Error) => {
            if (err) throw err;
            console.log(`Listening on port ${PORT}`);
            console.log(process.env.SECRET);
        });
    })
    .catch(e => {
        console.log('Failed to start, there as an error: ', e);
    });