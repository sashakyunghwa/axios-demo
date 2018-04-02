const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234'; //query string - everything afer a "?" is a query string

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    console.log('Server Response:', resp);
}).catch( err => {
    console.log('There was an error:', err.message);
}); //ALL AXIOS METHODS RETURN A PROMISE, CATCH REFERS TO CATCHING ANY ERRORS

const newItem =  {
    title: 'Sasha\'s new item!',
    details: 'Some neat details go here'
};

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(resp => {
//     console.log('Add Response:', resp);
// });

axios.get(`${BASE_URL}/todos/${itemId + API_KEY}`).then(resp => {
    console.log('Single item resp:', resp);
});

const itemId = '5ac27908329150131fbbff6e';

// http://api.reactprototypes.com/todos/id?key=testuser1234

