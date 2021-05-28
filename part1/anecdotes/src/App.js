import React, { useState } from 'react'

const Header = (props) => {
  // console.log(props)
  return ( <div>
      <h1>
          { props.title }
      </h1>
  </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const points =   Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);
  
  // increment the value in position 2 by one
  const [vote, newVote] = useState(points)
  const makeVote = (selected) => {
    const copy = [...vote]
    copy[selected] += 1 
    console.log(copy)
  return newVote(copy)
  }
  let maxKey = Object.keys(vote).reduce((a, b) => vote[a] > vote[b] ? a : b);
  if(vote === points){
    return(
      <div>
        <Header title = 'Anecdote of the day'></Header>
        {anecdotes[selected]}<br/>
        Has {vote[selected]} votes<br/>
        <Button text = 'Vote' handleClick = {() => makeVote(selected)} />
        <Button text = 'Next Anecdote' handleClick = {() => setSelected(Math.floor(Math.random() * 6 ))}/><br/>
        <br/>
        Please make your vote!
      </div>
    )
  }
  else
    return (
      
      <div>
        <Header title = 'Anecdote of the day'></Header>
        {anecdotes[selected]}<br/>
        Has {vote[selected]} votes<br/>
        <Button text = 'Vote' handleClick = {() => makeVote(selected)} />
        <Button text = 'Next Anecdote' handleClick = {() => setSelected(Math.floor(Math.random() * 6 ))}/>
        <Header title = 'Anecdote with most votes'></Header>
        {anecdotes[maxKey]}
      </div>
    )
  }

export default App