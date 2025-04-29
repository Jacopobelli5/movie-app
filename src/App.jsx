import { useState } from 'react'


const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return(
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)} className='like-button'>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className='main-div'>
      <h2>Helloooooo</h2>
      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="Joker"/>
    </div>
  )
}

export default App
