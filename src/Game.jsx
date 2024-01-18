import { Gameboard } from "./Gameboard";
import { Row } from "./Row";
import { UserInput } from "./UserInput";

export function Game() {
  return (
    <div>
      <h1>Welcome to Wordle</h1>
      <Gameboard />
      <Row />
      <UserInput />
    </div>
  )
}