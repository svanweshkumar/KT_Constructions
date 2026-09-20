# KT Construction Portfolio - Deployment Guide

Complete guide to deploy your portfolio on Vercel with Resend email integration and Google Search Console indexing.

---

## 📋 Prerequisites

Before starting, ensure you have:

- GitHub account (for connecting to Vercel)
- Git installed locally
- Node.js 22+ installed (Vercel can manage this automatically)

---

## 🚀 STEP 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
cd /path/to/portfolio
git init
git add .
git commit -m "Initial commit: KT Construction portfolio"
```

### 1.2 Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository: `kt-construction-portfolio`
3. Don't initialize with README (you have files already)
4. Push your code:

```bash
git remote add origin https://github.com/YOUR-USERNAME/kt-construction-portfolio.git
git branch -M main
git push -u origin main
```

---

## 📧 STEP 2: Set Up Resend for Email

### 2.1 Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email

### 2.2 Get Your API Key

1. Dashboard → API Keys
2. Copy your API key (starts with `re_`)
3. Keep it safe — you'll need it for Vercel

### 2.3 Verify Sender Email

1. Dashboard → Domains
2. Add and verify the sender domain, or use Resend's onboarding sender for testing
3. **Important:** The `RESEND_FROM_EMAIL` domain must be verified before production sending

**Option A: Using Resend's default domain (easiest for testing)**

- Use their provided email for testing first
- Later, verify your business domain for production

**Option B: Verify your custom domain (recommended for production)**

1. Go to Domains → Add Domain
2. Add your production email domain
3. Follow DNS setup instructions
4. Once verified, use the matching address as `RESEND_FROM_EMAIL`

For testing before your domain is verified, use Resend's permitted onboarding sender and configure it as `RESEND_FROM_EMAIL`.

### 2.4 Update Environment Variables

Create `.env.local` in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=ashokkt1994@gmail.com
```

Test locally:

```bash
npm install
npm run dev
```

---

## 🔗 STEP 3: Deploy to Vercel

### 3.1 Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in with GitHub
3. Click **"New Project"**
4. Select your `kt-construction-portfolio` repository
5. Click **Import**

### 3.2 Configure Environment Variables

In Vercel Dashboard:

1. **Settings** → **Environment Variables**
2. Add these server-only variables:

```
RESEND_API_KEY = re_your_key_here
RESEND_FROM_EMAIL = your-verified-sender@example.com
RESEND_TO_EMAIL = your-inbox@example.com
```

Never prefix these variables with `VITE_`.

3. Make sure it's set for: **Production**, **Preview**, and **Development**
4. Click **Save**

### 3.3 Project Settings

**Build & Output Settings**:

- **Framework Preset**: `TanStack Start`
- **Build Command**: Leave the Vercel default
- **Output Directory**: Leave the Vercel default
- **Install Command**: `npm ci` when using `package-lock.json`

### 3.4 Deploy

1. Click **Deploy**
2. Wait for build to complete (2-3 minutes)
3. Once successful, you'll get a URL: `https://your-project.vercel.app`
4. Test the contact form with a test email

---

## ✅ STEP 4: Set Up Google Search Console

### 4.1 Verify Ownership

#### Method 1: DNS Record (Recommended)

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **"Start now"** → **URL Prefix**
3. Enter your domain: `https://ktconstruction.com`
4. Choose **DNS record** verification method
5. Copy the TXT record Google provides
6. Add to your domain's DNS settings
7. Return to Google Search Console
8. Click **Verify** (may take 24 hours)

#### Method 2: HTML File Upload

1. Google Search Console → Verification → HTML file
2. Download the verification file
3. Upload to your public folder: `/public/google[verification-code].html`
4. Deploy to Vercel
5. Return to Google Search Console and verify

#### Method 3: Vercel Domain Connection (Easiest)

If using Vercel's domain service:

1. Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Google Search Console auto-detects and verifies

### 4.2 Submit Sitemap

1. Google Search Console → Sitemaps
2. Add sitemap URL: `https://ktconstruction.com/sitemap.xml`
3. Google will crawl and index your pages

### 4.3 Monitor Performance

In Search Console, you can see:

- Which pages are indexed
- Search keywords
- Click-through rates
- Mobile usability issues
- Security issues

---

## 🔍 STEP 5: SEO Optimization

### 5.1 Meta Tags (Already configured in your code)

Your pages already have:

- ✅ Title tags
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter cards

### 5.2 Sitemap & Robots.txt

Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ktconstruction.com/</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ktconstruction.com/#story</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ktconstruction.com/#work</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Create `/public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://ktconstruction.com/sitemap.xml

# Disallow:
# /admin
# /private
```

### 5.3 Performance Optimization

Your site is already optimized:

- ✅ Image lazy loading
- ✅ CSS animations with reduced motion respect
- ✅ Responsive design
- ✅ Fast load times

---

## 🧪 Testing

### Test Form Submission

1. Go to your deployed site
2. Scroll to Contact section
3. Fill in the form with test data
4. Submit
5. Check your email for:
   - Inquiry received email
   - Confirmation email to the user

### Test Email Headers

1. The form emails include:
   - `From:` Your Resend verified email
   - `Reply-To:` User's email address
   - `Subject:` Includes user's name for easy filtering

### Check Google Search Console

1. Search Console → Indexing → Pages
2. Wait 24-48 hours
3. Your homepage should appear as indexed
4. Monitor crawl stats

---

## 🔐 Security Checklist

- ✅ API endpoint validates all inputs
- ✅ HTML escaping to prevent XSS
- ✅ Email validation
- ✅ Environment variables not exposed in code
- ✅ Headers configured in `vercel.json`
- ✅ No sensitive data in client-side code

---

## 📱 Custom Domain Setup (Optional)

If you have a custom domain (e.g., ktconstruction.com):

### Vercel Dashboard:

1. Settings → Domains
2. Add domain: `ktconstruction.com`
3. Add www subdomain: `www.ktconstruction.com`

### At Your Registrar (GoDaddy, Namecheap, etc.):

Update DNS records:

```
Type    Name          Value
A       @             76.76.19.165
CNAME   www           cname.vercel-dns.com
```

(Exact IPs may vary; Vercel provides exact values)

---

## 🐛 Troubleshooting

### Form Not Sending

1. Check Resend API key in Vercel environment variables
2. Verify sender email is authenticated
3. Check browser console for errors (F12 → Console)
4. Check Vercel Function logs (Deployments → Function logs)

### Email Going to Spam

1. Verify your sender domain in Resend
2. Add DKIM, SPF, DMARC records
3. Send test email to Gmail, Outlook

### Pages Not Indexed

1. Verify domain in Google Search Console
2. Submit sitemap
3. Wait 24-48 hours
4. Check for indexing errors in Search Console

### Build Failing on Vercel

1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in package.json
3. Local test: `npm run build`
4. Push to GitHub and redeploy

---

## 📊 Monitoring & Maintenance

### Weekly

- Check form submissions
- Monitor Google Search Console for indexing errors

### Monthly

- Review Google Analytics (if added)
- Update content if needed
- Check for any failed deployments

### Quarterly

- Review Google Search Console performance data
- Update meta descriptions if needed
- Check mobile usability in Search Console

---

## 🚀 Next Steps

1. **Custom Domain** → Add your business domain
2. **Analytics** → Add Google Analytics or Vercel Analytics
3. **Content** → Update project images and descriptions
4. **Performance** → Monitor Core Web Vitals in Search Console

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Resend Docs**: https://resend.com/docs
- **Google Search Console Help**: https://support.google.com/webmasters
- **React Router Docs**: https://tanstack.com/router/latest

---

**Deployment successful! Your site is now live and ready for clients to find you online.** 🎉
