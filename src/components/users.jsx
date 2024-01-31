import React from 'react'
import { useParams } from 'react-router-dom'

export default function Users() {
    const {userName} = useParams();
  return (
    <div>
        <h1>Welcome {userName}</h1>
    </div>
  )
}
