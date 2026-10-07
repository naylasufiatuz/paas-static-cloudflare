# Portofolio Pribadi (Emerald Green)

Website statis HTML + CSS + JavaScript yang dideploy ke **Cloudflare Workers Static Assets** (Minggu 4).

## Struktur
```
paas-static-cloudflare/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── wrangler.jsonc
└── README.md
```

## Deploy
1. Push repository ke GitHub (branch `main`).
2. Cloudflare Dashboard → Workers & Pages → Create application → Import a repository.
3. Pilih repository, branch produksi `main`, deploy command `npx wrangler deploy`.
4. Buka URL `https://paas-static-nama-siswa.<subdomain-akun>.workers.dev`.

## URL Live
`https://____________________________.workers.dev`
