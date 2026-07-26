# SpendWise

SpendWise is a full-stack expense tracker and budget management app built with the MERN stack. It helps users track income and expenses, manage monthly budgets, visualize spending, export reports, and stay organized with a clean responsive dashboard.

## Features

* User authentication with JWT
* Protected routes and persistent login
* Dashboard with summary cards and analytics charts
* Track income and expense transactions
* Search, filter, and paginate transactions
* Create, edit, and delete transactions
* Budget management with progress tracking and alerts
* Create, edit, and delete budgets
* Responsive sidebar and mobile-friendly UI
* Profile page
* Export transactions as CSV
* Export transactions as PDF
* Loading skeletons for smoother UX
* Quick actions on dashboard
* Dark mode support

## Tech Stack

**Frontend**

* React
* Vite
* React Router
* Tailwind CSS
* Recharts
* React Hook Form
* Zod
* React Hot Toast
* Lucide React

**Backend**

* Node.js
* Express
* MongoDB
* Mongoose
* JWT
* bcrypt

## Folder Structure

```bash
SpendWise/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── .env
│
└── backend/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── config/
    └── .env
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd SpendWise
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

## Environment Variables

### Backend `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
GOOGLE_CLIENT_ID=your_google_client_id
```

### Frontend `.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## Run the Project

### Start backend

```bash
cd backend
npm run dev
```

### Start frontend

```bash
cd frontend
npm run dev
```

## Main Pages

* `/` - Login
* `/register` - Register
* `/dashboard` - Dashboard overview
* `/transactions` - Transaction management
* `/budgets` - Budget management
* `/profile` - User profile

## API Features

### Auth

* Register
* Login
* Get profile
* Logout handled on frontend

### Transactions

* Create transaction
* Get paginated transactions
* Search transactions
* Filter by type and category
* Update transaction
* Delete transaction
* Export transactions as CSV/PDF

### Budgets

* Create budget
* Get budgets with progress data
* Update budget
* Delete budget

## Export Features

SpendWise supports exporting transactions in:

* CSV
* PDF

Exports respect current filters like search, type, and category.

## Screenshots

Add screenshots here later if needed.

## Future Improvements

* More report formats
* Category-wise budget reports
* Recurring transactions
* Receipt uploads
* Notifications
* Advanced dark mode polish

## License

This project is for learning and portfolio use.

## Author

Built as a personal finance and expense tracking project.
