# CoLab Nation - Hiring Portal Admin Setup

## Admin Login Credentials

**Email:** `colabnation@gmail.in`  
**Password:** `54321`

> ⚠️ **Important**: Change these credentials immediately after first login in production environment.

---

## Key Features Implemented

### 1. ✅ Application Form Changes (Step 4)
- **Phone Number**: Now **REQUIRED** - Must provide valid phone number
- **College/Organization**: Now **REQUIRED** - Must specify college or organization name
- **Resume**: Now **REQUIRED** - Applicants must either:
  - Upload a PDF/DOC file directly
  - Provide a URL link to their resume
- Visual warning message displays on step 4 indicating resume is compulsory

### 2. ✅ Live Hiring Countdown (Home Page)
- **Real-time countdown timer** showing:
  - Days remaining
  - Hours remaining
  - Minutes remaining
  - Seconds remaining
- **Deadline**: July 14, 2026 (11:59 PM)
- **Live Badge**: "🔴 LIVE HIRING · Apply Now!" badge on hero section
- Auto-updates every second with smooth transitions

### 3. ✅ Enhanced Features Section
Now displays 6 key features:
1. **Smart Recruitment** - Full applicant pipeline with resumes, interviews, assignments
2. **Tasks & Projects** - Kanban boards, timelines, calendars for team collaboration
3. **5 Departments** - Technical, Content & Design, Marketing, PR, Events with dedicated dashboards
4. **Role-Based Access** - Secure permissions system with RLS policies
5. **Member Directory** - Discover team members and build network
6. **Live Announcements** - Organization-wide communications

---

## Form Validation Summary

### Step 1: Account
- ✅ Full Name (required, 2-100 chars)
- ✅ Email (required, valid email)
- ✅ Password (required, 8-72 chars)

### Step 2: Personal Info
- ✅ **Phone** (required, validated)
- ✅ **College/Organization** (required, validated)
- City (optional)

### Step 3: Department Selection
- ✅ Department (required, one of: Technical, Content & Design, Marketing, PR, Events)

### Step 4: Profile & Resume
- Portfolio URL (optional, if provided must be valid URL)
- GitHub URL (optional, if provided must be valid URL)
- LinkedIn URL (optional, if provided must be valid URL)
- **Resume URL** (required, must be valid URL OR file upload)
- **Resume File Upload** (required, must be PDF/DOC/DOCX)
- Skills (optional, comma-separated)
- Short bio (optional)
- Experience (optional)
- Availability (optional)
- Terms & Conditions (required, must accept)

### Step 5: Review & Submit
- Shows summary of all information
- Final verification before submission

---

## Database Integration

All applications are automatically:
1. Stored in the `applications` table
2. Associated with authenticated user
3. Tracked with timestamps
4. Searchable in admin dashboard

---

## Admin Dashboard Access

After login, admins can:
1. **View all applications** - See all submitted applications
2. **Filter by status** - Pending, Under Review, Interview, Assignment, Accepted, Rejected, Onboarded
3. **Change application status** - Move through recruitment pipeline
4. **Manage team** - Add/remove/edit department heads and members
5. **View analytics** - Track recruitment metrics

---

## Security Notes

- ✅ All passwords are hashed with Supabase Auth
- ✅ Row-level security (RLS) enforces permissions
- ✅ Resume files stored securely in private storage bucket
- ✅ Department-scoped approvals prevent unauthorized access
- ✅ Super Admin can override any restrictions

---

## Testing Checklist

- [x] Admin can login with provided credentials
- [x] Phone number validation works (required)
- [x] College validation works (required)
- [x] Resume upload is enforced before submission
- [x] Countdown timer displays and updates correctly
- [x] Live hiring badge visible on home page
- [x] Enhanced features section displays all 6 features
- [x] All form steps validate correctly
- [x] Applications saved to database successfully

---

## Need Help?

For support or questions, contact the development team.
