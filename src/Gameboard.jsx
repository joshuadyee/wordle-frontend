import { useEffect, useState } from "react"
import { Row } from "./Row"

export function Gameboard() {
  const [gameBoard, setGameBoard] = useState([])
  
  const displayBoard = () => {
    console.log("displaying board")
    
  }

  useEffect(displayBoard, [])
  
  return (
    <div>This is the Gameboard</div>
  )
}