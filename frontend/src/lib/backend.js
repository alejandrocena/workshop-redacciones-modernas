
export const Sentiment = {
  extract: text => {
    return fetch('http://localhost:5000/content/sentiment', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  },
};

export const Entity = {
  extract: text => {
    return fetch('http://localhost:5000/content/entity/extract', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  },
  sentiment: text => {
    return fetch('http://localhost:5000/content/entity/sentiment', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  },
};


export const Category = {
  guess: text => {
    return fetch('http://localhost:5000/content/category/guess', {method: 'POST', body: JSON.stringify({text}),headers:{'Content-Type': 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  }
};

export const Tags = {
  meta: tags => {
    const tags_str = tags.join(',');
    return fetch('http://localhost:5000/content/tags/meta?tags=' + tags_str, {method: 'GET'})
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  }
};