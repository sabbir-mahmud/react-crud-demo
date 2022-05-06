import React from 'react';

const Loading = () => {
    return (
        <div className="flex my-24 items-center justify-center space-x-2 animate-pulse">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
        </div>
    );
};

export default Loading;