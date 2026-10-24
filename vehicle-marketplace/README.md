# AI-Powered Trusted Vehicle Marketplace

Buy and sell used cars and bikes, rent vehicles, and decide with AI. Trust first: Vehicle Health Score, verified sellers, Sell-or-Rent Calculator.

## Repository layout
- `docs/` requirements (SRS), design, legal, meeting notes
- `backend/` FastAPI modular monolith (one folder per business module)
- `frontend/` Next.js web app (feature-based)
- `ai/` price model, recommender, fraud detection
- `mobile/` Android app (later)
- `infra/`, `scripts/`, `.github/` DevOps and team workflow

## Quick start
1. Copy `.env.example` to `.env`
2. `docker compose up -d db redis`
3. Start backend and frontend (see their READMEs)

## Requirements
The full SRS is in `docs/requirements/`. Every backend module README lists the requirement IDs it implements.
