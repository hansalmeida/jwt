# JWT

Just a project I made to remember how to apply JWT authentication in routes with express.

It's composed only of 3 routes for testing purposes.

- Create user
- Get user by ID (Auth protected)
- Authenticate

Remember to set a `JWT_SECRET` in the `.env`

The project is configured to run with Prisma alongside SQLite so in the `.env` add the following to configure the proper file path:

```env
DATABASE_URL="file:./dev.db"
```

Then run the following to setup the database

```bash
npx prisma generate
npx prisma migrate dev
```

In the end run `yarn dev` or `npm run dev` to start the project.

You can also use `npx prisma studio` to explore or manipulate the database
