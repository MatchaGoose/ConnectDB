# ConnectDB
## Setup

### Environment Variables
Create a `.env` file in the backend directory with the provided variables:\
`SUPABASE_URL`\
`SUPABASE_KEY`

### Frontend
`cd frontend`\
`npm install`\
`npm run dev`

### Backend
`cd backend`\
`python3 -m venv venv`\
`source venv/bin/activate`\
`pip3 install -r requirements.txt`\
`python -m uvicorn main:app --reload`

## View the app

Head to `http://localhost:3000` to view the displayed rows.
