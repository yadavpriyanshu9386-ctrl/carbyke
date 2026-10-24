# Frontend (Vite + React + Tailwind CSS)

DriveDeals UI. This is the main frontend of the project.

## Run
    cd frontend
    npm install
    npm run dev

Open the URL printed by Vite (usually http://localhost:5173).

## Structure (src/)
- `App.jsx`: app shell and state (page navigation, filters, wishlist)
- `pages/`: BuyPage, SellPage, RentPage, MyListings, AboutPage
- `components/layout/`: Navbar, Footer
- `components/vehicles/`: VehicleCard, VehicleModal
- `components/auth/`: LoginModal
- `components/common/`: ModalShell, SectionHeading, AtIcon
- `data/`: sample vehicles and social links (mock data)
- `utils/`: helpers such as `money()`
- `features/`: new feature modules go here (health-score, calculator, auth, ...)
- `hooks/`, `lib/`: shared hooks and API client (later)

## Rules
- Mention the SRS requirement ID (e.g. FR-HS-01) in commits and PRs.
- Mock data stays in `src/data/` until the backend API is ready.
