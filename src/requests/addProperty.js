import axios from 'axios';

const addProperty = (data) => {
    if (!data) {
        return Promise.resolve([])
    }
    axios
    .post('http://localhost:4000/api/v1/PropertyListing', { title: title.value, city: city.value, type: type.value })
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err);
    })

};

/*const options = {
    method: 'POST', 
    title: title.value, 
    city: city.value, 
    type: type.value,
}*/

export default addProperty;