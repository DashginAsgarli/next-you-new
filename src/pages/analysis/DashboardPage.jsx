import React from 'react'
import XPProgress from '../../components/dashboard/XPProgress'
import StreakTracker from '../../components/dashboard/StreakTracker'
import RecentActivity from '../../components/dashboard/RecentActivity'
import CourseProgress from '../../components/dashboard/CourseProgress'
import AchievementBadges from '../../components/dashboard/AchievementBadges'
import SkillRadar from '../../components/dashboard/SkillRadar'
import { MdOutlineDashboardCustomize } from "react-icons/md";

function DashboardPage() {
    return (
        <>
            <section className="w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <div className="px-8 md:px-16 py-16">
                    <div className="flex items-center gap-2 mb-2 text-[#378079]">
                        <MdOutlineDashboardCustomize/>
                        <span className="text-[10px] tracking-[0.3em]  uppercase font-bold">Şəxsi Panel</span>
                    </div>
                    <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-12 uppercase">
                        DASHBOARD
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2">
                            <XPProgress />
                        </div>
                        <div>
                            <StreakTracker />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div >
                            <CourseProgress />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2">
                            <RecentActivity />
                        </div>
                        <div>
                            <SkillRadar />
                        </div>
                    </div>

                    <AchievementBadges />
                </div>
            </section>
        </>
    )
}

export default DashboardPage