import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          illo velit porro dolorum ducimus voluptate. Harum ex illum ipsum quis
          adipisci, sequi facilis dolorem aperiam tempora? Odio deserunt
          voluptates unde!
        </p>
      </div>
    </>
  )
}

export default TaskDetails
