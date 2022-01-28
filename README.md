# JWT

Just a project I made to remember how to apply JWT authentication in routes with express.

It's composed only of 3 routes for testing purposes.

- Create user
- Get user by ID (Auth protected)
- Authenticate

First of all don't forget to install all the `package.json` dependencies.

```bash
yarn
# OR
npm install
```

Set a `JWT_SECRET` in the `.env` file

The project is configured to run with Prisma alongside SQLite so in the `.env` add the following to configure the database.  
Or if you feel fancy, just setup any database you want and change the `schema.prisma` file db provider with the correct credentials.

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
