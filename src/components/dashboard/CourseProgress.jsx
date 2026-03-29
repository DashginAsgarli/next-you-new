import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';

function CourseProgress() {
  
  const courses = [
    { name: 'HTML Kursu', progress: 100, lessons: 22, color: '#F97316', done: true },
    { name: 'CSS Kursu', progress: 78, lessons: 18, color: '#1572B6', done: false },
    { name: 'JavaScript', progress: 45, lessons: 35, color: '#F7DF1E', done: false },
    { name: 'İngilis Dili', progress: 62, lessons: 20, color: '#3B82F6', done: false },
    { name: 'Data Science', progress: 15, lessons: 30, color: '#A855F7', done: false },
  ];

  return (
    <div className="bg-[#06090f] border border-white/10 p-8">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#378079] mb-8">Kurs Tərəqqisi</p>
      <div className="space-y-6">
        {courses.map((course, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                {course.done && <HiCheckCircle size={14} className="text-[#378079]" />}
                <span className="text-[12px] font-bold text-[#f0ebe2]/80 uppercase tracking-wide">{course.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-[#f0ebe2]/30">{course.lessons} dərs</span>
                <span className="text-[11px] font-black" style={{ color: course.color }}>{course.progress}%</span>
              </div>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{ width: `${course.progress}%`, backgroundColor: course.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseProgress