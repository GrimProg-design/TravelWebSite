import type { JSX } from "react";

import "./SparklingProgressBar.css"

interface SparklingProgressBarProps {
    progress: number;
}

export default function SparklingProgressBar({ progress }: SparklingProgressBarProps): JSX.Element {
    return (
        <div className="progress-bar-container">
            <div 
                className="progress-bar-fill" 
                style={{ width: `${progress}%` }}
            >
                <div className="sparkle-end"></div>
            </div>
        </div>
    );
}