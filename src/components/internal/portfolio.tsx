'use client'

import { motion } from 'framer-motion'
import { Camera, Code, Figma, Paintbrush2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Portfolio = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const projects = [
        { title: 'Brand Identity', image: '/project1.jpg' },
        { title: 'UI/UX Design', image: '/project2.jpg' },
        { title: 'Web Design', image: '/project3.jpg' }
        // Add more projects
    ]

    const services = [
        { icon: <Figma />, title: 'UI/UX Design' },
        { icon: <Code />, title: 'Web Development' },
        { icon: <Camera />, title: 'Photography' },
        { icon: <Paintbrush2 />, title: 'Illustration' }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center z-10"
                >
                    <motion.h1
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                        Creative Designer
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        className="text-xl text-gray-300"
                    >
                        Turning ideas into digital experiences
                    </motion.p>
                </motion.div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
            </section>

            {/* About Section */}
            <motion.section
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                className="py-20 px-4 md:px-20"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                Professional designer with over 5 years of
                                experience in creating digital experiences that
                                users love.
                            </p>
                            {/* Add more about content */}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <section className="py-20 px-4 md:px-20 bg-black/50">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Featured Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="relative h-[300px] rounded-lg overflow-hidden group"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-0 p-4">
                                    <h3 className="text-xl font-bold">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 md:px-20">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Services
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm"
                        >
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold">
                                {service.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 md:px-20 bg-black/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Let's Work Together
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-lg"
                    >
                        Contact Me
                    </motion.button>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
