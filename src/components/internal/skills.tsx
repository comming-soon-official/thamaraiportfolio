'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Lightbulb, Palette, Pencil, Shapes } from 'lucide-react'
import { useRef } from 'react'

import Meteors from '../ui/meteors'

const skillsData = [
    {
        category: 'Design Software',
        icon: <Palette className="w-6 h-6" />,
        skills: [
            {
                name: 'Adobe Photoshop',
                level: 95,
                color: 'from-blue-500 to-cyan-500'
            },
            {
                name: 'Adobe Illustrator',
                level: 92,
                color: 'from-orange-500 to-red-500'
            },
            {
                name: 'Adobe InDesign',
                level: 88,
                color: 'from-purple-500 to-pink-500'
            }
        ]
    },
    {
        category: 'Design Skills',
        icon: <Pencil className="w-6 h-6" />,
        skills: [
            {
                name: 'Typography & Layout',
                level: 90,
                color: 'from-emerald-500 to-green-500'
            },
            {
                name: 'Brand Identity Design',
                level: 88,
                color: 'from-violet-500 to-indigo-500'
            },
            {
                name: 'Print & Digital Design',
                level: 85,
                color: 'from-yellow-500 to-amber-500'
            }
        ]
    }
]

const specialities = [
    {
        icon: <Shapes className="w-8 h-8" />,
        title: 'Brand Identity',
        description: 'Crafting unique visual brand experiences',
        gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
        icon: <Brain className="w-8 h-8" />,
        title: 'Print Design',
        description: 'Creating impactful print materials',
        gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: 'Digital Design',
        description: 'Responsive web & mobile design',
        gradient: 'from-orange-500/20 to-yellow-500/20'
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Motion Design',
        description: 'Engaging animated graphics',
        gradient: 'from-green-500/20 to-emerald-500/20'
    }
]

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section
            ref={containerRef}
            className="relative py-32 bg-[#0A0118] overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 blur-3xl" />
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0A0118] to-transparent" />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl mx-auto mb-20 text-center"
                >
                    <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-purple-950/50 backdrop-blur-sm border border-purple-500/30">
                        <Shapes className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">
                            Expertise & Skills
                        </span>
                    </motion.div>
                    <h2 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-pink-300">
                        Creative Capabilities
                    </h2>
                    <p className="text-lg text-white/60">
                        Crafting digital experiences with precision and
                        creativity
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{
                                opacity: 0,
                                x: idx % 2 === 0 ? -50 : 50
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="p-6 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-purple-500/20">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white">
                                    {category.category}
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between text-white/80">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-white/10">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.level}%`
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    delay: index * 0.2
                                                }}
                                                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Specialities */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {specialities.map((specialty, index) => (
                        <motion.div
                            key={specialty.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative p-6 border rounded-xl bg-white/5 backdrop-blur-sm border-white/10 group"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${specialty.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity`}
                            />
                            <div className="relative z-10">
                                <div className="p-3 mb-4 rounded-lg bg-white/10 w-fit">
                                    {specialty.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-white">
                                    {specialty.title}
                                </h3>
                                <p className="text-white/60">
                                    {specialty.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Meteors Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Meteors number={10} />
            </div>
        </section>
    )
}

export default Skills
