# Chorely

> Set up household (or team) chores, and once a task is marked complete, automatically transfer the payment to the assigned person’s account.

**Note:** This project is in the early stages of development. More features and information will be added soon.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))
*   [PostgreSQL](https://www.postgresql.org/)

### Installation and Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/chorely.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up your environment variables by creating a `.env` file in the root of the project and adding the following:
    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
4.  Run the database migrations:
    ```bash
    npx prisma migrate dev
    ```
5.  (Optional) Seed the database with sample data:
    ```bash
    npm run prisma-seed
    ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/)
*   **Testing:** [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), and [Playwright](https://playwright.dev/)
*   **Linting & Formatting:** [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## Available Scripts

*   `dev`: Runs the development server.
*   `build`: Creates a production build.
*   `start`: Starts the production server.
*   `lint`: Lints the codebase.
*   `lint-fix`: Lints and fixes the codebase.
*   `test`: Runs unit and component tests.
*   `test:e2e`: Runs end-to-end tests.