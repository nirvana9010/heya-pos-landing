#!/bin/bash
# Script to start Vite with better error handling

echo "Starting Vite development server..."
echo "Press Ctrl+C to stop"

# Change to the project directory
cd /home/nirvana9010/projects/heya_landing_page/heya-pos-landing

# Run Vite with error output
npm run dev -- --host 2>&1 | tee vite-output.log