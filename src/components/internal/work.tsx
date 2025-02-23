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
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl mx-auto text-center mb-20"
                >
                    <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-gray-300">
                            Professional Journey
                        </span>
                    </motion.div>
                    <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                        Work Experience
                    </h2>
                    <p className="text-lg text-white/60">
                        A showcase of my professional experience and key
                        achievements
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto space-y-40">
                    {workExperience.map((experience, index) => (
                        <motion.div
                            key={experience.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className={cn(
                                'flex flex-col md:flex-row gap-16 items-start',
                                index % 2 === 1 && 'md:flex-row-reverse'
                            )}
                        >
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
                                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-2">
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
                                            className="relative group rounded-2xl p-6 bg-indigo-950/20 hover:bg-indigo-950/30 backdrop-blur-sm border border-indigo-500/20"
                                        >
                                            {/* Achievement Content */}
                                            <div className="flex items-start gap-6">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-xl font-semibold text-white">
                                                            {achievement.title}
                                                        </h3>
                                                        {achievement.tag && (
                                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500/80 to-rose-500/80 text-white">
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
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
