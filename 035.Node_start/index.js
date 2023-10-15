const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
    const arr = [1, 1, 4, 5, 5, 6, 2, 2];
    const new_arr = [];
    for(let i=0; i<arr.length; i++){
        !new_arr.includes(arr[i])? new_arr.push(arr[i]) : null
    }
    response.send(new_arr);
})

app.get(`/about`, (request, response) => {
    response.send(`Hello, this is "About" route`);
})

app.get(`/contact`, (request, response) => {
    response.send(`Hello, this is my contact "12312313"`)
})

app.get(`/:id`, (request, response)=>{
    const {id} = request.params;
    const arr =[1,2,3,4,5,6];
    const resArr = [];
    let itemArr = [];
    for(let i = 0; i<arr.length; i++){
        itemArr.push(arr[i])
        if(itemArr.length == id){
            resArr.push(itemArr);
            itemArr = []
        }
    }
    response.send(resArr);
})


app.listen(3000, () => {
    console.log(`Server is running on port:3000`);
})


