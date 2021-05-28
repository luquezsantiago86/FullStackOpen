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

const Statistic = (props) => {
  return (
      <tbody>
        <tr>
          <td>
              {props.text}
          </td>
          <td>
              {props.value}
          </td>
        </tr>
      </tbody>
  
 
  )
}

const Statistics = (props) => {
  const total = props.valueGood + props.valueNeutral + props.valueBad
  if(total === 0){
    return (
      <div>
         <h1>
          Statistics
        </h1>
        No feedback given
      </div>
      )
  }
  else
    return (<div>
      <h1>
        Statistics
      </h1>
      <table>
        <Statistic text = 'Good: ' value = {props.valueGood}/>
        <Statistic text = 'Neutral: ' value = {props.valueNeutral}/>
        <Statistic text = 'Bad: ' value = {props.valueBad}/>
        <Statistic text = 'All: ' value = {total}/>
        <Statistic text = 'Average: ' value = {(props.valueGood + (props.valueBad*-1))/(total)}/>
        <Statistic text = 'Positive: ' value = {(props.valueGood * 100)/(total) +'%'}/>
      </table>
      
    </div>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title = 'Give Feedback'></Header>
      <Button text= 'Good' handleClick={() => setGood(good + 1)} ></Button>
      <Button text= 'Neutral' handleClick={() => setNeutral(neutral + 1)} ></Button>
      <Button text= 'Bad' handleClick={() => setBad(bad + 1)}></Button>
      <Statistics
        valueGood = {good}
        valueNeutral = {neutral}
        valueBad = {bad}
        all = 'All: '
      />
    </div>
  )
}

export default App