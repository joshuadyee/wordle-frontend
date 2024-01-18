export function Row({ guess }) {
  return (
    <div>
      {guess.map((letter, index) => (
        <Letter key={index} letter={letter} />
      ))}
    </div>
  )
}