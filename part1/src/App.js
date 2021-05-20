import React from 'react'

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React '
const exercises1 = 10
const part2 = 'Using props to pass data '
const exercises2 = 7
const part3 = 'State of a component '
const exercises3 = 14
const numExercises = 'Number of exercises '
const exercisesSum = exercises1 + exercises2 + exercises3

const Header = (props) => {
    return ( <div>
        <p>
            { props.courseName }
        </p>
    </div>
    )
}

const Part = (props) => {
    return ( <div>
        <p>
            {props.parts}
            {props.exercises}
        </p>
    </div>
    )
}
const Content = (props) => {
    return (
      <div>
        <Part parts= {part1} exercises = {exercises1}></Part>
        <Part parts= {part2} exercises = {exercises2}></Part>
        <Part parts= {part3} exercises = {exercises3}></Part>
      </div>
    )
  }
const Total = (props) => {
    return ( <div>
        <p>
            {props.phrase}
            {props.totalExercises}
        </p>
    </div>
    )
}

const App = () => {
    

    return ( <div>
        <Header courseName={course}></Header>
        <Content></Content>
        <Total phrase = {numExercises} totalExercises = {exercisesSum}></Total>
    </div>
    )
}

export default App