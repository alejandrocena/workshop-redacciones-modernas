
const Sentiment = {
  extract: text => {
    return fetch('http://localhost:5000/content/sentiment', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  },
};

const Entity = {
  extract: text => {
    return fetch('http://localhost:5000/content/entity/extract', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  },
  sentiment: text => {
    return fetch('http://localhost:5000/content/entity/sentiment', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  },
};


const Category = {
  guess: text => {
    return fetch('http://localhost:5000/content/category/guess', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
};

const Backend = {
  Category,
  Entity,
  Sentiment
};





module.exports = Backend;