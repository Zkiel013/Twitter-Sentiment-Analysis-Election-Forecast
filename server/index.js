const express=require('express');
require('dotenv').config();
const cors=require('cors');
const connectMongoDb=require('./connection');
const electionAnalysisRouter=require('./router/election_analysis');
const electionPredictionnRouter=require('./router/election_prediction');

const app=express();

app.use(cors());

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Databse connection
const PORT=process.env.PORT;
const URL=process.env.MONGO_URL;
connectMongoDb(URL);

//Routes
app.use('/api/election_analysis',electionAnalysisRouter);
app.use('/api/election_prediction',electionPredictionnRouter);


//server
app.listen(PORT, () => { 
    console.log(`Server is listening on port ${PORT}`);
}); 