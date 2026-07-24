import os

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle

ACCENT = HexColor("#31408f")
INK = HexColor("#16181c")
MUTED = HexColor("#54585f")

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "resume.pdf")

doc = SimpleDocTemplate(
    OUT,
    pagesize=A4,
    leftMargin=13 * mm,
    rightMargin=13 * mm,
    topMargin=9 * mm,
    bottomMargin=8 * mm,
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
    "contact", fontName="Helvetica", fontSize=8.7, leading=11.5, textColor=MUTED,
)
styles["section"] = ParagraphStyle(
    "section", fontName="Helvetica-Bold", fontSize=10.4, leading=12.6, textColor=ACCENT,
    spaceBefore=6, spaceAfter=2.4,
)
styles["summary"] = ParagraphStyle(
    "summary", fontName="Helvetica", fontSize=9, leading=12.1, textColor=INK, spaceAfter=0,
)
styles["skillline"] = ParagraphStyle(
    "skillline", fontName="Helvetica", fontSize=8.7, leading=11.6, textColor=INK, spaceAfter=2,
)
styles["jobtitle"] = ParagraphStyle(
    "jobtitle", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=INK, spaceAfter=0,
)
styles["jobmeta"] = ParagraphStyle(
    "jobmeta", fontName="Helvetica-Oblique", fontSize=8.5, leading=11, textColor=MUTED, spaceAfter=2,
)
styles["bullet"] = ParagraphStyle(
    "bullet", fontName="Helvetica", fontSize=8.7, leading=11.6, textColor=INK,
    leftIndent=10, bulletIndent=0, spaceAfter=1.2,
)
styles["projtitle"] = ParagraphStyle(
    "projtitle", fontName="Helvetica-Bold", fontSize=9.2, leading=11.5, textColor=INK, spaceAfter=0.5,
)
styles["projbody"] = ParagraphStyle(
    "projbody", fontName="Helvetica", fontSize=8.6, leading=11.3, textColor=INK, spaceAfter=0,
)
styles["eduline"] = ParagraphStyle(
    "eduline", fontName="Helvetica", fontSize=8.85, leading=12, textColor=INK,
)

def section_header(text):
    return [
        Paragraph(text, styles["section"]),
        HRFlowable(width="100%", thickness=0.9, color=ACCENT, spaceBefore=0, spaceAfter=4.5),
    ]

story = []

# ---------- Header ----------
story.append(Paragraph("VAIBHAV BHUJBAL", styles["name"]))
story.append(Paragraph("Full Stack Developer &bull; Angular Specialist &bull; Enterprise Software Engineer", styles["title"]))
story.append(Paragraph(
    "vaibhavbhujbal994@gmail.com &nbsp;|&nbsp; vaibhavbhujbal.dev &nbsp;|&nbsp; "
    "github.com/vaibhav9579 &nbsp;|&nbsp; linkedin.com/in/vaibhavbhujbal &nbsp;|&nbsp; India (Remote-Ready)",
    styles["contact"],
))
story.append(Spacer(1, 3))
story.append(HRFlowable(width="100%", thickness=1.3, color=INK, spaceBefore=0, spaceAfter=7))

# ---------- Summary ----------
story += section_header("PROFESSIONAL SUMMARY")
story.append(Paragraph(
    "Full-stack engineer with 3+ years shipping enterprise-grade ERP and real-time systems for healthcare, "
    "education, and industrial clients &mdash; 6+ organizations, 50K+ end users, 15+ production releases. "
    "Specialist in Angular and React/Next.js on the frontend, Node.js/Express on the backend, and multi-tenant "
    "architecture with API-level role-based access control (RBAC). "
    "<b>AI-augmented developer</b>: uses Claude, GitHub Copilot/Codex, Gemini, and agentic IDE workflows daily "
    "as core engineering infrastructure to ship production-grade code faster without cutting quality. "
    "Consistently ties engineering decisions to measurable outcomes &mdash; sub-200ms APIs, 99.9% uptime, "
    "60&ndash;70% reductions in load time and manual work.",
    styles["summary"],
))
story.append(Spacer(1, 2))

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
    "Shipped a multi-tenant Hospital ERP now running across 3 facilities and 50K+ patient records, with RBAC enforced at the API layer, not just the UI",
    "Built a real-time dashboard engine (WebSocket, MQTT, Node-RED, RabbitMQ) streaming live industrial data at 99.9% uptime under continuous device load",
    "Cut core dashboard load time by 65% through code-splitting and query optimization; sustained sub-200ms response on core API lookups",
    "Reduced billing discrepancies by 70% by designing a configurable, rule-driven multi-facility billing engine",
    "Embedded Claude and GitHub Copilot/Codex into the daily workflow for code review, refactors, and architecture exploration, compressing delivery cycles without sacrificing code quality",
]
for b in exp1:
    story.append(Paragraph(f"&bull;&nbsp; {b}", styles["bullet"]))
story.append(Spacer(1, 2.5))

story.append(Paragraph("Full Stack Developer", styles["jobtitle"]))
story.append(Paragraph("Freelance / Contract Engineering &nbsp;|&nbsp; 2022 &ndash; 2023", styles["jobmeta"]))
exp2 = [
    "Delivered a School ERP for 1,200+ students across 3 role-based portals (admin, teacher, parent) on one shared codebase",
    "Cut manual attendance paperwork by 90% with a real-time, role-driven attendance and fee workflow",
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
     "3 facilities live, 50K+ patient records, &lt;200ms core API response."),
    ("Dashboard Builder", "React, Next.js, WebSocket, Node-RED, MQTT, RabbitMQ",
     "Drag-and-drop, ThingsBoard-style real-time dashboard engine for industrial device data. "
     "10K+ live data points/min, 99.9% uptime, zero data loss via durable queueing."),
    ("School ERP", "Angular, Node.js, MongoDB, REST APIs, RBAC",
     "Role-driven school management platform for attendance, fees, and parent communication. "
     "1,200+ students, 90% less manual attendance paperwork."),
]
for name, stack, body in projects:
    story.append(Paragraph(f"{name} &nbsp;<font color='#54585f' size=8>&mdash; {stack}</font>", styles["projtitle"]))
    story.append(Paragraph(body, styles["projbody"]))
    story.append(Spacer(1, 3))

# ---------- Foundations / Engineering Practice ----------
story += section_header("ENGINEERING FOUNDATIONS")
story.append(Paragraph(
    "Self-directed, project-first path through data structures, databases, and web fundamentals &mdash; into production "
    "Angular/Node systems within the first year, and into multi-tenancy, RBAC, and real-time architecture by year two. "
    "Ongoing practice: applying AI-assisted development (Claude, Copilot/Codex, Gemini) as a standing part of the "
    "engineering process, from architecture drafts to code review.",
    styles["eduline"],
))

doc.build(story)
print("done")
