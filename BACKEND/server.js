require('dotenv').config();
const { Pool } = require('pg');
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json());
app.use(cors())


const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false }
});

const PORT = process.env.PORT;

app.get('/load', async (req, res) => {
    try {
        let result = await pool.query('SELECT * FROM task');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error loading tasks' });
    }
});


app.post('/send',async (req, res) => {
    try{
        const duty = req.body.title
        const time = req.body.date
        const cmd = 'INSERT INTO task(duty, datetime) VALUES($1, $2)';
        const values = [duty, time]
        await pool.query(cmd, values)
        
        res.json({ message: 'Task received successfully' });

        console.log('Task received')

    }
    catch(err){
        res.status(500).json({message:'There was an error receiving Task'});
        console.error(err.message)
    }
    
})

app.delete('/delete',async (req, res) => {
    try{
        let result = await pool.query('DELETE FROM task');

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        console.log(result.rowCount)
        console.log('Task deleted')
        res.json({ message: `${result.rowCount} tasks deleted` });

    }
    catch(err){
        res.status(500).json({message:'There was an error deleting the task'});
        console.error(err.message)
    }
    
})


app.delete('/delete/:id', async (req, res) => {
    try {
        const cmd = 'DELETE FROM task where id = $1';
        const value = [+req.params.id]
        const result = await pool.query(cmd, value)

        console.log('Task deleted')


        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        console.log('Task deleted');
        res.json({ message: 'Task deleted' });

    }
    catch (err) {
        res.status(500).json({ message: 'There was an error deleting the task' });
        console.error(err.message)
    }

})

app.listen(PORT,() => {
    console.log(`Server running on port 3000 ${PORT}`)
})

