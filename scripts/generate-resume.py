import os

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle

ACCENT = HexColor("#31408f")
INK = HexColor("#16181c")
MUTED = HexColor("#54585f")
METRIC_HEX = "#0f7d6c"

def hi(s):
    return f'<b><font color="{METRIC_HEX}">{s}</font></b>'

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "resume.pdf")

doc = SimpleDocTemplate(
    OUT,
    pagesize=A4,
    leftMargin=12 * mm,
    rightMargin=12 * mm,
    topMargin=6.5 * mm,
    bottomMargin=5 * mm,
    title="Vaibhav Bhujbal - Full Stack Developer Resume",
    author="Vaibhav Bhujbal",
    subject="Resume",
)

styles = {}
styles["name"] = ParagraphStyle(
    "name", fontName="Helvetica-Bold", fontSize=23, leading=25, textColor=INK, spaceAfter=1,
)
styles["title"] = ParagraphStyle(
    "title", fontName="Helvetica", fontSize=11.3, leading=14, textColor=ACCENT, spaceAfter=2,
)
styles["contact"] = ParagraphStyle(
    "contact", fontName="Helvetica", fontSize=8.6, leading=11, textColor=MUTED,
)
styles["section"] = ParagraphStyle(
    "section", fontName="Helvetica-Bold", fontSize=10.2, leading=12.2, textColor=ACCENT,
    spaceBefore=3.5, spaceAfter=1.8,
)
styles["summary"] = ParagraphStyle(
    "summary", fontName="Helvetica", fontSize=8.85, leading=11.8, textColor=INK, spaceAfter=0,
)
styles["skillline"] = ParagraphStyle(
    "skillline", fontName="Helvetica", fontSize=8.55, leading=11, textColor=INK, spaceAfter=1.5,
)
styles["jobtitle"] = ParagraphStyle(
    "jobtitle", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=INK, spaceAfter=0,
)
styles["jobmeta"] = ParagraphStyle(
    "jobmeta", fontName="Helvetica-Oblique", fontSize=8.5, leading=10.6, textColor=MUTED, spaceAfter=1.5,
)
styles["bullet"] = ParagraphStyle(
    "bullet", fontName="Helvetica", fontSize=8.55, leading=11, textColor=INK,
    leftIndent=10, bulletIndent=0, spaceAfter=0.8,
)
styles["projtitle"] = ParagraphStyle(
    "projtitle", fontName="Helvetica-Bold", fontSize=9.2, leading=11.5, textColor=INK, spaceAfter=0.5,
)
styles["projbody"] = ParagraphStyle(
    "projbody", fontName="Helvetica", fontSize=8.55, leading=11, textColor=INK, spaceAfter=0,
)
styles["eduline"] = ParagraphStyle(
    "eduline", fontName="Helvetica", fontSize=8.85, leading=12, textColor=INK,
)
styles["highlight"] = ParagraphStyle(
    "highlight", fontName="Helvetica-Bold", fontSize=8.5, leading=10.8, textColor=INK, spaceAfter=1,
)

def section_header(text):
    return [
        Paragraph(text, styles["section"]),
        HRFlowable(width="100%", thickness=0.9, color=ACCENT, spaceBefore=0, spaceAfter=3.5),
    ]

story = []

# ---------- Header ----------
story.append(Paragraph("VAIBHAV BHUJBAL", styles["name"]))
story.append(Paragraph("Full Stack Developer &bull; Angular, React/Next.js, Node.js &bull; Enterprise Systems Engineer", styles["title"]))
story.append(Paragraph(
    "vaibhavbhujbal994@gmail.com &nbsp;|&nbsp; vaibhavbhujbal.dev &nbsp;|&nbsp; "
    "github.com/vaibhav9579 &nbsp;|&nbsp; linkedin.com/in/vaibhavbhujbal &nbsp;|&nbsp; India (Remote-Ready)",
    styles["contact"],
))
story.append(Spacer(1, 2))
story.append(HRFlowable(width="100%", thickness=1.3, color=INK, spaceBefore=0, spaceAfter=5))

# ---------- Summary ----------
story += section_header("PROFESSIONAL SUMMARY")
story.append(Paragraph(
    "Full-stack engineer who owns systems end-to-end &mdash; from stakeholder requirements through architecture, "
    "delivery, and production outcomes &mdash; for enterprise ERP and real-time platforms serving healthcare, "
    "education, and industrial clients. Track record: "
    f"{hi('50K+')} users, {hi('99.9%')} uptime, {hi('sub-200ms')} APIs, and {hi('60&ndash;70%')} cuts in load time, billing errors, and manual "
    f"overhead, across {hi('6+')} organizations and {hi('15+')} production releases in {hi('3+')} years. Deep in Angular, React/Next.js, "
    "Node.js/Express, and multi-tenant architecture with API-level RBAC. <b>AI-augmented by design</b>: Claude, "
    "GitHub Copilot/Codex, and Gemini are standing infrastructure in the daily workflow, not experiments &mdash; "
    "compounding delivery speed without trading off architectural rigor or code quality.",
    styles["summary"],
))
story.append(Spacer(1, 2))

highlights = [
    f"Architected multi-tenant systems live across {hi('3 industries')} &mdash; {hi('50K+')} end users on shared infrastructure",
    f"{hi('99.9%')} uptime and {hi('sub-200ms')} APIs sustained under real production load, not benchmarks",
    f"{hi('60&ndash;70%')} cuts in load time, billing errors, and manual workflow across shipped systems",
    "AI-augmented daily driver: Claude, GitHub Copilot/Codex, Gemini, and agentic IDE workflows",
]
for h in highlights:
    story.append(Paragraph(f"&bull;&nbsp; {h}", styles["highlight"]))
story.append(Spacer(1, 1.5))

# ---------- Skills ----------
story += section_header("TECHNICAL SKILLS")
skill_rows = [
    ("Languages &amp; Frontend", "TypeScript, JavaScript, Angular, React, Next.js, RxJS, HTML5, CSS3, TailwindCSS"),
    ("Backend &amp; APIs", "Node.js, Express.js, ASP.NET Framework, REST API Design, Node-RED"),
    ("Databases", "PostgreSQL, MongoDB, MySQL"),
    ("Real-Time &amp; Messaging", "WebSocket, MQTT, RabbitMQ, Real-Time Dashboards, Pub/Sub Systems"),
    ("Cloud &amp; DevOps", "AWS, Git, GitHub, CI/CD, Linux"),
    ("Architecture &amp; Security", "System Design, Multi-Tenant Architecture, RBAC, Enterprise ERP Systems, API Design"),
    ("AI-Augmented Engineering", "Claude (agentic coding &amp; code review), GitHub Copilot / Codex, Google Gemini, "
                                   "Antigravity (agentic IDE), Perplexity (technical research) &mdash; daily, pro-tier workflow"),
]
for label, value in skill_rows:
    story.append(Paragraph(f"<b>{label}:</b> {value}", styles["skillline"]))
story.append(Spacer(1, 2))

# ---------- Experience ----------
story += section_header("PROFESSIONAL EXPERIENCE")

story.append(Paragraph("Full Stack Developer &mdash; Angular Specialist", styles["jobtitle"]))
story.append(Paragraph("Enterprise Software Team &nbsp;|&nbsp; 2023 &ndash; Present", styles["jobmeta"]))
exp1 = [
    f"Owned architecture and delivery of a multi-tenant Hospital ERP now running across {hi('3 facilities')} and {hi('50K+')} patient records, enforcing RBAC at the API layer to close a class of authorization bugs at the source",
    f"Designed, built, and performance-tuned a real-time dashboard engine (WebSocket, MQTT, Node-RED, RabbitMQ) &mdash; cut load time {hi('65%')} via code-splitting and query optimization while sustaining {hi('99.9%')} uptime and {hi('sub-200ms')} API response under continuous industrial device load",
    f"Redesigned the billing engine into a configurable, rule-driven system, cutting billing discrepancies {hi('70%')} and removing a recurring source of customer escalations",
    "Partnered directly with hospital and plant-floor stakeholders to translate day-to-day operations into system architecture and product decisions, not just feature tickets",
    "Drove adoption of AI-augmented engineering (Claude, GitHub Copilot/Codex) across code review, refactors, and architecture exploration, compressing delivery cycles without sacrificing quality",
]
for b in exp1:
    story.append(Paragraph(f"&bull;&nbsp; {b}", styles["bullet"]))
story.append(Spacer(1, 1.8))

story.append(Paragraph("Full Stack Developer", styles["jobtitle"]))
story.append(Paragraph("Freelance / Contract Engineering &nbsp;|&nbsp; 2022 &ndash; 2023", styles["jobmeta"]))
exp2 = [
    f"Owned end-to-end delivery of a School ERP for {hi('1,200+')} students across {hi('3 role-based portals')} (admin, teacher, parent) on one shared codebase",
    f"Redesigned attendance and fee workflows to be real-time and role-driven, cutting manual paperwork {hi('90%')}",
    "Built and deployed production Node.js/Express REST APIs on AWS; designed schemas across MongoDB, PostgreSQL, and MySQL",
]
for b in exp2:
    story.append(Paragraph(f"&bull;&nbsp; {b}", styles["bullet"]))
story.append(Spacer(1, 2))

# ---------- Projects ----------
story += section_header("SELECTED PROJECTS")
projects = [
    ("Hospital ERP", "Angular, Node.js, Express, PostgreSQL, REST APIs, RBAC",
     "Multi-tenant hospital management platform: patient records, ward/bed management, billing engine. "
     f"{hi('3 facilities')} live, {hi('50K+')} patient records, {hi('&lt;200ms')} core API response."),
    ("Dashboard Builder", "React, Next.js, WebSocket, Node-RED, MQTT, RabbitMQ",
     "Drag-and-drop, ThingsBoard-style real-time dashboard engine for industrial device data. "
     f"{hi('10K+')} live data points/min, {hi('99.9%')} uptime, zero data loss via durable queueing."),
    ("School ERP", "Angular, Node.js, MongoDB, REST APIs, RBAC",
     "Role-driven school management platform for attendance, fees, and parent communication. "
     f"{hi('1,200+')} students, {hi('90%')} less manual attendance paperwork."),
]
for name, stack, body in projects:
    story.append(Paragraph(f"{name} &nbsp;<font color='#54585f' size=8>&mdash; {stack}</font>", styles["projtitle"]))
    story.append(Paragraph(body, styles["projbody"]))
    story.append(Spacer(1, 2))

# ---------- Engineering Philosophy ----------
story += section_header("ENGINEERING PHILOSOPHY")
story.append(Paragraph(
    "Every system above is designed around one question: what breaks first at 10x the users, data, or edge cases? "
    "Answering that early &mdash; not after an outage &mdash; is why these platforms run multi-tenant, real-time, "
    "and role-audited by design, not by patch. Self-directed path from data structures straight into production "
    "ownership.",
    styles["eduline"],
))

doc.build(story)
print("done")
