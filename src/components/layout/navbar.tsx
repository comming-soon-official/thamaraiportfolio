'use client'

import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
]

const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com' },
    {
        icon: <Instagram className="w-5 h-5" />,
        href: 'https://instagram.com'
    },
    {
        icon: <Linkedin className="w-5 h-5" />,
        href: 'https://linkedin.com'
    }
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/10 backdrop-blur-xl border-b border-white/10`}
        >
            <nav className="container px-4 mx-auto">
                <div className="relative flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    >
                        Thamarai
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:gap-8">
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm text-gray-300 transition-colors group hover:text-white"
                                >
                                    {item.name}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pl-8 border-l border-white/10">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-2 text-gray-400 transition-colors rounded-lg hover:text-white hover:bg-white/5"
                                    target="_blank"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-400 lg:hidden hover:text-white"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        height: isMobileMenuOpen ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden"
                >
                    {isMobileMenuOpen && (
                        <div className="px-2 pt-2 pb-4 space-y-1 border-t border-white/10">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-base text-gray-300 rounded-md hover:bg-white/5 hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-4 px-3 pt-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="p-2 text-gray-400 transition-colors rounded-lg hover:text-white hover:bg-white/5"
                                        target="_blank"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </nav>

            {/* Animated Background Gradient */}
            {isScrolled && (
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-gradient" />
                </div>
            )}
        </motion.header>
    )
}
