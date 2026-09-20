# Google Search Console Setup - Complete Guide

Get your KT Construction portfolio indexed and ranked in Google search results.

---

## 📍 What is Google Search Console?

Google Search Console (GSC) is a **free tool** that:
- ✅ Verifies you own your website
- ✅ Shows how Google sees your content
- ✅ Submits pages for indexing
- ✅ Monitors search performance
- ✅ Flags technical issues
- ✅ Improves your search rankings

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Go to Google Search Console
Visit: https://search.google.com/search-console/

### Step 2: Sign in with Google Account
- Use your Gmail account
- Or create a new Google account

### Step 3: Add Property
Click **"Add property"** (top-left)

Two options:
1. **URL Prefix** (easier) - Enter: `https://your-domain.com`
2. **Domain** (advanced) - Requires DNS setup

**Recommended for beginners:** URL Prefix method

---

## ✅ Verification Methods (Choose ONE)

### Method 1: HTML File Upload (Best for Vercel)

**Steps:**

1. Google Search Console → Your property → Settings → Ownership
2. Click **HTML file** verification method
3. Google provides a file: `googleXXXXXXXXXX.html`
4. Download it
5. Add to your project:

```bash
# Place file in public folder
cp ~/Downloads/google*.html ./public/
```

6. Commit and push to GitHub:

```bash
git add public/google*.html
git commit -m "Add Google Search Console verification"
git push
```

7. Vercel automatically deploys (2-3 minutes)
8. File will be at: `https://your-domain.com/google*.html`
9. Return to Google Search Console → Click "Verify"
10. ✅ Done! Should show "Verified" within seconds

---

### Method 2: DNS Record (For Custom Domains)

**Requirements:** You have access to your domain's DNS settings

**Steps:**

1. Google Search Console → Settings → Ownership
2. Click **DNS record** verification method
3. Google shows: `google-site-verification=XXXXXXXXX`
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Add a TXT record:

```
Type: TXT
Name: @
Value: google-site-verification=XXXXXXXXX
```

6. Save changes
7. Return to Google Search Console
8. Click "Verify"
9. ⏳ Wait 24-48 hours for DNS to propagate
10. ✅ Should show "Verified"

---

### Method 3: Meta Tag (Alternative)

**Steps:**

1. Google Search Console → Settings → Ownership
2. Click **Meta tag** verification method
3. Copy the provided meta tag
4. Add to your site's `<head>`:

**File:** `src/routes/__root.tsx`

```tsx
<Meta charset="utf-8" />
<Meta name="google-site-verification" content="XXXXXXXXX" />
```

5. Deploy to Vercel
6. Return to Google Search Console → Verify

---

## 📊 After Verification: Initial Setup

### 1. Submit Your Sitemap

**Google only crawls what you tell it to:**

1. Google Search Console → Sitemaps (left menu)
2. Enter: `https://your-domain.com/sitemap.xml`
3. Click "Submit"

**Note:** Your project already has `/public/sitemap.xml` configured

If you don't see it yet, create one:

**File:** `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ktconstruction.com/</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 2. Request Indexing for Key Pages

1. Google Search Console → URL Inspection (top search bar)
2. Paste your homepage: `https://ktconstruction.com/`
3. Click "Request Indexing"
4. Google will crawl within hours/days

**Repeat for:**
- Project pages
- Services page
- About section (with anchor)

### 3. Add Your Site URL

1. Google Search Console → Settings (left menu)
2. Add your preferred domain:
   - With or without `www`
   - HTTP or HTTPS
3. Choose one as primary

---

## 📈 Monitoring Performance

### What You'll See (24-48 hours after verification)

**Google Search Console Dashboard shows:**

1. **Overview**
   - Pages indexed
   - Total clicks
   - Impressions (how many searches show your site)
   - Average CTR (click-through rate)
   - Average position in search results

2. **Pages Section**
   - Which pages are indexed
   - Which pages have errors
   - Coverage issues

3. **Performance Section** (appears after crawling)
   - Search queries you rank for
   - Your ranking position
   - Click data
   - Device performance (mobile vs desktop)

---

## 🔧 Key Pages to Monitor

Set up monitoring for these key pages:

```
https://ktconstruction.com/
https://ktconstruction.com/#story
https://ktconstruction.com/#work
https://ktconstruction.com/#services
https://ktconstruction.com/#contact
```

**Tip:** Use URL Inspection to check if each is indexed:
1. Copy URL
2. Paste in search bar at top of GSC
3. Google shows: "URL is on Google" ✅

---

## 🚨 Common Issues & Fixes

### Issue: "Discovered but not indexed"
**Solution:**
- Make sure noindex is not set (it isn't in your code)
- Request indexing manually
- Wait 1-2 weeks
- Check for crawl errors

### Issue: "Crawl error"
**Solutions:**
- Check Vercel deployment is successful
- Verify domain pointing correctly
- Check for 404 errors
- Review server logs

### Issue: "Excluded by robots.txt"
**Solution:**
- Check `/public/robots.txt`
- Make sure it doesn't have `Disallow: /`
- Should be: `Allow: /`

### Issue: "Blocked by robots.txt"
**Solution:**
- Verify `robots.txt` allows Googlebot
- Rescan after fixing

---

## 📱 Mobile-First Indexing

Google now primarily crawls mobile versions of sites.

**Your site is mobile-friendly:**
- ✅ Responsive design
- ✅ Touch-friendly buttons
- ✅ Fast loading

**Verify in GSC:**
1. Settings → Crawl → Mobile user agent
2. No errors should appear

---

## 🎯 Optimization Tips for Better Rankings

### 1. Improve Page Titles & Descriptions
**Current meta tags are good, but you can enhance:**

```tsx
// For each page section, add semantic HTML
<article data-section="story">...</article>
<article data-section="services">...</article>
```

### 2. Add Structured Data (Schema.org)

**File:** `src/routes/index.tsx` - Add to `<head>`:

```tsx
<Script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KT Construction",
  "image": "https://ktconstruction.com/logo.png",
  "description": "Residential construction and structural design",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mobile mart, 60ft road",
    "addressLocality": "Shivamogga",
    "addressRegion": "Karnataka",
    "postalCode": "577204",
    "addressCountry": "IN"
  },
  "telephone": "+919019937834",
  "email": "ashokkt1994@gmail.com",
  "url": "https://ktconstruction.com"
})}
</Script>
```

This helps Google understand your business better.

### 3. Build Backlinks
- Share your portfolio on industry directories
- Get mentioned in local directories
- Request links from partner sites

### 4. Regular Content Updates
- Update project gallery regularly
- Publish case studies
- Share testimonials
- Shows Google your site is active

---

## 📊 Reading Your Performance Data

### Example: "Building construction Shivamogga"

You might see:
```
Query: "building construction Shivamogga"
Impressions: 145 (times Google showed your site)
Clicks: 12 (times someone clicked to visit)
Position: 8 (average ranking position)
CTR: 8.3%
```

**Actions to improve:**
- Write better title/description (improves CTR)
- Add more content about this topic
- Build more backlinks (improves position)

---

## 🔒 Privacy & Security

Google Search Console:
- ✅ Doesn't collect personal data from visitors
- ✅ Doesn't interfere with website analytics
- ✅ Is separate from Google Analytics
- ✅ Only shows aggregated data

**Note:** Consider also adding Google Analytics for visitor insights:
1. Create account at analytics.google.com
2. Get tracking ID
3. Add to your site

---

## 📋 Complete Checklist

Verify you've completed:

- [ ] Created Google Search Console account
- [ ] Added property (URL or Domain)
- [ ] Verified ownership (HTML file / DNS / Meta tag)
- [ ] Submitted sitemap.xml
- [ ] Requested indexing for homepage
- [ ] Set preferred domain (www vs non-www)
- [ ] Checked "Pages" section for indexed pages
- [ ] Monitored Performance section
- [ ] Fixed any crawl errors
- [ ] Verified mobile-friendliness

---

## 📚 Advanced: Enhancements (Optional)

### Add Rich Snippets
Help Google show more info in search results:

```tsx
// Portfolio project schema
{
  "@type": "CreativeWork",
  "name": "Urban Residence",
  "image": "project-image.jpg",
  "description": "Three-storey contemporary residence",
  "author": {
    "@type": "Organization",
    "name": "KT Construction"
  }
}
```

### Improve Core Web Vitals
Monitor in GSC → Experience → Core Web Vitals

**Your metrics are already good:**
- ✅ Fast loading (< 3 seconds)
- ✅ Responsive (no layout shift)
- ✅ Interactive (quick response to user input)

### Monitor Index Coverage
GSC → Coverage shows:
- Valid (indexed)
- Excluded (by design)
- Errors (need fixing)

---

## 🎓 Learning Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Search Central Blog](https://developers.google.com/search/blog)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

## 💡 Pro Tips

1. **Check weekly** after launch to monitor indexing
2. **Set up email alerts** for critical issues
3. **Compare GSC data with Analytics** for better insights
4. **Monitor competitors** (see what keywords they rank for)
5. **Use URL parameters** to track campaigns

---

## 🎯 Next Steps

1. ✅ **This week**: Complete verification
2. ✅ **This week**: Submit sitemap
3. ✅ **This week**: Request indexing
4. ⏳ **Next week**: Check Coverage and Performance data
5. 📈 **Ongoing**: Monitor rankings and improve underperforming pages

---

## 📞 Questions?

If Google Search Console shows errors:
1. Read the specific error message
2. Search Google for that error + "fix"
3. Check [Google Search Central](https://developers.google.com/search) docs
4. Ask in Google Search Central Community

**Your site is properly configured and ready for Google indexing!** 🚀
