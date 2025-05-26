import React from 'react';

const BackgroundDrone: React.FC = () => {
    return (
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-20 -right-20 md:top-10 md:-right-40 w-96 h-96 md:w-[40rem] md:h-[40rem] opacity-5 dark:opacity-10 animate-slow-rotate">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M14.5 8L17.5 9.5M17.5 9.5L19 12.5M17.5 9.5L14.5 12.5M9.5 8L6.5 9.5M6.5 9.5L5 12.5M6.5 9.5L9.5 12.5M12 5.5V8M12 8L14.5 8M12 8L9.5 8M12 8V12.5M12 12.5L14.5 12.5M12 12.5L9.5 12.5M12 12.5V16M12 16L9.5 19M12 16L14.5 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default BackgroundDrone;