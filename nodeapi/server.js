const express = require('express');
const ClienteRouter = require('./routes/ClienteRoutes');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

app.use(express.json());
// app.use(cors());
// Use the correct syntax for mounting the router
app.use(ClienteRouter);

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});
