/* EDIT ME. [EDIT] marks placeholders. Upload images to public/img/. */
const E = "[EDIT] ";
window.SITE = {
  links: { email: "mailto:your-email@example.com", linkedin: "https://www.linkedin.com/in/your-profile" }, // [EDIT]
  exp: [
    { org: "Lovely Professional University", role: "Digital Marketing / Social Media Team", dates: E + "dates", desc: "Social media campaigns, creative development, content creation, trend analysis and monthly content analysis." },
    { org: "Prospiq", role: "HR Intern", dates: E + "dates", desc: E + "Add verified responsibilities." },
    { org: "Mozo Hunt", role: "Marketing & HR Intern", dates: E + "dates", desc: "Promotional creatives, Canva designs, Meta campaigns and targeted advertising. " + E + "Add HR responsibilities." }
  ],
  projects: [
    { no: "01", title: "LPU Official Social Media Campaigns", cat: "Social Media", img: "img/p1.jpg", obj: "Encourage students to join LPU's social community and showcase their talents.", tags: ["Campaign concept", "Creative direction", "Promotional creatives"] },
    { no: "02", title: "LPU Through My Lens", cat: "Social Media", img: "img/p2.jpg", obj: "Celebrate the university through students' photography and authentic campus perspectives.", tags: ["Visual identity", "Hashtag direction", "Storytelling"] },
    { no: "03", title: "LPU 25 Years: Then & Now", cat: "Anniversary Campaign", img: "img/p3.jpg", obj: "Communicate the university's journey through nostalgic and contemporary visual storytelling.", tags: ["Then-and-now narrative", "9:16 creative direction"] },
    { no: "04", title: "Mozo Hunt Digital Marketing", cat: "Marketing & Advertising", img: "img/p4.jpg", obj: "", tags: ["Canva designs", "Meta campaigns", "Meta Business Suite", "Targeted advertising"] },
    { no: "05", title: "Dolphive Workforce Governance", cat: "AI · HR Technology Concept", img: "img/dolphive-card.svg", obj: "A proposed AI-driven workforce governance concept exploring competency-based task allocation, workload balance, performance visibility and transparent HR decision-making.", tags: ["Workforce Governance", "Organizational Justice", "Competency Matching", "Performance Management", "KPI Analytics", "B2B SaaS"] },
    { no: "06", title: "Psychometric Testing & Student Behavioural Assessment", cat: "Research", img: "img/p6.jpg", obj: E + "Add your role, objective and method.", tags: [E + "tags"] }
  ],
  skills: ["Social Media Marketing", "Content Strategy", "Creative Strategy", "Meta Business Suite", "Meta Ads", "Canva", "Audience Research", "Trend Analysis", "SEO", "Content Creation", "Google Analytics 4", "Performance Analysis"],
  learning: ["Google Analytics 4"] // shown with a 'learning' tag until proficiency is established
};

// CAMPAIGN LINKS: one list per project number. Replace slot(3) with your real links, e.g.
// "01": [{t:"Instagram post", u:"https://www.instagram.com/p/XXXX/"}, {t:"Reel", u:"https://..."}]
// Entries without an http(s) URL show as "add URL" notes, never as dead buttons.
const slot = n => Array.from({ length: n }, (_, i) => ({ t: "Campaign link " + (i + 1), u: "" }));
SITE.campaignPages = [
  { t: "A Simple Yes", u: "campaigns/a-simple-yes.html" },
  { t: "One Destination", u: "campaigns/one-destination.html" },
  { t: "Into the Verto Verse", u: "campaigns/into-the-verto-verse.html" },
  { t: "Induction Was Never This Fun", u: "campaigns/induction-was-never-this-fun.html" },
  { t: "Every Colour", u: "campaigns/every-colour.html" },
  { t: "The 25 Effect", u: "campaigns/the-25-effect.html" }
];
const cp = i => SITE.campaignPages[i];
// Mapping is an assumption: [EDIT] move pages between projects if needed. Empty list = no campaign-links block.
SITE.campaignLinks = { "01": [cp(0), cp(1), cp(3), cp(4)], "02": [cp(2)], "03": [cp(5)], "04": [{ t: "Summer Internship Report 2025", u: "internship-report-2025.html" }], "05": [{ t: "Explore Dolphive Concept", u: "projects/dolphive.html" }], "06": [] };