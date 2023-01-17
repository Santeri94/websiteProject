import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';


function RandomQuestion(){
    const [question, setQuestion] = useState("")

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get('https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=boolean')
        .then(response => {
            const questions = response.data.results
            const randomQuestion = Math.floor(Math.random() * questions.length) // saadaa varmasti randomi kysymys
            setQuestion(questions[randomQuestion].question)
        })
    };

    
    
    
      return (
        <div>
          <p><b>{question}</b></p>
          <Button variant="contained" color="primary" onClick={fetchData}>New question</Button>
         </div>
      );
}

export default RandomQuestion


