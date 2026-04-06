import { useEffect, useRef, useState } from 'react'
import './App.css'

const COUNTDOWN_SEQUENCE = ['Preparados', 'Listos', 'Ya'] as const
const GAME_DURATION_SECONDS = 5

type GamePhase = 'idle' | 'countdown' | 'playing'

function App() {
  const [phase, setPhase] = useState<GamePhase>('idle')
  const [countdownStep, setCountdownStep] = useState(0)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)

  const countdownIntervalRef = useRef<number | null>(null)
  const gameIntervalRef = useRef<number | null>(null)

  const clearIntervals = () => {
    if (countdownIntervalRef.current !== null) {
      window.clearInterval(countdownIntervalRef.current)
      countdownIntervalRef.current = null
    }

    if (gameIntervalRef.current !== null) {
      window.clearInterval(gameIntervalRef.current)
      gameIntervalRef.current = null
    }
  }

  useEffect(() => {
    return () => clearIntervals()
  }, [])

  const finishGame = () => {
    clearIntervals()
    setPhase('idle')
    setRemainingTime(0)
    setBestScore((prevBestScore) => Math.max(prevBestScore, score))
  }

  const startGameWindow = () => {
    setPhase('playing')
    setRemainingTime(GAME_DURATION_SECONDS)

    gameIntervalRef.current = window.setInterval(() => {
      setRemainingTime((previousTime) => {
        if (previousTime <= 1) {
          finishGame()
          return 0
        }

        return previousTime - 1
      })
    }, 1000)
  }

  const handleStart = () => {
    if (phase !== 'idle') {
      return
    }

    clearIntervals()
    setScore(0)
    setCountdownStep(0)
    setRemainingTime(0)
    setPhase('countdown')

    countdownIntervalRef.current = window.setInterval(() => {
      setCountdownStep((previousStep) => {
        if (previousStep >= COUNTDOWN_SEQUENCE.length - 1) {
          clearIntervals()
          startGameWindow()
          return previousStep
        }

        return previousStep + 1
      })
    }, 1000)
  }

  const handleScoreClick = () => {
    if (phase !== 'playing') {
      return
    }

    setScore((previousScore) => previousScore + 1)
  }

  const statusLabel =
    phase === 'countdown'
      ? COUNTDOWN_SEQUENCE[countdownStep]
      : phase === 'playing'
        ? 'Jugando'
        : 'Esperando inicio'

  return (
    <main className="game-shell">
      <section className="game-card" aria-live="polite">
        <header className="game-header">
          <p className="eyebrow">Desafio FrontEnd React Junior</p>
          <h1>JuegoContador</h1>
          <p className="subtitle">
            Hace la mayor cantidad de clicks posible en 5 segundos.
          </p>
        </header>

        <div className="status-box">
          <span className="status-label">Estado</span>
          <strong className="status-value">{statusLabel}</strong>
        </div>

        <div className="metrics-grid">
          <article className="metric-item">
            <span>Puntaje actual</span>
            <strong>{score}</strong>
          </article>
          <article className="metric-item">
            <span>Puntaje maximo</span>
            <strong>{bestScore}</strong>
          </article>
          <article className="metric-item">
            <span>Tiempo restante</span>
            <strong>{phase === 'playing' ? `${remainingTime}s` : '-'} </strong>
          </article>
        </div>

        <div className="button-row">
          <button
            type="button"
            className="action-button start"
            onClick={handleStart}
            disabled={phase !== 'idle'}
          >
            Iniciar juego
          </button>
          <button
            type="button"
            className="action-button click"
            onClick={handleScoreClick}
            disabled={phase !== 'playing'}
          >
            Click aqui
          </button>
        </div>

        <p className="hint">
          El boton de click se habilita solo cuando aparece el estado "Ya".
        </p>
      </section>
    </main>
  )
}

export default App
