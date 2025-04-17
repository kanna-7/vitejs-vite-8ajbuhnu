// write the book component code here
// write the book component code here
import React from 'react';

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    width: '200px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default BookCard;