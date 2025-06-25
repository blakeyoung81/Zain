#!/bin/bash

# Robotics Portfolio Website Server Startup Script
# This script starts a local web server for the portfolio website

echo "🚀 Starting Robotics Portfolio Website..."
echo "📁 Location: $(pwd)"
echo "🌐 Server will be available at: http://localhost:8080"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found, starting server..."
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    echo "✅ Python found, starting server..."
    python -m http.server 8080
else
    echo "❌ Error: Python not found. Please install Python to run the server."
    exit 1
fi 