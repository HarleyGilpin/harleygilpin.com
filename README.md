[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HarleyGilpin/harleygilpin.com)

# harleygilpin.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## TODO

In early 2023, I refactored my site to use the new `app/` directory in Next.js 13. I went ahead and shipped it, but there are still a few things I want to do:

- [ ] Global `404` page coming soon
- [ ] Move redirects to end of routing stack (not in `next.config.js`)
- [ ] Use new support for API routes in `app` (not ready yet)
- [ ] Improved scroll position support in `app/` (not implemented yet)

You can learn more about the `app/` directory [here](https://beta.nextjs.org/docs).

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/HarleyGilpin/harleygilpin.com.git
cd nextjs-portfolio
pnpm install
pnpm run setup # Remove all of my personal information
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/HarleyGilpin/harleygilpin.com/blob/main/.env.example).

## Cloning / Forking

Please review the [license](github.com/HarleyGilpin/harleygilpin.com/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.) by running `pnpm run setup`.

## PlanetScale Database Setup

**guestbook table**

```sql
CREATE TABLE guestbook (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255),
  body TEXT,
  created_by VARCHAR(255),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**views table**

```sql
CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT
);
```
