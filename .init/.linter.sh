#!/bin/bash
cd /home/kavia/workspace/code-generation/data-insights-dashboard-63f7b455/dashboard_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

