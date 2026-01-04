# FaroHQ Static Site

Marketing site for FaroHQ, deployed on Cloudflare Pages.

## Pages

- Landing (`/`)
- Pricing (`/pricing`)
- Products (`/products`)
- Documentation (`/docs`)
- Blog (`/blog`)

## Tech Stack

- **Framework**: Vite + React
- **Styling**: Tailwind CSS
- **Components**: @farohq/ui (published package)
- **Deployment**: Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

## Deployment

The site is automatically deployed to Cloudflare Pages on push to main branch.

## Environment Variables

```env
VITE_API_URL=https://api.farohq.com
```

## Documentation

See [FaroHQ Documentation](https://docs.farohq.com) for more information.
