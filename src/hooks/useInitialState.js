import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  })
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(err => console.log(err, 'fallo al hacer la peticion'))
  }, []);
  return videos
}

export default useInitialState;