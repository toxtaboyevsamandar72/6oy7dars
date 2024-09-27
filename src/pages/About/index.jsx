import './index.css';
import { useEffect, useState } from 'react';
import LazyLoadimage from '../../pages/LazyLoadimage.jsx'; 

function About() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      {loading && <p>loading ...</p>}
      {albums.length > 0 && albums.map(value => (
        <div className='card' key={value.id}>
          <LazyLoadimage 
            src={value.thumbnailUrl} 
            alt={value.title} 
            placeholder="https://picsum.photos/150/150/?blur=2" 
          />
          <p className='p'>{value.title}</p>
        </div>
      ))}
    </div>
  );
}

export default About;
