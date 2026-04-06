import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { courses } from '../data/courses';
import PhaseBlock from '../components/roadmap/PhaseBlock';
import ResourceCard from '../components/roadmap/ResourceCard';
import ProjectCard from '../components/roadmap/ProjectCard';
import Badge from '../components/common/Badge';

export default function Roadmap() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { completedTasks, toggleTask } = useAppContext();
  const [activeTab, setActiveTab] = useState('plan');

  const course = courses[courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Course not found</p>
      </div>
    );
  }

  const courseTasks = completedTasks[courseId] || [];
  
  // Calculate total tasks
  const totalTasks = Object.values(course.roadmap).reduce((total, phase) => {
    return total + phase.weeks.reduce((weekTotal, week) => {
      return weekTotal + week.tasks.length;
    }, 0);
  }, 0);

  const completedCount = courseTasks.length;
  const progressPercentage = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <Link to="/results" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block">
            ← Back to Results
          </Link>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{course.icon}</span>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h1>
              <p className="text-gray-600 mb-4">{course.tagline}</p>
              <div className="flex gap-2">
                <Badge color="blue">{course.overview.difficulty}</Badge>
                <Badge color="green">{course.overview.timeToIncome}</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === 'plan'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              90-Day Plan
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === 'resources'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Resources & Projects
            </button>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">About This Course</h3>
                  <p className="text-gray-700 leading-relaxed">{course.overview.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Who It's For</h3>
                  <ul className="space-y-2">
                    {course.overview.whoFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Who It's NOT For</h3>
                  <ul className="space-y-2">
                    {course.overview.whoNotFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skills You'll Learn</h3>
                    <div className="space-y-3">
                      {course.skills.map((skill, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-gray-900">{skill.name}</div>
                          <div className="text-sm text-gray-600">{skill.level}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Salary Expectations</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Fresher:</span>
                        <span className="font-semibold text-gray-900">{course.overview.salary.fresher}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mid-level:</span>
                        <span className="font-semibold text-gray-900">{course.overview.salary.mid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Senior:</span>
                        <span className="font-semibold text-gray-900">{course.overview.salary.senior}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Top Hiring Companies</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.overview.companies.map((company, index) => (
                      <Badge key={index} color="blue">{company}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 90-Day Plan Tab */}
            {activeTab === 'plan' && (
              <div>
                <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Overall Progress</span>
                    <span className="text-blue-600 font-bold">{completedCount} / {totalTasks} tasks</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <PhaseBlock
                  phase={course.roadmap.phase1}
                  phaseNumber={1}
                  courseId={courseId}
                  completedTasks={courseTasks}
                  onToggleTask={toggleTask}
                />
                <PhaseBlock
                  phase={course.roadmap.phase2}
                  phaseNumber={2}
                  courseId={courseId}
                  completedTasks={courseTasks}
                  onToggleTask={toggleTask}
                />
                <PhaseBlock
                  phase={course.roadmap.phase3}
                  phaseNumber={3}
                  courseId={courseId}
                  completedTasks={courseTasks}
                  onToggleTask={toggleTask}
                />
              </div>
            )}

            {/* Resources & Projects Tab */}
            {activeTab === 'resources' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Free Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.resources.free.map((resource, index) => (
                      <ResourceCard key={index} resource={resource} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Paid Resources (Worth the Money)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.resources.paid.map((resource, index) => (
                      <ResourceCard key={index} resource={resource} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Projects to Build</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {course.projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Career Outcomes</h3>
                  <div className="space-y-3">
                    {course.careers.map((career, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-900">{career.title}</h4>
                          <span className="text-green-600 font-semibold">{career.salary}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">{career.experience}</div>
                        <div className="text-sm text-gray-700">{career.skills}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications Worth Getting</h3>
                  <ul className="space-y-2">
                    {course.certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
