Post Generator
This project is a full-stack application that generates motivational posts with text and images. The backend uses Node.js/Express and OpenAI to generate text, and the frontend is built with React/Vite to display the generated posts.
Project Structure

backend/: Contains the Node.js/Express backend.
frontend/: Contains the React/Vite frontend.
.gitignore: Excludes unnecessary files from Git.
.env.example: Template for environment variables.

Prerequisites

Node.js (version 22.x)
OpenAI API key
GitHub repository
Render account (for backend)
Vercel account (for frontend)

Setup
Backend (Render)

Clone the repository:
git clone https://github.com/usedfrom/post-generator.git
cd post-generator/backend


Install dependencies:
npm install


Create a .env file based on backend/.env.example:
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001


Deploy to Render:

Create a new Web Service on Render.
Set Root Directory to backend.
Set Build Command to npm install.
Set Start Command to npm start.
Add environment variable OPENAI_API_KEY.
Deploy the service.



Frontend (Vercel)

Navigate to the frontend directory:
cd post-generator/frontend


Install dependencies:
npm install


Create a .env file based on frontend/.env.example:
VITE_API_URL=https://post-generator-wdh8.onrender.com


Deploy to Vercel:

Create a new project on Vercel.
Set Root Directory to frontend.
Set Framework Preset to Vite.
Add environment variable VITE_API_URL=https://post-generator-wdh8.onrender.com.
Deploy the project.



Local Development
Backend

Navigate to backend/ and install dependencies:
npm install


Start the server:
npm run dev


Test the API at http://localhost:3001/api/post.


Frontend

Navigate to frontend/ and install dependencies:
npm install


Start the development server:
npm run dev


Open http://localhost:3000 in your browser.


Troubleshooting

Backend: If you encounter ENOENT: no such file or directory, ensure the Root Directory is set to backend in Render.
Frontend: If the frontend cannot connect to the backend, verify the VITE_API_URL environment variable and CORS settings on the backend.
Check logs on Render/Vercel for detailed error messages.
