import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [maxScore, setMaxScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [isCountdown, setIsCountdown] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [countdownMessage, setCountdownMessage] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)
  const currentScoreRef = useRef(0)

  useEffect(() => {
    currentScoreRef.current = currentScore
  }, [currentScore])

  useEffect(() => {
    if (!isPlaying) {
      return
    }

    const intervalId = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(intervalId)
          setIsPlaying(false)
          setMaxScore((previousMax) =>
            currentScoreRef.current > previousMax
              ? currentScoreRef.current
              : previousMax,
          )
          return 0
        }

        return previousTime - 1
      })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isPlaying])

  const handleStart = () => {
    if (isCountdown || isPlaying) {
      return
    }

    setCurrentScore(0)
    currentScoreRef.current = 0
    setIsCountdown(true)
    setCountdownMessage('Preparados')

    setTimeout(() => {
      setCountdownMessage('Listos')
    }, 1000)

    setTimeout(() => {
      setCountdownMessage('Ya')
    }, 2000)

    setTimeout(() => {
      setCountdownMessage('')
      setIsCountdown(false)
      setIsPlaying(true)
      setTimeLeft(5)
    }, 3000)
  }

  const handleClickButton = () => {
    if (!isPlaying) {
      return
    }

    setCurrentScore((previousScore) => previousScore + 1)
  }

  return (
    <main className="container">
      <h1>JuegoContador</h1>

      <p className="max-score">Puntaje maximo: {maxScore}</p>

      {isCountdown && <p className="countdown">{countdownMessage}</p>}

      {isPlaying && (
        <p className="game-info">
          Tiempo restante: {timeLeft}s  Contador actual: {currentScore}
        </p>
      )}

      {!isPlaying && !isCountdown && (
        <p className="game-info">Contador actual: {currentScore}</p>
      )}

      <div className="buttons">
        <button onClick={handleStart} disabled={isPlaying || isCountdown}>
          Iniciar juego
        </button>

        <button onClick={handleClickButton} disabled={!isPlaying}>
          Click!
        </button>
      </div>
    </main>
  )
}

export default App
