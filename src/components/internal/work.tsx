'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, Star, Trophy, Users } from 'lucide-react'
import { useRef } from 'react'

import { cn } from '../../lib/utils'
import Meteors from '../ui/meteors'

// import { ElegantShape } from './hero'

const workExperience = [
    {
        period: '2022 - Present',
        title: 'Senior UI/UX Designer',
        subtitle: 'Creative Studios Inc.',
        location: 'San Francisco, CA',
        achievements: [
            {
                icon: <Trophy className="w-8 h-8" />,
                title: 'Design Leadership',
                description:
                    'Led the redesign of flagship product increasing user engagement by 45%',
                gradient: 'from-violet-500 to-indigo-500',
                tag: 'Achievement'
            },
            {
                icon: <Users className="w-8 h-8" />,
                title: 'Team Management',
                description:
                    'Managed a team of 4 designers and collaborated with development team',
                gradient: 'from-pink-500 to-rose-500'
            }
        ]
    },
    {
        period: '2020 - 2022',
        title: 'Visual Designer',
        subtitle: 'Digital Dynamics',
        location: 'Remote',
        achievements: [
            {
                icon: <Star className="w-8 h-8" />,
                title: 'Brand Development',
                description:
                    'Developed brand identities for 12+ clients across various industries',
                gradient: 'from-amber-500 to-orange-500',
                tag: 'Featured'
            },
            {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Client Success',
                description:
                    'Improved client satisfaction scores by 35% through innovative designs',
                gradient: 'from-emerald-500 to-green-500'
            }
        ]
    }
]

export default function WorkExperience() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative bg-gradient-to-b from-[#000D1A] via-[#1A0B2E] to-[#0A0118] py-32 overflow-hidden"
        >
            {/* Background gradients */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-rose-500/5 blur-3xl" />
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0A0118] to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl mx-auto mb-20 text-center"
                >
                    <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-gray-300">
                            Professional Journey
                        </span>
                    </motion.div>
                    <h2 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                        Work Experience
                    </h2>
                    <p className="text-lg text-white/60">
                        A showcase of my professional experience and key
                        achievements
                    </p>
                </motion.div>

                <div className="relative mx-auto space-y-40 max-w-7xl">
                    {/* Timeline line */}
                    <div className="absolute top-0 bottom-0 hidden w-px transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent md:block">
                        <div className="absolute w-full h-full animate-pulse bg-gradient-to-b from-transparent via-indigo-300/50 to-transparent"></div>
                    </div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }} // Reduced opacity
                            className="absolute hidden lg:block -left-32 top-20 animate-float-slower" // Slower animation
                        >
                            <div className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-indigo-950/20 -rotate-6 backdrop-blur-md border border-indigo-500/10 text-indigo-400/70 shadow-[0_0_2rem_-1rem_#818CF8]">
                                <Trophy className="w-4 h-4" />
                                <span>Leadership</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.25 }}
                            className="absolute hidden lg:block right-20 top-40 animate-float-slower"
                        >
                            <div className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-purple-950/20 rotate-6 backdrop-blur-md border border-purple-500/10 text-purple-400/70 shadow-[0_0_2rem_-1rem_#A855F7]">
                                <Star className="w-4 h-4" />
                                <span>Innovation</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            className="absolute hidden lg:block -right-24 top-96 animate-float-slower"
                        >
                            <div className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-blue-950/20 -rotate-3 backdrop-blur-md border border-blue-500/10 text-blue-400/70 shadow-[0_0_2rem_-1rem_#60A5FA]">
                                <Users className="w-4 h-4" />
                                <span>Teamwork</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.25 }}
                            className="absolute hidden lg:block -left-20 bottom-40 animate-float-slower"
                        >
                            <div className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-rose-950/20 rotate-3 backdrop-blur-md border border-rose-500/10 text-rose-400/70 shadow-[0_0_2rem_-1rem_#FB7185]">
                                <Building2 className="w-4 h-4" />
                                <span>Growth</span>
                            </div>
                        </motion.div>
                    </div>
                    {workExperience.map((experience, index) => (
                        <motion.div
                            key={experience.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className={cn(
                                'flex flex-col md:flex-row gap-16 items-start relative',
                                index % 2 === 1 && 'md:flex-row-reverse'
                            )}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-14 hidden w-4 h-4 transform -translate-x-1/2 bg-indigo-500 rounded-full left-[49.4%] md:block"
                            >
                                <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping"></div>
                            </motion.div>

                            {/* Timeline Side */}
                            <div className="flex-1 space-y-6">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -50 : 50
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-rose-500/80 text-white backdrop-blur-sm">
                                            {experience.period}
                                        </span>
                                    </div>
                                    <h2 className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                                        {experience.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-white/60">
                                        <span className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4" />
                                            {experience.subtitle}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {experience.location}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Achievements Side */}
                            <div className="flex-1 space-y-6">
                                {experience.achievements.map(
                                    (achievement, i) => (
                                        <motion.div
                                            key={achievement.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: i * 0.2
                                            }}
                                            whileHover={{ scale: 1.02 }}
                                            className="relative p-6 border group rounded-2xl bg-indigo-950/20 hover:bg-indigo-950/30 backdrop-blur-sm border-indigo-500/20"
                                        >
                                            {/* Achievement Content */}
                                            <div className="flex items-start gap-6">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-xl font-semibold text-white">
                                                            {achievement.title}
                                                        </h3>
                                                        {achievement.tag && (
                                                            <span className="px-2 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r from-indigo-500/80 to-rose-500/80">
                                                                {
                                                                    achievement.tag
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-white/60">
                                                        {
                                                            achievement.description
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10 group-hover:opacity-100" />
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Add Meteors effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Meteors number={5} />
            </div>
        </section>
    )
}
