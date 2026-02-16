# Deployment Guide

Complete guide to deploy your portfolio to production.

## Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/yourname/my-portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Select your repository
5. Configure project:
   - **Framework**: Next.js
   - **Root Directory**: ./
   - Click "Deploy"

### Step 3: Add Custom Domain

1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain
4. Follow DNS configuration instructions

## Netlify

### Step 1: Build Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy

```bash
npm install -g netlify-cli
netlify deploy
```

## Manual Deployment

### On a VPS (DigitalOcean, Linode, etc.)

1. **Set up Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Clone Repository**
```bash
git clone https://github.com/yourname/my-portfolio.git
cd my-portfolio
```

3. **Install Dependencies**
```bash
npm install
```

4. **Build Project**
```bash
npm run build
```

5. **Start Server**
```bash
npm start
```

6. **Use PM2 for Process Management**
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

7. **Set up Nginx Reverse Proxy**

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Enable Site**
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

9. **Set up SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## GitHub Pages

GitHub Pages doesn't support Next.js server features, but you can export as static:

```bash
# Update next.config.ts
const nextConfig = {
  output: "export",
};

npm run build
```

Then push to `gh-pages` branch.

## Environment Variables

Create `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Pre-deployment Checklist

- [ ] All links are updated
- [ ] Contact form is configured
- [ ] Analytics tracking is set up
- [ ] All images are optimized
- [ ] Metadata is updated
- [ ] Social links work
- [ ] Mobile responsive tested
- [ ] Performance tested (Lighthouse)
- [ ] SEO meta tags verified
- [ ] Security headers configured

## Performance Optimization

### Enable Compression
```bash
npm install compression
```

### Update next.config.ts
```typescript
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  swcMinify: true,
};
```

### Image Optimization

Use WebP format for images:

```typescript
<Image
  src="/image.webp"
  alt="description"
  width={800}
  height={600}
  priority
/>
```

## Monitoring

### Vercel Analytics

Built-in with Vercel deployment.

### Error Tracking

Add Sentry:

```bash
npm install @sentry/nextjs
```

Configure in `next.config.ts`:

```typescript
const withSentry = require("@sentry/nextjs").withSentry;

module.exports = withSentry({
  // ... existing config
});
```

### Uptime Monitoring

Use services like:
- Uptime Robot
- Pingdom
- StatusCake

## Backup Strategy

1. Regular GitHub commits
2. Database backups (if applicable)
3. Environment variable backups (store safely)

## Rollback Procedure

### Vercel
- Go to Deployments
- Click the previous successful deployment
- Click "Redeploy"

### Manual/VPS
```bash
git revert <commit-hash>
npm run build
pm2 restart portfolio
```

## SSL/HTTPS

### Vercel
Automatic SSL certificate

### Netlify
Automatic SSL certificate

### Manual
Use Let's Encrypt (free):
```bash
sudo certbot --nginx
```

## Content Security Policy

Add to `next.config.ts`:

```typescript
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-eval';"
  }
];
```

## Maintenance

### Regular Updates

```bash
npm update
npm audit fix
```

### Keep Next.js Updated

```bash
npm install next@latest react@latest react-dom@latest
```

## Troubleshooting

### Build Fails on Vercel

1. Check logs in Vercel dashboard
2. Ensure build command is: `npm run build`
3. Check environment variables

### 404 on Routes

Ensure all routes are in App Router:
- All pages in `src/app/`
- Use `page.tsx` for routes

### Images Not Loading

1. Ensure images in `public/` folder
2. Check relative paths
3. Verify image sizes

### Slow Performance

1. Check Image optimization
2. Monitor bundle size: `npm run build -- --analyze`
3. Enable Next.js caching

## Contact Form

To enable email sending:

### Option 1: Resend

```bash
npm install resend
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

### Option 3: Nodemailer

```bash
npm install nodemailer
```

## Analytics Setup

### Google Analytics

Add to `src/app/layout.tsx`:

```typescript
<Script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script
  id="google-analytics"
  dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');`,
  }}
/>
```

## Support & Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)

---

Your portfolio is now ready for the world! 🚀
