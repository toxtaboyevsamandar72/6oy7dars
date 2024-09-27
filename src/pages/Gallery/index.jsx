import React, { useEffect, useState } from 'react';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholderImage = 'https://via.placeholder.com/150'; 

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotos(data.slice(0, 20));
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img className='img' src={photo.thumbnailUrl || placeholderImage} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
  