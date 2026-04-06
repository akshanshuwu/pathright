export const quizQuestions = [
  {
    id: 'q1_education',
    type: 'single',
    question: 'What is your highest level of education or current study?',
    options: [
      { value: 'tech_grad', label: 'Completed or studying Engineering / Computer Science / IT' },
      { value: 'nontech_grad', label: 'Completed or studying Commerce / Arts / Science (non-CS)' },
      { value: 'dropout', label: 'Left formal education or dropped out' },
      { value: 'postgrad', label: 'Post-graduation (MBA / MTech / MA or above)' },
      { value: 'school', label: 'Currently in school or just passed 12th' }
    ]
  },
  {
    id: 'q2_coding',
    type: 'single',
    question: 'How much coding or programming experience do you have?',
    options: [
      { value: 'none', label: 'Zero. I have never written a single line of code' },
      { value: 'little', label: 'A little — I know some basics (HTML, basic Python, or similar)' },
      { value: 'some', label: 'Some — I have built small projects or done coursework' },
      { value: 'decent', label: 'Decent — I can build working apps but am not professional level' },
      { value: 'experienced', label: 'Experienced — I code regularly and have real projects to show' }
    ]
  },
  {
    id: 'q3_skills',
    type: 'multi',
    question: 'Which of these do you feel naturally good at? Pick all that apply.',
    options: [
      { value: 'writing', label: 'Writing clearly and communicating ideas' },
      { value: 'numbers', label: 'Working with numbers, spreadsheets, or data' },
      { value: 'coding', label: 'Coding, logic, or problem-solving with computers' },
      { value: 'design', label: 'Visual design, aesthetics, or making things look good' },
      { value: 'talking', label: 'Talking to people, persuading, or explaining things' },
      { value: 'organizing', label: 'Organizing, planning, and managing projects or tasks' },
      { value: 'research', label: 'Researching, analyzing, or investigating things deeply' },
      { value: 'building', label: 'Building or fixing things — I am hands-on and technical' }
    ]
  },
  {
    id: 'q4_workstyle',
    type: 'single',
    question: 'Which best describes how you like to work?',
    options: [
      { value: 'solo', label: 'Alone and independently — I focus better without distractions' },
      { value: 'team', label: 'With a team — I thrive on collaboration and discussion' },
      { value: 'hybrid', label: 'Mix of both — some solo deep work, some team collaboration' },
      { value: 'freelance', label: 'Independently for clients — I want flexibility and variety' },
      { value: 'entrepreneurial', label: 'Building my own thing — I want to be my own boss' }
    ]
  },
  {
    id: 'q5_learning',
    type: 'single',
    question: 'How do you learn best?',
    options: [
      { value: 'videos', label: 'Watching videos and following along step by step' },
      { value: 'reading', label: 'Reading documentation, articles, or books' },
      { value: 'doing', label: 'Just diving in and building things — learning by doing' },
      { value: 'structured', label: 'Structured courses with clear milestones and assessments' },
      { value: 'community', label: 'Learning with others — forums, Discord, study groups' }
    ]
  },
  {
    id: 'q6_time',
    type: 'single',
    question: 'How many hours per day can you realistically dedicate to learning?',
    options: [
      { value: 'less1', label: 'Less than 1 hour — I am very busy with other commitments' },
      { value: 'one2', label: '1 to 2 hours — consistent but limited time' },
      { value: 'two3', label: '2 to 3 hours — solid daily commitment' },
      { value: 'three4', label: '3 to 4 hours — I am treating this seriously' },
      { value: 'four', label: '4+ hours — this is my full-time focus right now' }
    ]
  },
  {
    id: 'q7_goal',
    type: 'single',
    question: 'What is your primary goal right now?',
    options: [
      { value: 'job_fast', label: 'Get a stable, well-paying job as fast as possible' },
      { value: 'freelance', label: 'Start earning through freelancing on my own terms' },
      { value: 'growth', label: 'Build a high-growth career that compounds over time' },
      { value: 'startup', label: 'Build my own startup or product' },
      { value: 'passion', label: 'Do work I genuinely enjoy and find meaningful' }
    ]
  },
  {
    id: 'q8_location',
    type: 'single',
    question: 'Where are you and what is your work location preference?',
    options: [
      { value: 'metro_office', label: 'Metro city (Delhi/Bangalore/Mumbai etc.) — open to office' },
      { value: 'metro_remote', label: 'Metro city — strongly prefer remote work' },
      { value: 'tier2_office', label: 'Tier 2 city (Bhopal/Jaipur/Lucknow etc.) — open to office' },
      { value: 'tier2_remote', label: 'Tier 2 or smaller city — need remote or online income' },
      { value: 'anywhere', label: 'Open to relocating or working anywhere' }
    ]
  },
  {
    id: 'q9_tech_interest',
    type: 'single',
    question: 'Which technology area sounds most exciting to you?',
    options: [
      { value: 'ai_future', label: 'Artificial Intelligence — the future of how people work' },
      { value: 'systems', label: 'Systems and infrastructure — how big applications actually run' },
      { value: 'visual', label: 'Visual web — building beautiful, interactive websites and apps' },
      { value: 'data', label: 'Data and insights — finding patterns and helping businesses decide' },
      { value: 'security', label: 'Security — protecting systems and legally hacking into them' }
    ]
  },
  {
    id: 'q10_creativity',
    type: 'single',
    question: 'Do you prefer creative, open-ended work or structured, logical work?',
    options: [
      { value: 'very_creative', label: 'Very creative — I like open-ended problems with no single right answer' },
      { value: 'mostly_creative', label: 'Mostly creative but with some structure' },
      { value: 'balanced', label: 'Equal mix of creative and logical' },
      { value: 'mostly_logical', label: 'Mostly logical — I prefer clear problems with clear solutions' },
      { value: 'very_logical', label: 'Very logical and systematic — I like rules, patterns, and precision' }
    ]
  },
  {
    id: 'q11_patience',
    type: 'single',
    question: 'How do you feel about spending hours debugging or setting up complex tools?',
    options: [
      { value: 'love_it', label: 'I love it — that kind of problem-solving is satisfying to me' },
      { value: 'ok_with_it', label: 'I am okay with it when I know there is a reward at the end' },
      { value: 'tolerate_it', label: 'I can tolerate it but it is not my favorite part' },
      { value: 'dislike_it', label: 'I dislike it — I prefer quicker, more visible results' },
      { value: 'avoid_it', label: 'I avoid it as much as possible — I want tools that just work' }
    ]
  },
  {
    id: 'q12_income_urgency',
    type: 'single',
    question: 'How urgently do you need income from your new skill?',
    options: [
      { value: 'asap', label: 'Very urgently — I need income within 60 days' },
      { value: 'soon', label: 'Soon — within 3 to 4 months' },
      { value: 'moderate', label: 'Within 6 months — I have some runway' },
      { value: 'patient', label: 'Within a year is fine' },
      { value: 'no_pressure', label: 'No pressure at all — I am learning for the long game' }
    ]
  },
  {
    id: 'q13_biz_interest',
    type: 'single',
    question: 'How interested are you in understanding how businesses work and make decisions?',
    options: [
      { value: 'very', label: 'Very interested — I want to understand the business side of tech' },
      { value: 'somewhat', label: 'Somewhat — I am curious but it is not my primary focus' },
      { value: 'neutral', label: 'Neutral — I will engage with it if required' },
      { value: 'less', label: 'Less interested — I prefer pure technical work' },
      { value: 'not', label: 'Not interested — I want to build or code, not analyze' }
    ]
  },
  {
    id: 'q14_security_mindset',
    type: 'single',
    question: 'When you use an app or website, do you ever wonder how it could be hacked?',
    options: [
      { value: 'always', label: 'Yes, always — I naturally think about vulnerabilities and edge cases' },
      { value: 'sometimes', label: 'Sometimes — especially when I hear about a data breach in the news' },
      { value: 'rarely', label: 'Rarely — I use things without thinking about how they work internally' },
      { value: 'never', label: 'Never — security is not something I think about' }
    ]
  },
  {
    id: 'q15_ai_usage',
    type: 'single',
    question: 'How do you currently use AI tools like ChatGPT, Gemini, or Claude?',
    options: [
      { value: 'daily_heavy', label: 'Daily and heavily — AI is part of how I work and create' },
      { value: 'daily_casual', label: 'Daily but casually — mostly for quick questions or writing help' },
      { value: 'sometimes', label: 'Sometimes — a few times a week for specific tasks' },
      { value: 'rarely', label: 'Rarely — I have tried it but do not use it regularly' },
      { value: 'not_yet', label: 'Not yet — I have not really explored AI tools' }
    ]
  },
  {
    id: 'q16_visual_vs_backend',
    type: 'single',
    question: 'Which of these would excite you more to build?',
    options: [
      { value: 'visual_app', label: 'A beautiful, interactive web app that people love using' },
      { value: 'backend_system', label: 'An automated system that processes thousands of requests reliably' },
      { value: 'data_dashboard', label: 'A dashboard that shows live business insights from real data' },
      { value: 'ai_tool', label: 'An AI-powered tool that solves a real problem for people' },
      { value: 'security_audit', label: 'A security audit that finds vulnerabilities before hackers do' }
    ]
  },
  {
    id: 'q17_salary_passion',
    type: 'single',
    question: 'What matters more to you in your career right now?',
    options: [
      { value: 'salary_first', label: 'Salary first — I need financial security and good pay' },
      { value: 'growth_first', label: 'Growth first — I want skills that compound and lead to big pay later' },
      { value: 'passion_first', label: 'Passion first — I want to enjoy my work day to day' },
      { value: 'freedom_first', label: 'Freedom first — flexible hours, remote, self-employment' },
      { value: 'impact_first', label: 'Impact first — I want my work to matter and make a difference' }
    ]
  },
  {
    id: 'q18_personality',
    type: 'multi',
    question: 'Which of these words describe you best? Pick all that apply.',
    options: [
      { value: 'curious', label: 'Curious — I love learning new things constantly' },
      { value: 'patient', label: 'Patient — I am okay with slow, methodical progress' },
      { value: 'creative', label: 'Creative — I think visually and enjoy making things' },
      { value: 'analytical', label: 'Analytical — I enjoy breaking down problems into parts' },
      { value: 'competitive', label: 'Competitive — I like challenges and beating benchmarks' },
      { value: 'communicator', label: 'Communicator — I am good at explaining things to others' },
      { value: 'builder', label: 'Builder — I love creating things from scratch' },
      { value: 'organized', label: 'Organized — I like systems, checklists, and structure' }
    ]
  }
];
