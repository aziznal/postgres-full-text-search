## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Database Commands

The following helper commands are defined in package.json scripts:

- `db:generate`: generates migration files
- `db:migrate`: applies migrations from generated files
- `db:reset`: resets database to clean slate with no tables or data
- `db:iter`: resets database, generates migrations, then applies them. helpful during development
- `db:studio`: opens interactive UI in browser

