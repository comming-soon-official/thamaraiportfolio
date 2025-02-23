'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Eye, Layout, Library, Palette, Shapes, Stars } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    // Floating design elements data
    const designElements = [
        {
            icon: <Shapes className="w-full h-full" />,
            position: 'top-20 left-20'
        },
        {
            icon: <Layout className="w-full h-full" />,
            position: 'top-40 right-32'
        },
        {
            icon: <Stars className="w-full h-full" />,
            position: 'bottom-32 left-1/4'
        },
        {
            icon: <Library className="w-full h-full" />,
            position: 'bottom-20 right-1/4'
        }
    ]

    return (
        <div
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                className="absolute inset-0 bg-grid-white/[0.01]"
                style={{
                    backgroundSize: '30px 30px',
                    backgroundImage:
                        'linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)'
                }}
            />

            {/* Floating Design Elements */}
            {designElements.map((element, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        y: [0, -20, 0],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 8,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className={`absolute w-12 h-12 text-white/10 ${element.position}`}
                >
                    {element.icon}
                </motion.div>
            ))}

            {/* Main Content Container */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between"
            >
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 space-y-6 text-center lg:text-left"
                >
                    {/* Designer Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-4 py-2 border border-purple-500/20"
                    >
                        <Palette className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">
                            Visual Designer
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-4xl lg:text-6xl font-bold space-y-3">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
                        >
                            Creating Visual
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                        >
                            Stories That Matter
                        </motion.span>
                    </h1>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-8 justify-center lg:justify-start text-white/80"
                    >
                        <div>
                            <div className="text-3xl font-bold text-purple-400">
                                8+
                            </div>
                            <div className="text-sm">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-pink-400">
                                150+
                            </div>
                            <div className="text-sm">Projects Completed</div>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-4 justify-center lg:justify-start"
                    >
                        <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition-colors">
                            View Portfolio
                        </button>
                        <button className="px-6 py-3 border border-white/10 hover:bg-white/5 rounded-full font-medium transition-colors flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            Showreel
                        </button>
                    </motion.div>
                </motion.div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 mt-12 lg:mt-0"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
                        <img
                            src="/designer-workspace.png"
                            alt="Designer Workspace"
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero
