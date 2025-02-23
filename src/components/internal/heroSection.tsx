import { Brush, PaintBucket } from 'lucide-react'
import { useEffect } from 'react'
import { AiOutlinePartition } from 'react-icons/ai'
import { BiDownload } from 'react-icons/bi'
import { ImMagicWand } from 'react-icons/im'
import { MdAlternateEmail } from 'react-icons/md'
import { TbMusicStar } from 'react-icons/tb'

import { Float } from '@react-three/drei'

import { FlipWords } from '../ui/flip-words'
import Meteors from '../ui/meteors'
import SparklesText from '../ui/sparkles-text'

// Modified Shapes Component with more elements
const Shapes = () => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group scale={1.5}>
                {[...Array(5)].map((_, i) => (
                    <mesh
                        key={i}
                        position={[
                            Math.sin((i * Math.PI * 2) / 5) * 3,
                            Math.cos((i * Math.PI * 2) / 5) * 3,
                            0
                        ]}
                    >
                        <torusGeometry args={[1, 0.2, 16, 60]} />
                        <meshBasicMaterial
                            wireframe
                            opacity={0.15}
                            transparent
                            color="#4F46E5"
                        />
                    </mesh>
                ))}
                <mesh>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshBasicMaterial
                        wireframe
                        opacity={0.08}
                        transparent
                        color="#818CF8"
                    />
                </mesh>
            </group>
        </Float>
    )
}

export default function Hero() {
    const words = [
        'Visual Designer & Brand Strategist',
        'Motion Graphics Artist & Illustrator',
        'UI/UX Designer & Digital Artist',
        'Creative Director & Design Thinker'
    ]

    useEffect(() => {
        // Dynamic imports for Prism
        const loadPrism = async () => {
            if (typeof window !== 'undefined') {
                // Import core first
                const Prism = (await import('prismjs')).default
                // Then import language
                await import('prismjs')
                // Import CSS
                await import('../../assets/tomorrow.css')

                // Now highlight
                Prism.highlightAll()
            }
        }

        loadPrism()
    }, [])

    return (
        <>
            <main className="relative pt-20 lg:pt-0 bg-gradient-to-b from-[#0A0118] via-[#1A0B2E] to-[#000D1A] text-white min-h-screen overflow-hidden">
                {/* 3D Background Canvas with modified wrapper */}

                {/* Add a gradient transition at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#000D1A] pointer-events-none"></div>

                {/* Content Section with improved overlay */}
                <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118]/90 via-[#1A0B2E]/80 to-[#000D1A]/90 backdrop-blur-[2px]"></div>

                    {/* Meteors Effect */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Meteors number={10} />
                    </div>

                    {/* Main Content Container with adjusted width */}
                    <div className="relative z-10 max-w-5xl mx-auto text-center py-12">
                        {/* Welcome Badge with new colors */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30 mb-6 sm:mb-8 animate__animated animate__fadeInDown">
                            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                            <span className="text-gray-200 text-xs sm:text-sm font-medium">
                                Welcome to my creative space
                            </span>
                        </div>

                        {/* Name Section */}
                        <div className="relative mb-6 sm:mb-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                                <SparklesText text="Hello" />
                                <span className="relative inline-block">
                                    I'm
                                    <span className="typing-effect gradient-text">
                                        {' '}
                                        Thamarai Selvi
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Role Badge with new colors */}
                        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6 sm:mb-8 backdrop-blur-sm">
                            <i className="fas fa-rocket text-indigo-400 animate-bounce"></i>
                            <FlipWords
                                className="text-lg sm:text-xl text-indigo-400 font-medium"
                                words={words}
                            />
                        </div>

                        {/* Description */}
                        <div className="relative mb-8 sm:mb-12">
                            <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed max-w-2xl mx-auto">
                                Passionate graphic designer with 2+ years of
                                experience crafting compelling visual stories.
                                Specializing in brand identity, motion graphics,
                                and digital illustrations that bring ideas to
                                life. Committed to delivering innovative design
                                solutions that elevate brands and engage
                                audiences.
                            </p>
                        </div>

                        {/* CTA Buttons with new styles */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
                            {/* View Projects Button */}
                            <a
                                href="#portfolio"
                                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#818CF8] shadow-[0_0_1rem_-0.5rem_#818CF8]"
                            >
                                <span className="block w-full px-8 py-4 rounded-[11px] bg-[#0A0118] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500">
                                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                                        <MdAlternateEmail className="size-5" />
                                        <span>Contact</span>
                                    </span>
                                </span>
                            </a>

                            {/* Contact Button */}
                            <a
                                href="#"
                                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105"
                            >
                                <span className="block w-full px-8 py-4 rounded-[11px] bg-[#0A0118] border border-gray-800 transition-all duration-300 group-hover:border-indigo-500/50">
                                    <span className="relative flex items-center justify-center gap-2 text-gray-400 font-medium group-hover:text-indigo-400">
                                        <span>Get Resume</span>
                                        <BiDownload className="size-5" />
                                    </span>
                                </span>
                            </a>
                        </div>

                        {/* Floating Skill Badges - Repositioned and restyled */}
                        <div className="hidden lg:block absolute -left-1/2 top-1/4  animate-float-slow opacity-80">
                            <div className="flex items-center px-4 py-2 rounded-lg bg-indigo-950/30 -rotate-12 backdrop-blur-sm border border-indigo-500/20 text-indigo-400 shadow-[0_0_1rem_-0.3rem_#818CF8]">
                                <Brush className="" />
                                &nbsp;&nbsp;Brand Design
                            </div>
                        </div>
                        <div className="hidden lg:block absolute -left-2/3 top-2/3  animate-float-slow opacity-80">
                            <div className="flex items-center  px-4 py-2 rounded-lg  bg-purple-950/30 rotate-12 backdrop-blur-sm border border-purple-500/20 text-purple-400 shadow-[0_0_1rem_-0.3rem_#A855F7]">
                                <PaintBucket />
                                &nbsp;&nbsp;Color Theory
                            </div>
                        </div>
                        <div className="hidden lg:block absolute right-72 -top-24 animate-float opacity-80">
                            <div className="flex items-center px-4 py-2 rounded-lg bg-purple-950/30 backdrop-blur-sm border border-purple-500/20 text-purple-400 shadow-[0_0_1rem_-0.3rem_#A855F7]">
                                <AiOutlinePartition />
                                &nbsp;&nbsp;UI/UX Design
                            </div>
                        </div>
                        <div className="hidden lg:block absolute -right-1/2 top-1/4 animate-float opacity-80">
                            <div className="flex items-center px-4 py-2 rounded-lg bg-blue-950/30 rotate-12 backdrop-blur-sm border border-blue-500/20 text-blue-400 shadow-[0_0_1rem_-0.3rem_#60A5FA]">
                                <ImMagicWand />
                                &nbsp;&nbsp;Motion Design
                            </div>
                        </div>
                        <div className="hidden lg:block absolute -right-2/3 top-2/3 animate-float opacity-80">
                            <div className="flex items-center px-4 py-2 rounded-lg bg-blue-950/30 -rotate-12 backdrop-blur-sm border border-purple-500/20 text-purple-400 shadow-[0_0_1rem_-0.3rem_#A855F7]">
                                <TbMusicStar />
                                &nbsp;&nbsp;Visual Identity
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
