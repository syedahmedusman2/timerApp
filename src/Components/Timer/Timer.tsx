import React, { useState, useEffect } from 'react'
import './Timer.css';


let timerId: ReturnType<typeof setInterval>;

const Timer = () => {
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(0);

    useEffect(() => {
        return () => clearInterval(timerId);
    }, []);

    const startTimer = () => {
        timerId = setInterval(() => {
            setTimerSeconds(prevtimerSeconds => prevtimerSeconds + 1)
        }, 1000);
    }

    const toggleTimer = () => {
        setIsTimerRunning(prevIsTimerRunning => !prevIsTimerRunning);
        if (!isTimerRunning) {
            startTimer();
        }
        else {
            clearInterval(timerId);
        }
    }

    const resetTimer = () => {
        setTimerSeconds(0);
    }

    return (
        <div className="timer">
            <div>
                <div className="timer-circle">
                    <h1 role="timer" className="display-1 text-center">{new Date(timerSeconds * 1000).toISOString().substr(11, 8)}</h1>
                </div>
            </div>
            <div className="button-wrapper">

                <button className="button"
                    data-testid="stop"
                    role="button"
                    onClick={toggleTimer}
                    disabled={!isTimerRunning}>
                    STOP
                </button>

                <button className="button"
                    data-testid="start"
                    role="button"
                    onClick={toggleTimer}
                    disabled={isTimerRunning}>
                    START
                </button>

                <button className="button"
                    data-testid="reset"
                    role="button"
                    onClick={resetTimer}
                    disabled={isTimerRunning}>
                    RESET
                </button>
            </div>
        </div>
    )
}

export default Timer