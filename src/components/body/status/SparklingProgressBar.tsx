// В components/body/status/SparklingProgressBar.tsx

import type { JSX } from "react";

import "./SparklingProgressBar.css"

interface SparklingProgressBarProps {
    progress: number; // Прогресс в процентах (0-100)
}

export default function SparklingProgressBar({ progress }: SparklingProgressBarProps): JSX.Element {
    return (
        <div className="progress-bar-container">
            <div 
                className="progress-bar-fill" 
                style={{ width: `${progress}%` }}
            >
                {/* Имитация искры/звезды в конце заполнения */}
                <div className="sparkle-end"></div>
            </div>
        </div>
    );
}