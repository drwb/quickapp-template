# PLACEHOLDER

Cloudflare Worker + Static Assets, deployed to `PLACEHOLDER.example.com`.

## Local dev
```
npm install
npm run dev
```

## Deploy
Push to `main`. GitHub Actions runs `wrangler deploy`. Secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` must be set on the repo.
