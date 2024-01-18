import { Gameboard } from "./Gameboard";
import { UserInput } from "./UserInput";

export function Game() {
  return (
    <div>
      <h1>Welcome to Wordle</h1>
      <Gameboard />
      <UserInput />
    </div>
  )
}