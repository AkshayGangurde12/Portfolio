# Vercel Deployment Guide with Environment Variables

## Step 1: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your repository: `AkshayGangurde12/Portfolio`
   - Click "Import"

3. **Configure Project Settings**
   - Framework Preset: Vite (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
vercel

# For production deployment
vercel --prod
```

## Step 2: Add Environment Variables in Vercel

### Method 1: Via Vercel Dashboard (Easiest)

1. **Navigate to Project Settings**
   - Go to your Vercel dashboard: https://vercel.com/dashboard
   - Click on your project (Portfolio)
   - Click "Settings" tab at the top

2. **Add Environment Variables**
   - In the left sidebar, click "Environment Variables"
   - You'll see a form to add variables

3. **Add Each Variable**
   
   **For EmailJS Service ID:**
   - Key: `VITE_EMAILJS_SERVICE_ID`
   - Value: `your_actual_service_id` (e.g., service_abc123xyz)
   - Environment: Select all (Production, Preview, Development)
   - Click "Save"

   **For EmailJS Template ID:**
   - Key: `VITE_EMAILJS_TEMPLATE_ID`
   - Value: `your_actual_template_id` (e.g., template_def456uvw)
   - Environment: Select all (Production, Preview, Development)
   - Click "Save"

   **For EmailJS Public Key:**
   - Key: `VITE_EMAILJS_PUBLIC_KEY`
   - Value: `your_actual_public_key` (e.g., ghi789rst)
   - Environment: Select all (Production, Preview, Development)
   - Click "Save"

4. **Redeploy Your Project**
   - After adding environment variables, you need to redeploy
   - Go to "Deployments" tab
   - Click the three dots (⋯) on the latest deployment
   - Click "Redeploy"
   - Or simply push a new commit to trigger automatic deployment

### Method 2: Via Vercel CLI

```bash
# Add environment variables via CLI
vercel env add VITE_EMAILJS_SERVICE_ID

# You'll be prompted to enter the value
# Then select which environments (production, preview, development)

# Repeat for other variables
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_EMAILJS_PUBLIC_KEY

# List all environment variables
vercel env ls

# Pull environment variables to local
vercel env pull
```

### Method 3: Bulk Import via .env File

1. **Prepare your .env file** (make sure it has your actual values)
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

2. **In Vercel Dashboard:**
   - Go to Settings → Environment Variables
   - Click "Add New" → "Plaintext"
   - Paste all your environment variables
   - Select environments
   - Click "Save"

## Step 3: Verify Environment Variables

### Check in Vercel Dashboard

1. Go to Settings → Environment Variables
2. You should see all three variables listed:
   - ✅ VITE_EMAILJS_SERVICE_ID
   - ✅ VITE_EMAILJS_TEMPLATE_ID
   - ✅ VITE_EMAILJS_PUBLIC_KEY

### Test Your Deployment

1. **Visit your deployed site**
   - URL will be something like: `https://your-portfolio.vercel.app`

2. **Test the contact form**
   - Fill out the contact form
   - Click "Send Message"
   - Check if email is sent successfully

3. **Check browser console**
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for any errors related to EmailJS
   - If you see "EmailJS not configured" warning, environment variables aren't loaded

## Step 4: Troubleshooting

### Environment Variables Not Working?

**Problem:** Contact form shows "EmailJS not configured" warning

**Solutions:**

1. **Verify Variable Names**
   - Must start with `VITE_` prefix
   - Must be exactly: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

2. **Check Environment Selection**
   - Make sure you selected "Production" when adding variables
   - If deploying to preview, also select "Preview"

3. **Redeploy After Adding Variables**
   - Environment variables are only loaded during build time
   - You MUST redeploy after adding/changing variables
   - Go to Deployments → Click ⋯ → Redeploy

4. **Clear Build Cache**
   - In Vercel Dashboard, go to Settings
   - Scroll to "Build & Development Settings"
   - Enable "Clear Build Cache" and redeploy

5. **Check for Typos**
   - Double-check your EmailJS credentials
   - Make sure there are no extra spaces
   - Verify values in EmailJS dashboard match Vercel

### Still Not Working?

**Check Build Logs:**
1. Go to Deployments tab
2. Click on the latest deployment
3. Check the build logs for errors
4. Look for environment variable related messages

**Verify in Code:**
Add temporary logging (remove after testing):
```typescript
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

## Step 5: Automatic Deployments

### Enable Automatic Deployments from GitHub

1. **In Vercel Dashboard:**
   - Go to Settings → Git
   - Ensure "Production Branch" is set to `main`
   - Enable "Automatic Deployments"

2. **Now every time you push to GitHub:**
   - Vercel will automatically build and deploy
   - You'll get a deployment URL
   - Environment variables will be included

### Deploy Specific Branch

- **Production:** Push to `main` branch
- **Preview:** Push to any other branch (e.g., `dev`, `feature/new-feature`)

## Step 6: Custom Domain (Optional)

1. **Add Custom Domain:**
   - Go to Settings → Domains
   - Click "Add"
   - Enter your domain name
   - Follow DNS configuration instructions

2. **Environment Variables Work the Same:**
   - No changes needed for custom domains
   - Variables are available on all domains

## Quick Reference: Environment Variables

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID | `service_abc123xyz` |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID | `template_def456uvw` |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key | `ghi789rst` |

## Important Notes

⚠️ **Security:**
- Environment variables in Vite are exposed to the client
- Only use `VITE_` prefix for public variables
- Never store sensitive secrets (API keys, passwords) in `VITE_` variables
- EmailJS public key is safe to expose (it's meant to be public)

✅ **Best Practices:**
- Always redeploy after changing environment variables
- Test in preview deployments before production
- Keep `.env` file in `.gitignore` (never commit it)
- Use `.env.example` for documentation

🔄 **Deployment Flow:**
1. Update code locally
2. Test with local `.env` file
3. Push to GitHub
4. Vercel auto-deploys
5. Environment variables from Vercel dashboard are used
6. Test deployed site

## Getting Your EmailJS Credentials

If you haven't set up EmailJS yet:

1. **Sign up at EmailJS:**
   - Visit: https://www.emailjs.com/
   - Create free account

2. **Get Service ID:**
   - Go to Email Services
   - Add your email service (Gmail, Outlook, etc.)
   - Copy the Service ID

3. **Get Template ID:**
   - Go to Email Templates
   - Create a new template
   - Copy the Template ID

4. **Get Public Key:**
   - Go to Account → General
   - Copy your Public Key (also called API Key)

5. **Add to Vercel:**
   - Follow Step 2 above

## Support

If you need help:
- Vercel Documentation: https://vercel.com/docs
- EmailJS Documentation: https://www.emailjs.com/docs/
- Check `EMAILJS_SETUP.md` in your project for detailed EmailJS setup

---

**Your Portfolio URL:** Will be provided after deployment (e.g., `https://akshay-portfolio.vercel.app`)
