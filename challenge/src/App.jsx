import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [phase, setPhase] = useState("idle"); 
  const [count, setCount] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);

  // ⏱️ Cuenta regresiva inicial
  useEffect(() => {
    if (phase === "ready") {
      const timer = setTimeout(() => setPhase("set"), 1000);
      return () => clearTimeout(timer);
    }

    if (phase === "set") {
      const timer = setTimeout(() => setPhase("go"), 1000);
      return () => clearTimeout(timer);
    }

    if (phase === "go") {
      const timer = setTimeout(() => {
        setPhase("playing");
        setTimeLeft(5);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // 🟢 Timer del juego (FIX PRINCIPAL)
  useEffect(() => {
    if (phase !== "playing") return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  // 🛑 Fin del juego
  useEffect(() => {
    if (timeLeft === 0 && phase === "playing") {
      setPhase("finished");
      setMaxScore((prevMax) => Math.max(prevMax, count));
    }
  }, [timeLeft, phase, count]);

  const startGame = () => {
    setCount(0);
    setTimeLeft(5);
    setPhase("ready");
  };

  const handleClick = () => {
    if (phase === "playing") {
      setCount((prev) => prev + 1);
    }
  };

  const getMessage = () => {
    switch (phase) {
      case "ready":
        return "Preparados";
      case "set":
        return "Listos";
      case "go":
        return "Ya";
      case "playing":
        return `Tiempo restante: ${timeLeft}s`;
      case "finished":
        return "¡Tiempo terminado!";
      default:
        return "Presiona iniciar";
    }
  };

  return (
    <div className="container">
      <h1>Juego Contador</h1>

      <h2>Puntaje máximo: {maxScore}</h2>

      <p className="message">{getMessage()}</p>

      <h3>Clicks: {count}</h3>

      <button
        onClick={startGame}
        disabled={phase !== "idle" && phase !== "finished"}
      >
        Iniciar
      </button>

      <button
        onClick={handleClick}
        disabled={phase !== "playing"}
      >
        Click!
      </button>
    </div>
  );
}

export default App;