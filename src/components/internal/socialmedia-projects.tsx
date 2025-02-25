import { motion } from 'framer-motion'

import CircularGallery from '../ui/circular-gallery'
import Meteors from '../ui/meteors'

const socialProjects = [
    {
        image: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Brand Identity Design'
    },
    {
        image: 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'UI/UX Design System'
    },
    {
        image: 'https://images.unsplash.com/photo-1637958653605-4590ff5fc440?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Motion Graphics'
    },
    {
        image: 'https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp',
        text: 'Digital Illustrations'
    },
    {
        image: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Brand Identity Design'
    },
    {
        image: 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'UI/UX Design System'
    },
    {
        image: 'https://images.unsplash.com/photo-1637958653605-4590ff5fc440?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Motion Graphics'
    },
    {
        image: 'https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp',
        text: 'Digital Illustrations'
    }
]

export default function SocialMediaProjects() {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#000D1A] via-[#1A0B2E] to-[#0A0118]">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-rose-500/5 blur-3xl" />
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
                    <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30">
                        <span className="text-sm text-gray-300">
                            Social Media Showcase
                        </span>
                    </motion.div>
                    <h2 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-white/60">
                        Explore my latest design work across social platforms
                    </p>
                </motion.div>

                {/* Circular Gallery */}
                <div className="relative mx-auto max-w-7xl">
                    <CircularGallery
                        items={socialProjects}
                        theme="social"
                        className="min-h-[600px]"
                    />
                </div>
            </div>

            {/* Meteors effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Meteors number={5} />
            </div>
        </section>
    )
}
