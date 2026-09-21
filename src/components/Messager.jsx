import React from 'react'
import { useParams } from 'react-router-dom'

const Messager = () => {
    const {username} = useParams()
  return (
    <h1>welcome {username}</h1>
  )
}

export default Messager