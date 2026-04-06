import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getRecommendations(answers) {
  const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });
  const prompt = buildPrompt(answers);
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const clean = text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

function buildPrompt(a) {
  const s = (v) => Array.isArray(v) ? v.join(', ') : (v || 'not answered');
  return `
You are PathRight's AI advisor. Analyze the user's quiz answers and recommend
their best-matching courses from PathRight's catalog of exactly 5 courses.

PATHRIGHT'S 5 COURSES (only recommend from these — no others):
- genai          : GenAI & Prompt Engineering
- devops         : DevOps & Cloud Engineering
- frontend       : Frontend Development (HTML, CSS, JavaScript, React)
- data-analytics : Data Analytics (Excel, SQL, Python, Power BI)
- cybersecurity  : Cybersecurity & Ethical Hacking

USER'S ANSWERS:
Education: ${s(a.q1_education)}
Coding experience: ${s(a.q2_coding)}
Natural skills: ${s(a.q3_skills)}
Work style: ${s(a.q4_workstyle)}
Learning style: ${s(a.q5_learning)}
Daily time: ${s(a.q6_time)}
Primary goal: ${s(a.q7_goal)}
Location: ${s(a.q8_location)}
Tech interest: ${s(a.q9_tech_interest)}
Creativity level: ${s(a.q10_creativity)}
Patience for debugging: ${s(a.q11_patience)}
Income urgency: ${s(a.q12_income_urgency)}
Business interest: ${s(a.q13_biz_interest)}
Security mindset: ${s(a.q14_security_mindset)}
AI tools usage: ${s(a.q15_ai_usage)}
Ideal project: ${s(a.q16_visual_vs_backend)}
Priority: ${s(a.q17_salary_passion)}
Personality: ${s(a.q18_personality)}

INSTRUCTIONS:
Read ALL answers together holistically like a human counselor would.
Do NOT just keyword-match. Think about the whole person.
Recommend exactly 3 courses ranked by fit (best first).
Be personal and specific — mention details from their actual answers.

RESPOND ONLY IN THIS EXACT JSON (no preamble, no markdown, just JSON):
{
  "userSummary": "2-3 sentences describing this person based on their answers",
  "recommendations": [
    {
      "courseId": "exact-course-id",
      "matchScore": 85,
      "headline": "6-10 word headline specific to this user",
      "whyItFitsYou": "3-4 sentences explaining why this matches them specifically",
      "firstStep": "One concrete action they can take today to start"
    }
  ]
}
  `;
}
