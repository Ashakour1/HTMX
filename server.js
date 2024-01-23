import express from 'express';

const app = express();

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));

//handle get request to fetch users

app.get('/users', async(req,res) => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');

   const users = await response.json();
   
    res.send(`
    <h1 class="text-1xl font-bold my-4">Users List</h1>
    <ul>
    ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>
    `
)
})


app.use(express.json());
app.listen(4000,() => {
    console.log(`Server is listening on port 4000`)
})