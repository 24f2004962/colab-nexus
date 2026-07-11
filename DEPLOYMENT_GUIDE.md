# CoLab Nation Hiring Portal - Complete Guide

## Admin Credentials

**Email:** `colabnation@gmail.in`  
**Password:** `54321`

To create the admin account:
1. Go to `/auth`
2. Click "Setup Super Admin" button
3. Or manually use credentials above to sign in

---

## Key Features Implemented

### 1. Home Page
- **Live Hiring Badge** - "🔴 LIVE HIRING · Apply Now!" emerges prominently
- **Countdown Timer** - Real-time countdown to July 14, 2026 (11:59 PM)
  - Displays Days, Hours, Minutes, Seconds
  - Updates every second
  - Mobile responsive design
- **6 Feature Highlights** - Showcases platform capabilities:
  - Smart Recruitment
  - Tasks & Projects  
  - 5 Departments
  - Role-Based Access
  - Member Directory
  - Live Announcements

### 2. Application Form (4 Steps)
**Step 1: Basic Info**
- Full Name (required)
- Email (required)
- Password (required, min 8 chars)

**Step 2: Contact & Location** 
- Phone Number (NOW COMPULSORY)
- College/Organization (NOW COMPULSORY)
- City (optional)

**Step 3: Department Selection**
- Select from 5 departments
- Radio button selection
- Mobile responsive grid

**Step 4: Professional Profile**
- Resume Upload (NOW COMPULSORY) - Upload PDF/DOC or provide URL
- Portfolio URL, GitHub, LinkedIn URLs
- Skills (comma-separated)
- Bio and Experience (textarea)
- Availability

**Step 5: Review & Submit**
- Review all information
- Confirm terms and conditions
- Submit application

### 3. Application Success Page (NEW)
After successful submission:
- "Crazy thank you!" message
- Clear next steps information
- LinkedIn follow button linking to https://www.linkedin.com/company/colab-nation/
- Sign-in button to access dashboard
- Process timeline:
  1. Review stage
  2. Interview (if selected)
  3. Decision & Onboarding

### 4. Admin Dashboard (ENHANCED)
**For Super Admin:**
- Quick access to Review Applications
- Manage Departments
- Manage Team Members
- Post Announcements
- Statistics cards (tasks, projects, department)
- Admin Center with 4-column action buttons

**For Department Heads:**
- Review Applications
- Manage Projects
- Department-specific dashboard

### 5. Application Management
- Real-time application tracking
- Status updates (Pending, Under Review, Interview, Assignment, Accepted, Rejected, Onboarded)
- Resume storage in Supabase
- Internal notes section
- Batch approval/rejection

---

## Mobile Compatibility

All components are fully optimized for mobile devices:
- Responsive grid layouts (1 column on mobile, 2+ on tablet/desktop)
- Touch-friendly button sizes
- Proper padding and spacing for smaller screens
- Readable text sizes at all breakpoints
- Form fields properly sized for mobile input
- Navigation drawer responsive design

---

## Database Schema

The application uses Supabase PostgreSQL with 11 tables:

1. **applications** - Job applications with resume URLs
2. **profiles** - User profiles and status
3. **user_roles** - Role assignments (super_admin, heads, members)
4. **notifications** - System notifications
5. **projects** - Team projects
6. **tasks** - Project tasks
7. **announcements** - Organization announcements
8. **knowledge_articles** - Knowledge base
9. **events** - Calendar events
10. **member_directory** - Publicly visible member profiles
11. **user_resume_uploads** - Resume storage metadata

All tables have Row-Level Security (RLS) enabled for data protection.

---

## Authentication & Authorization

- Email/Password authentication via Supabase Auth
- No email verification required for applicants
- Role-based access control (RBAC):
  - Super Admin: Full access to all features
  - Department Heads: Department-scoped access
  - Members: Limited to own profile and department features
- Secure password hashing
- Session management

---

## Environment Variables Required

```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<your-publishable-key>
SUPABASE_PROJECT_ID=<your-project-id>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

---

## Deployment Instructions

### Option 1: Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy on push to main branch
4. Domain setup via Vercel DNS

### Option 2: Docker
```bash
docker build -t colab-nation .
docker run -p 5000:5000 colab-nation
```

### Option 3: Manual Server
```bash
npm install
npm run build
npm run dev
```

---

## Form Validation

- **Phone:** Compulsory, max 30 characters
- **College:** Compulsory, max 150 characters
- **Resume:** Compulsory (upload or URL)
- **Email:** Valid email format
- **Password:** Min 8 characters, max 72 characters
- **Terms:** Must be accepted
- **All URLs:** Valid URL format

---

## File Structure

```
src/
├── routes/
│   ├── index.tsx                 # Home page with countdown
│   ├── register.tsx              # 4-step application form
│   ├── auth.tsx                  # Sign-in with admin setup
│   └── _authenticated/
│       ├── dashboard.tsx         # Admin/User dashboard
│       ├── admin.applications.tsx # Application management
│       └── admin.team.tsx        # Team management
├── components/
│   └── ui/                       # UI components (shadcn)
├── lib/
│   ├── workspace-schema.ts       # Validation schemas
│   ├── bootstrap.functions.ts    # Admin setup functions
│   └── admin.functions.ts        # Admin operations
└── integrations/
    └── supabase/                 # Supabase client setup
```

---

## Testing Checklist

- [ ] Home page displays with countdown timer
- [ ] Live hiring badge visible
- [ ] Application form validates phone and college as required
- [ ] Resume upload/URL is compulsory
- [ ] Application success shows thank you with LinkedIn link
- [ ] Admin can login with credentials
- [ ] Admin dashboard shows all action buttons
- [ ] Applications appear in admin panel
- [ ] Mobile layout is responsive
- [ ] Database migrations applied successfully

---

## Support & Troubleshooting

### Admin Can't Login
1. Click "Setup Super Admin" button on /auth
2. Use credentials: colabnation@gmail.in / 54321
3. Check database for user_roles table entry

### Applications Not Showing
1. Verify Supabase connection
2. Check RLS policies on applications table
3. Ensure user has super_admin or department_head role

### Resume Upload Failing
1. Check Supabase storage bucket "resumes" exists
2. Verify service role has upload permissions
3. Check file size limits

### Mobile Display Issues
1. Clear browser cache
2. Check viewport meta tag in HTML
3. Verify Tailwind CSS responsive classes

---

## LinkedIn Integration

The portal includes LinkedIn integration for:
- Follow button on success page linking to: https://www.linkedin.com/company/colab-nation/
- Encourages applicants to follow for updates
- LinkedIn profile link collection in application form

---

## Future Enhancements

- Email notifications for applicants
- Interview scheduling system
- Offer letter generation
- Onboarding checklist
- Integration with messaging platforms
- Applicant scoring/ranking system
- Bulk email campaigns

---

**Last Updated:** July 2026  
**Version:** 1.0 - Production Ready
