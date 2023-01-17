import React, { useState, useEffect } from 'react';
import axios from 'axios'


function NasaPicture() {
    const [explanation, setExplanation] = useState('');
    const [url, setUrl] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=XJs9hWE9FQKzyRaXRUqplQG0xAmPeWbJNcV57yF8')
        .then(response => {
          setExplanation(response.data.explanation);
          setUrl(response.data.url);
          setMediaType(response.data.media_type);
          setReady(true);
        })
        .catch(err => console.log(err))
      }, [])
    
      if (!isReady) {
        return <div>Loading...</div>;
      }
    
      else if (mediaType === 'image') {
        return (
          <div>
            <p>Explanation: {explanation}</p>
            <img alt="Nasa APOD" src={url} />
          </div>
        );
      }
      else {
        return (
          <div>
            <p>Explanation: {explanation}</p>
            <iframe width="520" height="415" src={url} title="Nasa APOD"></iframe>
          </div>
        );
      }
}

export default NasaPicture