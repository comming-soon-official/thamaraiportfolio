'use client'

import { motion } from 'framer-motion'
import { FolderGit2 } from 'lucide-react'

import ImageGallery from '../ui/image-gallery'
import Meteors from '../ui/meteors'

const projectData = [
    {
        id: 1,
        elements: [
            {
                id: 1,
                img: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Brand Identity Design',
                description: 'Complete brand redesign for a tech startup'
            },
            {
                id: 2,
                img: 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'UI/UX Design System',
                description: 'Modern design system for web application'
            }
        ]
    },
    {
        id: 2,
        elements: [
            {
                id: 3,
                img: 'https://images.unsplash.com/photo-1637958653605-4590ff5fc440?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Motion Graphics',
                description: 'Animated promotional content'
            },
            {
                id: 4,
                img: 'https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp',
                title: 'Digital Illustrations',
                description: 'Series of custom illustrations'
            }
        ]
    },
    {
        id: 3,
        elements: [
            {
                id: 5,
                img: 'https://i.pinimg.com/736x/dd/9d/13/dd9d13378aba037436a5584afb55e67a.jpg',
                title: 'Social Media Kit',
                description: 'Complete social media design package'
            },
            {
                id: 6,
                img: 'https://i.pinimg.com/736x/44/e3/6d/44e36da9eb3789bb300bda0fd532b429.jpg',
                title: 'Print Design',
                description: 'Marketing materials and brochures'
            }
        ]
    },
    {
        id: 4,
        elements: [
            {
                id: 7,
                img: 'https://i.pinimg.com/736x/fe/f1/79/fef179af18b25cd5e6b155b85b326409.jpg',
                title: 'Social Media Kit',
                description: 'Complete social media design package'
            },
            {
                id: 8,
                img: 'https://i.pinimg.com/736x/18/ee/e9/18eee9a514644b1cffda32412e7a58e3.jpg',
                title: 'Print Design',
                description: 'Marketing materials and brochures'
            }
        ]
    },
    {
        id: 5,
        elements: [
            {
                id: 9,
                img: 'https://i.pinimg.com/736x/e4/3c/3f/e43c3f3de6770619e3cae7c8292f4bae.jpg',
                title: 'Social Media Kit',
                description: 'Complete social media design package'
            },
            {
                id: 10,
                img: 'https://i.pinimg.com/736x/c0/a6/35/c0a635e100eab920564c7363aad987c7.jpg',
                title: 'Print Design',
                description: 'Marketing materials and brochures'
            }
        ]
    }
]

const Projects = () => {
    return (
        <section className="relative py-32 bg-gradient-to-b from-[#000D1A] via-[#1A0B2E] to-[#0A0118] overflow-hidden">
            <div>
                {/* Background effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" />
                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0A0118] to-transparent" />
                </div>

                <div className="container relative px-4 mx-auto">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl mx-auto mb-20 text-center"
                    >
                        <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30">
                            <FolderGit2 className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm text-gray-300">
                                Featured Projects
                            </span>
                        </motion.div>
                        <h2 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                            My Creative Portfolio
                        </h2>
                        <p className="text-lg text-white/60">
                            Explore a collection of my latest design projects
                            and creative works
                        </p>
                    </motion.div>

                    {/* Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ImageGallery
                            columns={projectData}
                            galleryItemSize={{ width: 300, height: 400 }}
                            activeItemSize={{ width: 800, height: 600 }}
                            className="mx-auto"
                        />
                    </motion.div>
                </div>

                {/* Meteors effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Meteors number={5} />
                </div>
            </div>
        </section>
    )
}

export default Projects
