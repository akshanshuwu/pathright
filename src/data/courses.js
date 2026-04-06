export const courses = {
  'genai': {
    id: 'genai',
    name: 'GenAI & Prompt Engineering',
    tagline: 'Build AI-powered tools and automate work using the latest language models',
    icon: '🤖',
    colors: {
      bg: 'amber-50',
      text: 'amber-700',
      border: 'amber-200',
      button: 'amber-600',
      badge: 'amber-100',
    },
    overview: {
      description: 'Learn to harness the power of Generative AI — from crafting perfect prompts to building real AI-powered applications using Python, LangChain, and modern LLM APIs.',
      whoFor: [
        'Non-tech graduates who want to enter the AI field without a CS degree',
        'Marketing or content professionals who want to automate their work using AI',
        'Anyone who already uses ChatGPT daily and wants to go deeper'
      ],
      whoNotFor: [
        'People who want to build AI models from scratch',
        'Those who hate reading documentation'
      ],
      difficulty: 'Beginner to Intermediate',
      prerequisites: 'Basic computer literacy. Python knowledge is a bonus, not required.',
      timeToIncome: '60-90 days',
      salary: {
        fresher: 'INR 6-12 LPA',
        mid: 'INR 12-25 LPA',
        senior: 'INR 25-45+ LPA'
      },
      companies: ['TCS', 'Infosys', 'Wipro', 'Razorpay', 'Freshworks', 'Startups']
    },
    skills: [
      { name: 'Prompt Engineering', level: 'Intermediate', use: 'Write prompts that get precise, reliable AI outputs' },
      { name: 'Python for AI', level: 'Beginner-Intermediate', use: 'Write scripts to automate tasks with AI APIs' },
      { name: 'OpenAI / Gemini API', level: 'Intermediate', use: 'Connect AI models to apps' },
      { name: 'LangChain', level: 'Beginner', use: 'Build multi-step AI workflows and chatbots' },
      { name: 'RAG', level: 'Beginner', use: 'Make AI answer questions from your documents' }
    ],
    roadmap: {
      phase1: {
        title: 'Foundation',
        theme: 'Understand how AI works, master prompt engineering',
        weeks: [
          {
            week: 1,
            focus: 'AI Fundamentals & Tool Setup',
            daily: '1.5-2 hours/day',
            tasks: [
              { id: 'p1w1t1', text: 'Understand what LLMs are and how they work' },
              { id: 'p1w1t2', text: 'Create accounts: OpenAI, Google AI Studio, Hugging Face' },
              { id: 'p1w1t3', text: 'Learn basic prompt anatomy: Role + Task + Context + Format' },
              { id: 'p1w1t4', text: 'Write 20 prompts for different scenarios' },
              { id: 'p1w1t5', text: 'Setup VS Code and install Python 3.11+' }
            ],
            milestone: 'You can explain what an LLM is and write structured prompts'
          },
          {
            week: 2,
            focus: 'Core Prompting Techniques',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w2t1', text: 'Practice zero-shot prompting with 10 examples' },
              { id: 'p1w2t2', text: 'Practice few-shot prompting with classification tasks' },
              { id: 'p1w2t3', text: 'Learn Chain-of-Thought prompting for reasoning' },
              { id: 'p1w2t4', text: 'Create your first personal prompt library in Notion' },
              { id: 'p1w2t5', text: 'Write a prompt that generates a startup pitch deck outline' }
            ],
            milestone: 'You have a prompt library of 30+ templates'
          },
          {
            week: 3,
            focus: 'Python for AI — Absolute Basics',
            daily: '2-2.5 hours/day',
            tasks: [
              { id: 'p1w3t1', text: 'Install Python 3.11, pip, and set up virtual environment' },
              { id: 'p1w3t2', text: 'Learn Python basics: variables, strings, lists, functions' },
              { id: 'p1w3t3', text: 'Install and use the openai Python library' },
              { id: 'p1w3t4', text: 'Write your first API call to ChatGPT in Python' },
              { id: 'p1w3t5', text: 'Build a command-line tool that calls ChatGPT API' }
            ],
            milestone: 'You can write a Python script that calls the ChatGPT API'
          },
          {
            week: 4,
            focus: 'Advanced Prompting & Automation',
            daily: '2-2.5 hours/day',
            tasks: [
              { id: 'p1w4t1', text: 'Learn structured output prompting with JSON format' },
              { id: 'p1w4t2', text: 'Master system message engineering' },
              { id: 'p1w4t3', text: 'Build an automated email writer tool' },
              { id: 'p1w4t4', text: 'Build a social media content generator' },
              { id: 'p1w4t5', text: 'Introduction to the Gemini API' }
            ],
            milestone: 'You can build a complete AI automation tool using Python'
          }
        ]
      },
      phase2: {
        title: 'Hands-On Building',
        theme: 'Build real AI applications — chatbots, RAG systems, and AI agents',
        weeks: [
          {
            week: 5,
            focus: 'LangChain Fundamentals',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w5t1', text: 'Install LangChain and understand core components' },
              { id: 'p2w5t2', text: 'Build your first LangChain chain: Q&A bot' },
              { id: 'p2w5t3', text: 'Add memory to your chain for conversation history' },
              { id: 'p2w5t4', text: 'Learn LangChain prompt templates' },
              { id: 'p2w5t5', text: 'Build a customer support chatbot' }
            ],
            milestone: 'You have a working chatbot with conversation history'
          },
          {
            week: 6,
            focus: 'RAG — Make AI Answer from Your Documents',
            daily: '2.5-3 hours/day',
            tasks: [
              { id: 'p2w6t1', text: 'Understand what RAG is and how it works' },
              { id: 'p2w6t2', text: 'Install ChromaDB and sentence-transformers' },
              { id: 'p2w6t3', text: 'Load a PDF and split into chunks' },
              { id: 'p2w6t4', text: 'Create embeddings and store in ChromaDB' },
              { id: 'p2w6t5', text: 'Build a PDF Q&A bot with source citations' }
            ],
            milestone: 'You can build a RAG system that answers questions from documents'
          },
          {
            week: 7,
            focus: 'AI Agents — AI That Takes Action',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w7t1', text: 'Understand AI agents and the ReAct framework' },
              { id: 'p2w7t2', text: 'Install LangChain agents toolkit' },
              { id: 'p2w7t3', text: 'Give your agent tools: web search, calculator' },
              { id: 'p2w7t4', text: 'Build a research agent that searches and summarizes' },
              { id: 'p2w7t5', text: 'Build a data extraction agent' }
            ],
            milestone: 'You have a working AI agent that can search the web'
          },
          {
            week: 8,
            focus: 'Capstone Project — Build an AI Product',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w8t1', text: 'Choose your capstone project idea' },
              { id: 'p2w8t2', text: 'Build the full system: frontend + backend' },
              { id: 'p2w8t3', text: 'Add error handling and clean UI' },
              { id: 'p2w8t4', text: 'Deploy on Hugging Face Spaces or Replit' },
              { id: 'p2w8t5', text: 'Record demo video and share on LinkedIn' }
            ],
            milestone: 'You have a deployed, live AI application'
          }
        ]
      },
      phase3: {
        title: 'Job Ready',
        theme: 'Build portfolio, apply for jobs, start freelancing',
        weeks: [
          {
            week: 9,
            focus: 'Portfolio & Resume',
            daily: '2 hours/day',
            tasks: [
              { id: 'p3w9t1', text: 'Organize your projects on GitHub with README files' },
              { id: 'p3w9t2', text: 'Create a portfolio page on Notion or HTML site' },
              { id: 'p3w9t3', text: 'Write your resume highlighting AI tools and projects' },
              { id: 'p3w9t4', text: 'Optimize LinkedIn profile' },
              { id: 'p3w9t5', text: 'Write 3 LinkedIn posts about your projects' }
            ],
            milestone: 'Your GitHub, LinkedIn, and portfolio tell a coherent story'
          },
          {
            week: 10,
            focus: 'Job Hunting — Employed Route',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w10t1', text: 'Apply to 5-10 roles per day on job portals' },
              { id: 'p3w10t2', text: 'Tailor your resume for each application' },
              { id: 'p3w10t3', text: 'Cold connect with 5 recruiters per day on LinkedIn' },
              { id: 'p3w10t4', text: 'Prepare for technical interviews' },
              { id: 'p3w10t5', text: 'Practice mock interviews with ChatGPT' }
            ],
            milestone: 'You have 50+ active applications and interview calls'
          },
          {
            week: 11,
            focus: 'Freelancing Route — First Client',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w11t1', text: 'Create a profile on Upwork' },
              { id: 'p3w11t2', text: 'Bid on 5-10 projects per day' },
              { id: 'p3w11t3', text: 'Offer competitive rates to start' },
              { id: 'p3w11t4', text: 'Find local businesses that need AI integration' },
              { id: 'p3w11t5', text: 'Close your first project' }
            ],
            milestone: 'You have landed your first paid freelance project'
          },
          {
            week: 12,
            focus: 'Specialize & Level Up',
            daily: '2 hours/day',
            tasks: [
              { id: 'p3w12t1', text: 'Pick one specialization area' },
              { id: 'p3w12t2', text: 'Learn OpenAI Assistants API' },
              { id: 'p3w12t3', text: 'Explore fine-tuning concepts' },
              { id: 'p3w12t4', text: 'Learn multi-modal AI with GPT-4o and Gemini' },
              { id: 'p3w12t5', text: 'Join AI communities and follow researchers' }
            ],
            milestone: 'You have a specialization and an active income source'
          }
        ]
      }
    },
    resources: {
      free: [
        { name: 'Andrej Karpathy — Neural Networks: Zero to Hero', type: 'YouTube', url: 'https://youtube.com', why: 'Best explanation of how LLMs work at a fundamental level' },
        { name: 'Google AI Studio (Gemini)', type: 'Playground', url: 'https://aistudio.google.com', why: 'Experiment with Gemini models — free tier is generous' },
        { name: 'OpenAI Cookbook', type: 'Documentation', url: 'https://cookbook.openai.com', why: 'Official examples and guides from OpenAI' },
        { name: 'LangChain Documentation', type: 'Documentation', url: 'https://python.langchain.com', why: 'Official docs — start with Quickstart' }
      ],
      paid: [
        { name: 'DeepLearning.AI — LangChain for LLM App Dev', type: 'Course', cost: 'INR 3000', url: 'https://coursera.org', why: 'By LangChain creator Harrison Chase' },
        { name: 'Udemy — LangChain: Develop LLM-powered apps', type: 'Course', cost: 'INR 500', url: 'https://udemy.com', why: 'Hands-on coding course, project-based' }
      ]
    },
    projects: [
      { id: 1, name: 'AI Email Assistant', what: 'Python tool that generates professional emails from bullet points', skills: 'OpenAI API, Python, prompt templates', time: '3-5 hours', phase: '1' },
      { id: 2, name: 'PDF Question Answering Bot', what: 'Upload any PDF and ask questions with source citations', skills: 'RAG, ChromaDB, LangChain, PyPDF', time: '8-12 hours', phase: '2' },
      { id: 3, name: 'YouTube Video Summarizer', what: 'Paste a YouTube URL, get structured summary', skills: 'YouTube API, LangChain, summarization', time: '6-10 hours', phase: '2' },
      { id: 4, name: 'AI Research Agent', what: 'Autonomously searches web and writes structured reports', skills: 'LangChain agents, Tavily API, ReAct', time: '10-15 hours', phase: '3' },
      { id: 5, name: 'AI Customer Support Bot', what: 'Domain-specific chatbot with Streamlit web app', skills: 'RAG, LangChain, Streamlit, ChromaDB', time: '15-20 hours', phase: '3' }
    ],
    careers: [
      { title: 'Prompt Engineer', experience: '0-1 year', salary: 'INR 6-15 LPA', skills: 'Design and optimize prompts for AI systems' },
      { title: 'Junior AI Developer', experience: '0-1 year', salary: 'INR 6-12 LPA', skills: 'Build AI-powered features using LLM APIs' },
      { title: 'GenAI Engineer', experience: '1-3 years', salary: 'INR 12-25 LPA', skills: 'Design and deploy full GenAI systems' },
      { title: 'LLM Engineer', experience: '2-4 years', salary: 'INR 20-40 LPA', skills: 'Fine-tune models, optimize inference' }
    ],
    certifications: [
      'Google Professional Machine Learning Engineer',
      'IBM AI Engineering Specialization (Coursera)',
      'DeepLearning.AI Specializations',
      'AWS Certified Machine Learning Specialty'
    ]
  },

  'devops': {
    id: 'devops',
    name: 'DevOps & Cloud Engineering',
    tagline: 'Ship code faster, manage cloud infrastructure, and automate deployments',
    icon: '⚙️',
    colors: {
      bg: 'teal-50',
      text: 'teal-700',
      border: 'teal-200',
      button: 'teal-600',
      badge: 'teal-100',
    },
    overview: {
      description: 'Master the tools that power modern software delivery — from Linux and Git to Docker, Kubernetes, CI/CD pipelines, and AWS cloud infrastructure.',
      whoFor: [
        'CS/IT graduates who want a high-paying alternative to software development',
        'System administrators and network engineers who want to modernize their skills',
        'Anyone who wants to understand how Netflix, Swiggy, or Zomato infrastructure works'
      ],
      whoNotFor: [
        'People who get frustrated easily — DevOps requires patience and methodical debugging'
      ],
      difficulty: 'Intermediate',
      prerequisites: 'Comfortable with computers, basic understanding of what a server is',
      timeToIncome: '90 days',
      salary: {
        fresher: 'INR 6-14 LPA',
        mid: 'INR 15-25 LPA',
        senior: 'INR 30-60+ LPA'
      },
      companies: ['Infosys', 'TCS', 'Wipro', 'Amazon AWS', 'Razorpay', 'Zomato']
    },
    skills: [
      { name: 'Linux Command Line', level: 'Intermediate', use: 'Navigate servers, manage files, troubleshoot issues' },
      { name: 'Git & GitHub', level: 'Intermediate', use: 'Version control, branching, pull requests' },
      { name: 'Docker', level: 'Intermediate', use: 'Containerize applications, manage images' },
      { name: 'Kubernetes', level: 'Beginner', use: 'Deploy and manage containerized apps' },
      { name: 'CI/CD (GitHub Actions)', level: 'Intermediate', use: 'Automate build, test, and deploy pipelines' },
      { name: 'AWS', level: 'Beginner-Mid', use: 'Deploy apps on AWS, manage cloud resources' },
      { name: 'Terraform', level: 'Beginner', use: 'Define infrastructure using code' }
    ],
    roadmap: {
      phase1: {
        title: 'Foundation',
        theme: 'Linux, Git, networking — the bedrock',
        weeks: [
          {
            week: 1,
            focus: 'Linux Fundamentals',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w1t1', text: 'Install Ubuntu 22.04 on VirtualBox or WSL2' },
              { id: 'p1w1t2', text: 'Practice 50 commands: ls, cd, pwd, mkdir, rm, cp, mv' },
              { id: 'p1w1t3', text: 'Learn file permissions: chmod, chown' },
              { id: 'p1w1t4', text: 'Process management: ps, top, kill, systemctl' },
              { id: 'p1w1t5', text: 'Text editing with vim' }
            ],
            milestone: 'You can confidently navigate a Linux server via command line'
          },
          {
            week: 2,
            focus: 'Networking & Git',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w2t1', text: 'Learn networking basics: IP, DNS, HTTP/HTTPS, TCP/UDP' },
              { id: 'p1w2t2', text: 'SSH: connect to remote server, generate SSH keys' },
              { id: 'p1w2t3', text: 'Git fundamentals: init, clone, add, commit, push, pull' },
              { id: 'p1w2t4', text: 'Branching: branch, checkout, merge' },
              { id: 'p1w2t5', text: 'GitHub: create repos, open pull requests' }
            ],
            milestone: 'You can SSH into a server and collaborate using Git'
          },
          {
            week: 3,
            focus: 'Bash Scripting & Python',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w3t1', text: 'Bash variables, conditionals, loops, functions' },
              { id: 'p1w3t2', text: 'Write scripts for automated backups and health checks' },
              { id: 'p1w3t3', text: 'Learn crontab for scheduling scripts' },
              { id: 'p1w3t4', text: 'Python basics for DevOps: read/write files, HTTP requests' },
              { id: 'p1w3t5', text: 'Write a website monitoring script' }
            ],
            milestone: 'You can write Bash scripts that automate server tasks'
          },
          {
            week: 4,
            focus: 'CI/CD with GitHub Actions',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p1w4t1', text: 'Understand CI/CD concepts' },
              { id: 'p1w4t2', text: 'GitHub Actions: workflows, triggers, jobs, steps' },
              { id: 'p1w4t3', text: 'Build your first pipeline: auto-run tests on push' },
              { id: 'p1w4t4', text: 'Add deployment step to test server' },
              { id: 'p1w4t5', text: 'Secrets management with GitHub Secrets' }
            ],
            milestone: 'You have a working CI/CD pipeline on GitHub Actions'
          }
        ]
      },
      phase2: {
        title: 'Containers & Cloud',
        theme: 'Docker, Kubernetes, and AWS',
        weeks: [
          {
            week: 5,
            focus: 'Docker Fundamentals',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w5t1', text: 'Understand containerization and install Docker Desktop' },
              { id: 'p2w5t2', text: 'Write your first Dockerfile' },
              { id: 'p2w5t3', text: 'Build and run Docker images' },
              { id: 'p2w5t4', text: 'Docker networking and volumes' },
              { id: 'p2w5t5', text: 'Docker Compose for multi-container apps' }
            ],
            milestone: 'You can containerize any web application using Docker'
          },
          {
            week: 6,
            focus: 'Kubernetes (K8s) Basics',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w6t1', text: 'Understand K8s architecture and install minikube' },
              { id: 'p2w6t2', text: 'Learn kubectl commands' },
              { id: 'p2w6t3', text: 'Deploy your Docker app to K8s' },
              { id: 'p2w6t4', text: 'Scaling: kubectl scale deployment' },
              { id: 'p2w6t5', text: 'ConfigMaps and Secrets in K8s' }
            ],
            milestone: 'You can deploy and scale apps on Kubernetes'
          },
          {
            week: 7,
            focus: 'AWS Cloud — Core Services',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w7t1', text: 'Create AWS account and learn IAM' },
              { id: 'p2w7t2', text: 'EC2: launch VM, SSH into it, deploy app' },
              { id: 'p2w7t3', text: 'S3: create buckets, upload files, static hosting' },
              { id: 'p2w7t4', text: 'VPC: subnets, route tables, security groups' },
              { id: 'p2w7t5', text: 'Elastic Load Balancer and RDS' }
            ],
            milestone: 'You can deploy a full web app stack on AWS'
          },
          {
            week: 8,
            focus: 'Terraform — Infrastructure as Code',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w8t1', text: 'Install Terraform and configure AWS credentials' },
              { id: 'p2w8t2', text: 'Terraform basics: providers, resources, variables' },
              { id: 'p2w8t3', text: 'Write Terraform code to provision EC2 and S3' },
              { id: 'p2w8t4', text: 'Learn terraform init, plan, apply, destroy' },
              { id: 'p2w8t5', text: 'Provision complete 3-tier infrastructure with Terraform' }
            ],
            milestone: 'You can provision AWS environment using Terraform code'
          }
        ]
      },
      phase3: {
        title: 'Monitoring & Job Ready',
        theme: 'Observability, security, portfolio, and job applications',
        weeks: [
          {
            week: 9,
            focus: 'Monitoring & Observability',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p3w9t1', text: 'Install Prometheus on K8s cluster' },
              { id: 'p3w9t2', text: 'Connect Grafana to Prometheus' },
              { id: 'p3w9t3', text: 'Build dashboards for CPU, memory, request rate' },
              { id: 'p3w9t4', text: 'Configure alerts in Grafana' },
              { id: 'p3w9t5', text: 'Learn AWS CloudWatch basics' }
            ],
            milestone: 'You have a live monitoring dashboard for your app'
          },
          {
            week: 10,
            focus: 'Security & DevSecOps Basics',
            daily: '2 hours/day',
            tasks: [
              { id: 'p3w10t1', text: 'Learn security fundamentals for DevOps' },
              { id: 'p3w10t2', text: 'AWS IAM best practices: MFA, role-based access' },
              { id: 'p3w10t3', text: 'Docker security: scan images with Trivy' },
              { id: 'p3w10t4', text: 'GitHub Actions security best practices' },
              { id: 'p3w10t5', text: 'Audit your projects for security issues' }
            ],
            milestone: 'You understand DevSecOps principles'
          },
          {
            week: 11,
            focus: 'Capstone Project & Portfolio',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w11t1', text: 'Build complete DevOps pipeline capstone project' },
              { id: 'p3w11t2', text: 'Document everything with architecture diagrams' },
              { id: 'p3w11t3', text: 'Write LinkedIn post explaining your project' },
              { id: 'p3w11t4', text: 'Prepare resume listing all tools' },
              { id: 'p3w11t5', text: 'Start applying: 50+ job applications' }
            ],
            milestone: 'Your capstone project is live and documented'
          },
          {
            week: 12,
            focus: 'Interview Prep & Certification',
            daily: '2-3 hours/day',
            tasks: [
              { id: 'p3w12t1', text: 'Practice common DevOps interview questions' },
              { id: 'p3w12t2', text: 'System design basics practice' },
              { id: 'p3w12t3', text: 'Live debugging exercises' },
              { id: 'p3w12t4', text: 'Start AWS Cloud Practitioner exam prep' },
              { id: 'p3w12t5', text: 'Mock interviews and salary negotiation prep' }
            ],
            milestone: 'You are interview-ready for junior DevOps roles'
          }
        ]
      }
    },
    resources: {
      free: [
        { name: 'TechWorld with Nana', type: 'YouTube', url: 'https://youtube.com', why: 'Best YouTube channel for DevOps' },
        { name: 'Linux Journey', type: 'Interactive Site', url: 'https://linuxjourney.com', why: 'Browser-based Linux learning' },
        { name: 'KodeKloud Free Courses', type: 'Online Courses', url: 'https://kodekloud.com', why: 'Docker and Kubernetes for beginners' },
        { name: 'AWS Free Tier', type: 'Cloud Platform', url: 'https://aws.amazon.com/free', why: '12 months of free AWS usage' }
      ],
      paid: [
        { name: 'KodeKloud Pro', type: 'Platform', cost: 'INR 2000/month', url: 'https://kodekloud.com', why: 'Best hands-on DevOps learning platform' },
        { name: 'Udemy — DevOps Bootcamp', type: 'Course', cost: 'INR 500', url: 'https://udemy.com', why: 'Covers Docker, K8s, Ansible, Terraform' }
      ]
    },
    projects: [
      { id: 1, name: 'Multi-VM App Deployment', what: 'Use Vagrant to spin up 3 VMs with web, app, and database servers', skills: 'Linux, Vagrant, networking, Bash', time: '8 hours', phase: '1' },
      { id: 2, name: 'Containerized Microservices App', what: 'Dockerize frontend and backend with Docker Compose', skills: 'Docker, Docker Compose, Docker Hub', time: '10-15 hours', phase: '2' },
      { id: 3, name: 'Full CI/CD Pipeline', what: 'GitHub Actions pipeline that builds, tests, and deploys to EC2', skills: 'GitHub Actions, Docker, EC2, SSH', time: '12-18 hours', phase: '2' },
      { id: 4, name: 'AWS Infrastructure with Terraform', what: 'Terraform code for complete production environment', skills: 'Terraform, AWS (VPC, EC2, ALB, RDS, S3)', time: '20-30 hours', phase: '3' },
      { id: 5, name: 'Kubernetes Monitoring Stack', what: 'Deploy app to K8s with Prometheus and Grafana monitoring', skills: 'Kubernetes, Helm, Prometheus, Grafana', time: '10-15 hours', phase: '3' }
    ],
    careers: [
      { title: 'Junior DevOps Engineer', experience: '0-1 year', salary: 'INR 6-12 LPA', skills: 'Linux, Git, CI/CD, Docker basics' },
      { title: 'Cloud Support Engineer', experience: '0-1 year', salary: 'INR 5-10 LPA', skills: 'AWS basics, troubleshooting' },
      { title: 'DevOps Engineer', experience: '1-3 years', salary: 'INR 12-22 LPA', skills: 'Docker, K8s, Terraform, full CI/CD' },
      { title: 'Site Reliability Engineer', experience: '2-4 years', salary: 'INR 18-30 LPA', skills: 'SLOs, incident response, automation' }
    ],
    certifications: [
      'AWS Cloud Practitioner (CLF-C02)',
      'AWS Solutions Architect Associate (SAA-C03)',
      'Certified Kubernetes Administrator (CKA)',
      'HashiCorp Terraform Associate'
    ]
  },

  'frontend': {
    id: 'frontend',
    name: 'Frontend Development',
    tagline: 'Build beautiful, interactive websites and web apps people love using',
    icon: '💻',
    colors: {
      bg: 'purple-50',
      text: 'purple-700',
      border: 'purple-200',
      button: 'purple-600',
      badge: 'purple-100',
    },
    overview: {
      description: 'Build the websites and apps that people see and interact with — from your first HTML page to deploying a full React application visible to the whole world.',
      whoFor: [
        'Creative people who like visual work',
        'Designers wanting to code',
        'Anyone who admires websites'
      ],
      whoNotFor: [
        'People who hate visual design or have no patience for pixel-level details'
      ],
      difficulty: 'Beginner',
      prerequisites: 'Basic computer literacy. No coding experience needed.',
      timeToIncome: '60-90 days',
      salary: {
        fresher: 'INR 3.5-8 LPA',
        mid: 'INR 10-20 LPA',
        senior: 'INR 22-50 LPA'
      },
      companies: ['Flipkart', 'Meesho', 'Zomato', 'Razorpay', 'Freshworks', 'Startups']
    },
    skills: [
      { name: 'HTML5', level: 'Intermediate', use: 'Structure any webpage with semantic markup' },
      { name: 'CSS3 + Flexbox + Grid', level: 'Intermediate', use: 'Create responsive, beautiful layouts' },
      { name: 'JavaScript (ES6+)', level: 'Intermediate', use: 'Add interactivity, handle events, fetch data' },
      { name: 'React', level: 'Intermediate', use: 'Build complex UIs with components' },
      { name: 'Tailwind CSS', level: 'Intermediate', use: 'Utility-first styling' },
      { name: 'REST APIs', level: 'Beginner-Mid', use: 'Fetch data from backend APIs' }
    ],
    roadmap: {
      phase1: {
        title: 'Foundation',
        theme: 'HTML, CSS, and JavaScript — the three pillars',
        weeks: [
          {
            week: 1,
            focus: 'HTML — Structure of the Web',
            daily: '1.5-2 hours/day',
            tasks: [
              { id: 'p1w1t1', text: 'Learn core HTML tags: div, p, h1-h6, a, img, ul/ol/li' },
              { id: 'p1w1t2', text: 'Semantic HTML5 tags: header, nav, main, section, article' },
              { id: 'p1w1t3', text: 'Forms: input types, labels, form submission' },
              { id: 'p1w1t4', text: 'HTML attributes: id, class, href, src, alt' },
              { id: 'p1w1t5', text: 'Build a complete static personal bio page' }
            ],
            milestone: 'You can build any static webpage layout using semantic HTML'
          },
          {
            week: 2,
            focus: 'CSS — Making Things Look Good',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w2t1', text: 'Box model: content, padding, border, margin' },
              { id: 'p1w2t2', text: 'CSS selectors and pseudo-classes' },
              { id: 'p1w2t3', text: 'Flexbox: practice with Flexbox Froggy' },
              { id: 'p1w2t4', text: 'CSS Grid: practice with Grid Garden' },
              { id: 'p1w2t5', text: 'Responsive design with media queries' }
            ],
            milestone: 'You can recreate any website layout using Flexbox and Grid'
          },
          {
            week: 3,
            focus: 'JavaScript Fundamentals',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p1w3t1', text: 'Variables, data types, functions, arrow functions' },
              { id: 'p1w3t2', text: 'Array methods: map, filter, reduce, find, forEach' },
              { id: 'p1w3t3', text: 'Objects: destructuring, spread operator' },
              { id: 'p1w3t4', text: 'DOM manipulation: querySelector, addEventListener' },
              { id: 'p1w3t5', text: 'Build an interactive quiz app' }
            ],
            milestone: 'You understand core JavaScript and can add interactivity'
          },
          {
            week: 4,
            focus: 'JavaScript Intermediate & APIs',
            daily: '2.5-3 hours/day',
            tasks: [
              { id: 'p1w4t1', text: 'Asynchronous JS: Promises, async/await' },
              { id: 'p1w4t2', text: 'Fetch API: make HTTP requests' },
              { id: 'p1w4t3', text: 'JSON: parse and stringify' },
              { id: 'p1w4t4', text: 'Build a weather app using OpenWeatherMap API' },
              { id: 'p1w4t5', text: 'Build a GitHub profile viewer' }
            ],
            milestone: 'You can build web apps that fetch real data from APIs'
          }
        ]
      },
      phase2: {
        title: 'React & Modern Tools',
        theme: 'Build real-world apps with React',
        weeks: [
          {
            week: 5,
            focus: 'React Fundamentals',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w5t1', text: 'Create React project with Vite' },
              { id: 'p2w5t2', text: 'JSX: HTML inside JavaScript' },
              { id: 'p2w5t3', text: 'Components: functional components' },
              { id: 'p2w5t4', text: 'Props and useState hook' },
              { id: 'p2w5t5', text: 'Build a Todo app in React' }
            ],
            milestone: 'You can build a functional React application'
          },
          {
            week: 6,
            focus: 'React — Hooks & API Integration',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w6t1', text: 'useEffect hook for side effects' },
              { id: 'p2w6t2', text: 'Fetch data in React with useEffect + fetch' },
              { id: 'p2w6t3', text: 'Loading and error states' },
              { id: 'p2w6t4', text: 'Forms in React: controlled components' },
              { id: 'p2w6t5', text: 'Build a movie search app with OMDb API' }
            ],
            milestone: 'You can build a data-driven React app with API integration'
          },
          {
            week: 7,
            focus: 'React Router & State Management',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w7t1', text: 'React Router v6: BrowserRouter, Routes, Route, Link' },
              { id: 'p2w7t2', text: 'Dynamic routes with URL parameters' },
              { id: 'p2w7t3', text: 'Protected routes' },
              { id: 'p2w7t4', text: 'Context API for global state' },
              { id: 'p2w7t5', text: 'Build multi-page e-commerce product catalog' }
            ],
            milestone: 'You can build a multi-page React app with routing'
          },
          {
            week: 8,
            focus: 'Portfolio & Deployment',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w8t1', text: 'Build your portfolio website in React' },
              { id: 'p2w8t2', text: 'Deploy on Vercel with automatic deployment' },
              { id: 'p2w8t3', text: 'Performance basics: lazy loading, code splitting' },
              { id: 'p2w8t4', text: 'TypeScript introduction' },
              { id: 'p2w8t5', text: 'Accessibility basics: alt text, ARIA labels' }
            ],
            milestone: 'Your portfolio website is live on Vercel'
          }
        ]
      },
      phase3: {
        title: 'Job Ready',
        theme: 'Polish portfolio, apply strategically, ace interviews',
        weeks: [
          {
            week: 9,
            focus: 'Advanced Patterns & Interview Prep',
            daily: '2-2.5 hours/day',
            tasks: [
              { id: 'p3w9t1', text: 'React performance: useMemo, useCallback' },
              { id: 'p3w9t2', text: 'Common interview questions practice' },
              { id: 'p3w9t3', text: 'Practice 5 frontend LeetCode problems' },
              { id: 'p3w9t4', text: 'CSS interview questions' },
              { id: 'p3w9t5', text: 'Build a clone of a famous website UI' }
            ],
            milestone: 'You can answer common frontend interview questions'
          },
          {
            week: 10,
            focus: 'Job Applications',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w10t1', text: 'Apply to 5-10 roles per day' },
              { id: 'p3w10t2', text: 'Target companies with 50-500 employees' },
              { id: 'p3w10t3', text: 'Create Upwork profile for freelancing' },
              { id: 'p3w10t4', text: 'Cold outreach on LinkedIn' },
              { id: 'p3w10t5', text: 'Follow up on applications' }
            ],
            milestone: '50+ applications sent, first interview calls coming'
          },
          {
            week: 11,
            focus: 'Mock Interviews & Technical Test Prep',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w11t1', text: 'Practice frontend take-home assignments' },
              { id: 'p3w11t2', text: 'Live coding prep on CodeSandbox' },
              { id: 'p3w11t3', text: 'UI challenges: recreate from Figma design' },
              { id: 'p3w11t4', text: 'Mock system design practice' },
              { id: 'p3w11t5', text: 'Research target companies' }
            ],
            milestone: 'You have done 5+ mock interviews'
          },
          {
            week: 12,
            focus: 'First Job or Client',
            daily: '1-2 hours/day',
            tasks: [
              { id: 'p3w12t1', text: 'Negotiate salary: know the INR 4-8 LPA range' },
              { id: 'p3w12t2', text: 'For freelancing: finish first project, get testimonial' },
              { id: 'p3w12t3', text: 'Set up invoicing for freelance payments' },
              { id: 'p3w12t4', text: 'Learn workplace git workflow' },
              { id: 'p3w12t5', text: 'Create 30-60-90 day plan for first job' }
            ],
            milestone: 'You have accepted a job offer or completed first project'
          }
        ]
      }
    },
    resources: {
      free: [
        { name: 'The Odin Project', type: 'Full Curriculum', url: 'https://theodinproject.com', why: 'Most comprehensive free full-stack curriculum' },
        { name: 'freeCodeCamp', type: 'Online Course', url: 'https://freecodecamp.org', why: '300-hour certificate course' },
        { name: 'javascript.info', type: 'Website', url: 'https://javascript.info', why: 'Definitive JavaScript reference' },
        { name: 'Kevin Powell YouTube', type: 'YouTube', url: 'https://youtube.com', why: 'Best CSS teacher on the internet' }
      ],
      paid: [
        { name: 'Scrimba Frontend Developer Career Path', type: 'Course', cost: 'INR 1500/month', url: 'https://scrimba.com', why: 'Interactive coding format' },
        { name: 'Zero to Mastery — Complete Web Developer', type: 'Course', cost: 'INR 500', url: 'https://udemy.com', why: 'Comprehensive bootcamp-style course' }
      ]
    },
    projects: [
      { id: 1, name: 'Responsive Portfolio Website', what: 'Personal portfolio with Hero, About, Skills, Projects, Contact', skills: 'HTML5, CSS3, Flexbox/Grid, media queries', time: '3-5 days', phase: '1' },
      { id: 2, name: 'Weather Dashboard App', what: 'City weather search with 5-day forecast and location detection', skills: 'JavaScript, Fetch API, OpenWeatherMap API', time: '3-5 days', phase: '1-2' },
      { id: 3, name: 'Movie Search & Favorites App', what: 'Search movies, save favorites, filter by genre, dark mode', skills: 'React, useState, useEffect, API, localStorage', time: '5-7 days', phase: '2' },
      { id: 4, name: 'E-Commerce Product Catalog', what: 'Product grid, filters, detail page, cart with Context API', skills: 'React, React Router, Context API, Tailwind', time: '1-2 weeks', phase: '2-3' },
      { id: 5, name: 'Full Portfolio with Next.js', what: 'Portfolio as Next.js app with blog and SEO', skills: 'Next.js, TypeScript, MDX, SEO, Vercel', time: '1-2 weeks', phase: '3' }
    ],
    careers: [
      { title: 'Junior Frontend Developer', experience: '0-1 year', salary: 'INR 3.5-8 LPA', skills: 'HTML, CSS, JS, basic React' },
      { title: 'UI Developer', experience: '0-1 year', salary: 'INR 4-7 LPA', skills: 'Design implementation, pixel-perfect CSS' },
      { title: 'React Developer', experience: '1-3 years', salary: 'INR 10-18 LPA', skills: 'React, state management, API integration' },
      { title: 'Frontend Engineer', experience: '2-4 years', salary: 'INR 15-25 LPA', skills: 'Performance, testing, architecture' }
    ],
    certifications: [
      'Meta Front-End Developer Professional Certificate',
      'freeCodeCamp Responsive Web Design Certification',
      'Google UX Design Certificate',
      'Frontend Masters Certificate'
    ]
  },

  'data-analytics': {
    id: 'data-analytics',
    name: 'Data Analytics',
    tagline: 'Turn raw business data into insights that drive real decisions',
    icon: '📊',
    colors: {
      bg: 'green-50',
      text: 'green-700',
      border: 'green-200',
      button: 'green-600',
      badge: 'green-100',
    },
    overview: {
      description: 'Turn raw data into actionable business insights — master Excel, SQL, Python, and Power BI to analyze real-world datasets and drive decisions at any company.',
      whoFor: [
        'Commerce grads, MBA aspirants, business-curious people',
        'Anyone who loves patterns in data',
        'People who want to work in any industry'
      ],
      whoNotFor: [
        'People who hate math or numbers entirely'
      ],
      difficulty: 'Beginner',
      prerequisites: 'Comfort with Excel, basic math, logical thinking',
      timeToIncome: '90 days',
      salary: {
        fresher: 'INR 3.5-7 LPA',
        mid: 'INR 8-15 LPA',
        senior: 'INR 15-30+ LPA'
      },
      companies: ['Ola', 'Flipkart', 'Razorpay', 'Consulting firms', 'BFSI companies']
    },
    skills: [
      { name: 'Microsoft Excel', level: 'Advanced', use: 'VLOOKUP, Pivot Tables, Power Query, dashboards' },
      { name: 'SQL', level: 'Intermediate', use: 'Query databases: SELECT, JOIN, GROUP BY, window functions' },
      { name: 'Python (Pandas & NumPy)', level: 'Beginner-Mid', use: 'Clean datasets, merge tables, calculate statistics' },
      { name: 'Data Visualization', level: 'Intermediate', use: 'Matplotlib, Seaborn — create charts that tell stories' },
      { name: 'Power BI', level: 'Intermediate', use: 'Build interactive dashboards with live data' },
      { name: 'Statistics Basics', level: 'Beginner-Mid', use: 'Mean, median, correlation, hypothesis testing' }
    ],
    roadmap: {
      phase1: {
        title: 'Foundation',
        theme: 'Excel mastery and SQL',
        weeks: [
          {
            week: 1,
            focus: 'Excel Mastery — The Analyst\'s First Tool',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w1t1', text: 'Essential formulas: SUM, AVERAGE, COUNT, IF, COUNTIF, SUMIF' },
              { id: 'p1w1t2', text: 'VLOOKUP and XLOOKUP for table lookups' },
              { id: 'p1w1t3', text: 'INDEX + MATCH as VLOOKUP alternative' },
              { id: 'p1w1t4', text: 'Pivot Tables: summarize and analyze data' },
              { id: 'p1w1t5', text: 'Analyze a 10,000-row e-commerce dataset' }
            ],
            milestone: 'You can analyze large datasets in Excel using Pivot Tables'
          },
          {
            week: 2,
            focus: 'Advanced Excel & Power Query',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w2t1', text: 'Conditional formatting for visual data exploration' },
              { id: 'p1w2t2', text: 'Data cleaning: remove duplicates, trim whitespace' },
              { id: 'p1w2t3', text: 'Power Query: connect to external data sources' },
              { id: 'p1w2t4', text: 'Power Query transformations' },
              { id: 'p1w2t5', text: 'Build a sales performance dashboard in Excel' }
            ],
            milestone: 'You can build a professional Excel dashboard'
          },
          {
            week: 3,
            focus: 'SQL Fundamentals',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w3t1', text: 'Install MySQL or use SQLiteOnline.com' },
              { id: 'p1w3t2', text: 'SELECT, FROM, WHERE, ORDER BY, LIMIT' },
              { id: 'p1w3t3', text: 'Aggregate functions: COUNT, SUM, AVG, MIN, MAX' },
              { id: 'p1w3t4', text: 'GROUP BY and HAVING clauses' },
              { id: 'p1w3t5', text: 'Practice with Northwind database' }
            ],
            milestone: 'You can write SQL queries to answer business questions'
          },
          {
            week: 4,
            focus: 'SQL Intermediate & Advanced',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p1w4t1', text: 'JOINS: INNER, LEFT, RIGHT, FULL OUTER' },
              { id: 'p1w4t2', text: 'Subqueries: query inside another query' },
              { id: 'p1w4t3', text: 'CTEs (Common Table Expressions) with WITH clause' },
              { id: 'p1w4t4', text: 'Window functions: ROW_NUMBER, RANK, LAG, LEAD' },
              { id: 'p1w4t5', text: 'Complete SQL data exploration project' }
            ],
            milestone: 'You can write complex multi-table SQL queries'
          }
        ]
      },
      phase2: {
        title: 'Python & Visualization',
        theme: 'Analyze data at scale with Python and Power BI',
        weeks: [
          {
            week: 5,
            focus: 'Python for Data Analysis — Basics',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w5t1', text: 'Install Python and Jupyter Notebook (Anaconda)' },
              { id: 'p2w5t2', text: 'Python basics: variables, lists, dictionaries, loops' },
              { id: 'p2w5t3', text: 'NumPy: arrays and mathematical functions' },
              { id: 'p2w5t4', text: 'Pandas: DataFrames, read_csv, read_excel' },
              { id: 'p2w5t5', text: 'Load and explore a Kaggle dataset' }
            ],
            milestone: 'You can load and inspect datasets using Pandas'
          },
          {
            week: 6,
            focus: 'Python — Data Cleaning & EDA',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w6t1', text: 'Handle missing data: isnull, dropna, fillna' },
              { id: 'p2w6t2', text: 'Remove duplicates and convert data types' },
              { id: 'p2w6t3', text: 'String operations in Pandas' },
              { id: 'p2w6t4', text: 'Groupby and merge operations' },
              { id: 'p2w6t5', text: 'Complete EDA on a messy real-world dataset' }
            ],
            milestone: 'You can clean messy datasets and produce insights'
          },
          {
            week: 7,
            focus: 'Data Visualization — Charts That Tell Stories',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w7t1', text: 'Matplotlib: line, bar, scatter, histogram charts' },
              { id: 'p2w7t2', text: 'Seaborn: heatmaps, box plots, violin plots' },
              { id: 'p2w7t3', text: 'Chart selection guide: when to use each type' },
              { id: 'p2w7t4', text: 'Power BI: install and connect to data' },
              { id: 'p2w7t5', text: 'Build interactive Power BI dashboard' }
            ],
            milestone: 'You can create visualizations in Python and Power BI'
          },
          {
            week: 8,
            focus: 'Statistics & Business Analytics',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w8t1', text: 'Descriptive statistics: mean, median, std deviation' },
              { id: 'p2w8t2', text: 'Distributions and correlation analysis' },
              { id: 'p2w8t3', text: 'Introduction to A/B testing and p-values' },
              { id: 'p2w8t4', text: 'Cohort analysis and funnel analysis' },
              { id: 'p2w8t5', text: 'Complete business analytics case study' }
            ],
            milestone: 'You can perform statistical analysis and present insights'
          }
        ]
      },
      phase3: {
        title: 'Portfolio & Career',
        theme: 'Build portfolio and land your first analyst role',
        weeks: [
          {
            week: 9,
            focus: 'Portfolio Building',
            daily: '3 hours/day',
            tasks: [
              { id: 'p3w9t1', text: 'Choose 3 project domains to showcase' },
              { id: 'p3w9t2', text: 'Build end-to-end SQL + Python + Power BI project' },
              { id: 'p3w9t3', text: 'Host projects on Kaggle' },
              { id: 'p3w9t4', text: 'Upload Python notebooks to GitHub' },
              { id: 'p3w9t5', text: 'Write 2 LinkedIn posts about your projects' }
            ],
            milestone: 'You have 3 data analysis projects published publicly'
          },
          {
            week: 10,
            focus: 'Job Applications',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w10t1', text: 'Apply to 5-10 roles/day on job portals' },
              { id: 'p3w10t2', text: 'Target consulting firms, e-commerce, BFSI' },
              { id: 'p3w10t3', text: 'Tailor resume for each role' },
              { id: 'p3w10t4', text: 'Prepare for Excel and SQL assessments' },
              { id: 'p3w10t5', text: 'Reach out to analysts at target companies' }
            ],
            milestone: '50+ applications sent, progressed to assessment stage'
          },
          {
            week: 11,
            focus: 'Interview & Assessment Prep',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w11t1', text: 'SQL interview prep on HackerRank' },
              { id: 'p3w11t2', text: 'Excel assessment practice' },
              { id: 'p3w11t3', text: 'Case study interview practice' },
              { id: 'p3w11t4', text: 'Behavioral questions with STAR method' },
              { id: 'p3w11t5', text: 'Statistics questions preparation' }
            ],
            milestone: 'You can pass SQL assessments and present case studies'
          },
          {
            week: 12,
            focus: 'Specialize & Continue Learning',
            daily: '1-2 hours/day',
            tasks: [
              { id: 'p3w12t1', text: 'Pick a domain specialization' },
              { id: 'p3w12t2', text: 'Learn Power BI DAX functions' },
              { id: 'p3w12t3', text: 'Introduction to machine learning basics' },
              { id: 'p3w12t4', text: 'Consider Microsoft PL-300 certification' },
              { id: 'p3w12t5', text: 'Join data communities' }
            ],
            milestone: 'You are settled in your first analyst role'
          }
        ]
      }
    },
    resources: {
      free: [
        { name: 'Alex the Analyst YouTube', type: 'YouTube', url: 'https://youtube.com', why: 'Best YouTube channel for data analysts' },
        { name: 'Kaggle', type: 'Platform', url: 'https://kaggle.com', why: 'Free datasets, courses, competitions' },
        { name: 'Mode Analytics SQL Tutorial', type: 'Interactive', url: 'https://mode.com', why: 'Browser-based SQL practice' },
        { name: 'freeCodeCamp Data Analysis with Python', type: 'YouTube/Course', url: 'https://freecodecamp.org', why: 'Complete video course' }
      ],
      paid: [
        { name: 'Google Data Analytics Certificate', type: 'Certificate', cost: 'INR 3500/month', url: 'https://coursera.org', why: '8-course program by Google' },
        { name: 'Udemy — Data Analyst Bootcamp', type: 'Course', cost: 'INR 500', url: 'https://udemy.com', why: 'Alex the Analyst course' }
      ]
    },
    projects: [
      { id: 1, name: 'Sales Performance Excel Dashboard', what: 'Comprehensive sales analysis dashboard with trends and regional breakdown', skills: 'Excel Power Query, Pivot Tables, charts', time: '3-5 days', phase: '1' },
      { id: 2, name: 'SQL Business Investigation', what: '15+ SQL queries answering real business questions', skills: 'SQL (JOINs, GROUP BY, CTEs, window functions)', time: '3-5 days', phase: '1-2' },
      { id: 3, name: 'Python EDA Report — Indian Dataset', what: 'Complete EDA on India-specific dataset with 10+ visualizations', skills: 'Python, Pandas, Seaborn, Matplotlib', time: '5-7 days', phase: '2' },
      { id: 4, name: 'Power BI Business Intelligence Dashboard', what: 'Multi-table dashboard with DAX measures and drill-through', skills: 'Power BI, DAX, data modeling', time: '5-7 days', phase: '2-3' },
      { id: 5, name: 'End-to-End Analytics Project', what: 'Complete business question analysis with report', skills: 'SQL, Python, Power BI, Excel', time: '2-3 weeks', phase: '3' }
    ],
    careers: [
      { title: 'Junior Data Analyst', experience: '0-1 year', salary: 'INR 3.5-6 LPA', skills: 'Excel, SQL, basic Python' },
      { title: 'Business Analyst', experience: '0-2 years', salary: 'INR 5-10 LPA', skills: 'Excel, SQL, PowerPoint' },
      { title: 'Data Analyst', experience: '1-3 years', salary: 'INR 8-15 LPA', skills: 'SQL, Python, Power BI, statistics' },
      { title: 'BI Developer', experience: '2-4 years', salary: 'INR 10-18 LPA', skills: 'Power BI/Tableau, DAX, data modeling' }
    ],
    certifications: [
      'Google Data Analytics Professional Certificate',
      'Microsoft PL-300 (Power BI Data Analyst Associate)',
      'IBM Data Analyst Professional Certificate',
      'Tableau Desktop Specialist'
    ]
  },

  'cybersecurity': {
    id: 'cybersecurity',
    name: 'Cybersecurity & Ethical Hacking',
    tagline: 'Defend systems and legally hack into them to find vulnerabilities first',
    icon: '🔐',
    colors: {
      bg: 'red-50',
      text: 'red-700',
      border: 'red-200',
      button: 'red-600',
      badge: 'red-100',
    },
    overview: {
      description: 'Learn to defend systems and legally hack into them to find vulnerabilities before malicious attackers do — from networking fundamentals to penetration testing and bug bounty hunting.',
      whoFor: [
        'Detail-oriented problem solvers',
        'People who think like attackers',
        'CS grads curious about security'
      ],
      whoNotFor: [
        'People who want quick results — cybersecurity requires deep understanding'
      ],
      difficulty: 'Intermediate',
      prerequisites: 'Basic networking understanding, comfort with computers',
      timeToIncome: '90 days',
      salary: {
        fresher: 'INR 4-8 LPA',
        mid: 'INR 10-20 LPA',
        senior: 'INR 25-60+ LPA'
      },
      companies: ['Wipro', 'HCL', 'Infosys', 'Banks', 'MSSPs', 'Global security firms']
    },
    skills: [
      { name: 'Networking Fundamentals', level: 'Intermediate', use: 'Understand how attacks travel through networks' },
      { name: 'Linux for Security', level: 'Intermediate', use: 'Navigate Kali Linux, use security tools' },
      { name: 'OWASP Top 10', level: 'Intermediate', use: 'Identify and test for critical web vulnerabilities' },
      { name: 'Network Scanning (Nmap)', level: 'Intermediate', use: 'Discover hosts, open ports, and services' },
      { name: 'Burp Suite', level: 'Beginner-Mid', use: 'Intercept and modify HTTP traffic' },
      { name: 'Metasploit Framework', level: 'Beginner', use: 'Exploit known vulnerabilities in labs' }
    ],
    roadmap: {
      phase1: {
        title: 'Foundation',
        theme: 'Networking, Linux, and security fundamentals',
        weeks: [
          {
            week: 1,
            focus: 'Networking Fundamentals',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w1t1', text: 'OSI model: 7 layers and what happens at each' },
              { id: 'p1w1t2', text: 'TCP/IP model and IP addressing' },
              { id: 'p1w1t3', text: 'DNS and HTTP/HTTPS protocols' },
              { id: 'p1w1t4', text: 'Memorize common ports: 21, 22, 80, 443, etc.' },
              { id: 'p1w1t5', text: 'Tools: ping, traceroute, nslookup, netstat' }
            ],
            milestone: 'You can explain OSI model and how web requests work'
          },
          {
            week: 2,
            focus: 'Linux for Security',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w2t1', text: 'Install Kali Linux on VirtualBox' },
              { id: 'p1w2t2', text: 'Linux command line: file navigation, permissions' },
              { id: 'p1w2t3', text: 'User management and privilege escalation concepts' },
              { id: 'p1w2t4', text: 'Network commands: ifconfig, netstat, ss, curl' },
              { id: 'p1w2t5', text: 'Log analysis: /var/log/auth.log, /var/log/syslog' }
            ],
            milestone: 'You are comfortable in a Linux terminal'
          },
          {
            week: 3,
            focus: 'Security Fundamentals & Core Concepts',
            daily: '2 hours/day',
            tasks: [
              { id: 'p1w3t1', text: 'CIA Triad: Confidentiality, Integrity, Availability' },
              { id: 'p1w3t2', text: 'Common attack types: phishing, malware, MITM, DDoS' },
              { id: 'p1w3t3', text: 'Cryptography basics: symmetric vs asymmetric encryption' },
              { id: 'p1w3t4', text: 'PKI and how HTTPS certificates work' },
              { id: 'p1w3t5', text: 'Start CompTIA Security+ study' }
            ],
            milestone: 'You understand core security concepts'
          },
          {
            week: 4,
            focus: 'Ethical Hacking Methodology',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p1w4t1', text: 'Ethical hacking phases: Recon → Scanning → Access → Maintain → Cover' },
              { id: 'p1w4t2', text: 'Reconnaissance: Google dorking, WHOIS, Shodan' },
              { id: 'p1w4t3', text: 'Sign up for TryHackMe' },
              { id: 'p1w4t4', text: 'Complete Pre-Security path on TryHackMe' },
              { id: 'p1w4t5', text: 'Complete first 5 TryHackMe rooms' }
            ],
            milestone: 'You understand ethical hacking methodology'
          }
        ]
      },
      phase2: {
        title: 'Offensive Security',
        theme: 'Tools and techniques of ethical hacking',
        weeks: [
          {
            week: 5,
            focus: 'Network Scanning & Enumeration',
            daily: '2.5 hours/day',
            tasks: [
              { id: 'p2w5t1', text: 'Nmap: learn every flag and what it does' },
              { id: 'p2w5t2', text: 'Service version detection with nmap -sV' },
              { id: 'p2w5t3', text: 'OS detection with nmap -O' },
              { id: 'p2w5t4', text: 'Gobuster/Dirbuster for directory brute forcing' },
              { id: 'p2w5t5', text: 'Scan Metasploitable2 VM with Nmap' }
            ],
            milestone: 'You can perform complete network scans'
          },
          {
            week: 6,
            focus: 'Web Application Hacking — OWASP Top 10',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w6t1', text: 'Install Burp Suite Community Edition' },
              { id: 'p2w6t2', text: 'Configure browser to route through Burp proxy' },
              { id: 'p2w6t3', text: 'SQL Injection: detection and testing' },
              { id: 'p2w6t4', text: 'Cross-Site Scripting (XSS): stored, reflected, DOM-based' },
              { id: 'p2w6t5', text: 'Complete PortSwigger Web Security Academy labs' }
            ],
            milestone: 'You can test web apps for OWASP Top 10 vulnerabilities'
          },
          {
            week: 7,
            focus: 'Exploitation & Metasploit',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w7t1', text: 'Metasploit Framework: msfconsole, use, set, run' },
              { id: 'p2w7t2', text: 'Exploit vulnerability in Metasploitable2' },
              { id: 'p2w7t3', text: 'Password attacks: Hydra, Hashcat, John the Ripper' },
              { id: 'p2w7t4', text: 'Privilege escalation with linPEAS' },
              { id: 'p2w7t5', text: 'Wireshark: capture and analyze network traffic' }
            ],
            milestone: 'You have exploited a vulnerable machine in a lab'
          },
          {
            week: 8,
            focus: 'CTF Practice & Blue Team Basics',
            daily: '3 hours/day',
            tasks: [
              { id: 'p2w8t1', text: 'Complete Hack The Box Starting Point machines' },
              { id: 'p2w8t2', text: 'Complete 5 easy Hack The Box machines' },
              { id: 'p2w8t3', text: 'Blue team: SOC analyst skills and log analysis' },
              { id: 'p2w8t4', text: 'Windows Event Logs: Event IDs 4624, 4625, 4720' },
              { id: 'p2w8t5', text: 'Security report writing practice' }
            ],
            milestone: 'You have solved 5 CTF machines'
          }
        ]
      },
      phase3: {
        title: 'Job Ready & Specialization',
        theme: 'Certifications, portfolio, job applications',
        weeks: [
          {
            week: 9,
            focus: 'Portfolio & Certifications',
            daily: '2 hours/day',
            tasks: [
              { id: 'p3w9t1', text: 'Create security portfolio on GitHub' },
              { id: 'p3w9t2', text: 'Write-ups for each TryHackMe room and HTB machine' },
              { id: 'p3w9t3', text: 'Build TryHackMe profile to Top 5% rank' },
              { id: 'p3w9t4', text: 'Start CompTIA Security+ exam prep' },
              { id: 'p3w9t5', text: 'Create LinkedIn profile with security focus' }
            ],
            milestone: 'You have a professional security portfolio'
          },
          {
            week: 10,
            focus: 'Job Applications — SOC Analyst Route',
            daily: '3+ hours/day',
            tasks: [
              { id: 'p3w10t1', text: 'Apply to SOC Analyst and Junior Security Analyst roles' },
              { id: 'p3w10t2', text: 'Target Wipro, HCL, Infosys security practices' },
              { id: 'p3w10t3', text: 'SOC interview prep: incident response lifecycle' },
              { id: 'p3w10t4', text: 'Prepare for Security+ exam within 3 months' },
              { id: 'p3w10t5', text: 'Reach out to security professionals on LinkedIn' }
            ],
            milestone: '50+ applications sent and interviews scheduled'
          },
          {
            week: 11,
            focus: 'Bug Bounty Basics',
            daily: '2-3 hours/day',
            tasks: [
              { id: 'p3w11t1', text: 'Sign up for HackerOne and Bugcrowd' },
              { id: 'p3w11t2', text: 'Start with beginner-friendly public programs' },
              { id: 'p3w11t3', text: 'Focus on IDOR and XSS bugs first' },
              { id: 'p3w11t4', text: 'Understand responsible disclosure' },
              { id: 'p3w11t5', text: 'Submit at least one bug bounty report' }
            ],
            milestone: 'You have submitted at least one bug bounty report'
          },
          {
            week: 12,
            focus: 'Specialization & Advanced Certifications',
            daily: '2 hours/day',
            tasks: [
              { id: 'p3w12t1', text: 'Pick specialization: Blue Team, Web App Pentest, or Network Security' },
              { id: 'p3w12t2', text: 'Research CEH (Certified Ethical Hacker) certification' },
              { id: 'p3w12t3', text: 'Research eJPT (eLearnSecurity Junior Penetration Tester)' },
              { id: 'p3w12t4', text: 'Join security communities: OWASP India, nullcon' },
              { id: 'p3w12t5', text: 'Keep practicing: HTB and TryHackMe daily' }
            ],
            milestone: 'You have a specialization and certification roadmap'
          }
        ]
      }
    },
    resources: {
      free: [
        { name: 'TryHackMe', type: 'Learning Platform', url: 'https://tryhackme.com', why: '#1 beginner-friendly security learning platform' },
        { name: 'PortSwigger Web Security Academy', type: 'Online Course', url: 'https://portswigger.net/web-security', why: 'Definitive free web security course' },
        { name: 'Professor Messer CompTIA Security+', type: 'YouTube/Website', url: 'https://professormesser.com', why: 'Gold standard free Security+ study material' },
        { name: 'Hack The Box Starting Point', type: 'Lab Platform', url: 'https://hackthebox.com', why: '4 guided beginner machines' }
      ],
      paid: [
        { name: 'TryHackMe Premium', type: 'Platform', cost: 'INR 750/month', url: 'https://tryhackme.com', why: 'Full access to all learning paths' },
        { name: 'TCM Security — Practical Ethical Hacking', type: 'Course', cost: 'USD 30', url: 'https://tcm-sec.com', why: 'Best practical pentesting course' },
        { name: 'eJPT Certification', type: 'Cert', cost: 'USD 200', url: 'https://ine.com', why: 'Best beginner pentesting certification' }
      ]
    },
    projects: [
      { id: 1, name: 'Home Security Lab', what: 'VirtualBox environment with Kali Linux and Metasploitable2', skills: 'VirtualBox, Kali Linux, networking', time: '5 hours', phase: '1' },
      { id: 2, name: 'Network Scan & Vulnerability Report', what: 'Scan Metasploitable2, identify vulnerabilities, write formal report', skills: 'Nmap, vulnerability research, report writing', time: '3-5 days', phase: '1-2' },
      { id: 3, name: 'Web Application Pentest Report', what: 'Test DVWA for OWASP Top 10 vulnerabilities', skills: 'Burp Suite, DVWA, OWASP Top 10', time: '1 week', phase: '2' },
      { id: 4, name: 'CTF Writeup Collection', what: 'Solve 10+ TryHackMe rooms and 3+ HTB machines with writeups', skills: 'TryHackMe, Hack The Box, Nmap, Metasploit', time: 'Ongoing', phase: '1-3' },
      { id: 5, name: 'Python Security Tool', what: 'Build a network scanner that discovers hosts and checks default credentials', skills: 'Python (socket, subprocess, requests)', time: '1 week', phase: '3' }
    ],
    careers: [
      { title: 'SOC Analyst Tier 1', experience: '0-1 year', salary: 'INR 4-8 LPA', skills: 'SIEM, log analysis, incident response basics' },
      { title: 'Junior Penetration Tester', experience: '0-1 year', salary: 'INR 5-10 LPA', skills: 'Web app testing, Burp Suite, Nmap' },
      { title: 'IT Security Analyst', experience: '1-2 years', salary: 'INR 7-14 LPA', skills: 'Vulnerability management, compliance' },
      { title: 'Security Engineer', experience: '2-4 years', salary: 'INR 14-25 LPA', skills: 'Security architecture, tooling, automation' }
    ],
    certifications: [
      'CompTIA Security+ (SY0-701)',
      'CEH v12 (Certified Ethical Hacker)',
      'eJPT (eLearnSecurity Junior Penetration Tester)',
      'OSCP (Offensive Security Certified Professional)'
    ]
  }
};
