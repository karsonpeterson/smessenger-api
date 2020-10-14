import initializeApp from './initialize-app';

const PORT = 3001;

initializeApp()
    .then(app => {
        app.listen(PORT, (err: Error) => {
            if (err) throw err;
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch(e => {
        console.log('Failed to start, there as an error: ', e);
    });