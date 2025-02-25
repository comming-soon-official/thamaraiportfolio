'use client'

import { motion } from 'framer-motion'
import {
    Brush,
    Code2,
    Dribbble,
    Facebook,
    Github,
    Globe,
    Heart,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    Twitter
} from 'lucide-react'

import { cn } from '../../lib/utils'
import Meteors from '../ui/meteors'

const socialLinks = [
    {
        icon: <Instagram className="w-5 h-5" />,
        href: 'https://instagram.com',
        label: 'Instagram',
        color: 'hover:text-pink-500'
    },
    {
        icon: <Dribbble className="w-5 h-5" />,
        href: 'https://dribbble.com',
        label: 'Dribbble',
        color: 'hover:text-rose-500'
    },
    {
        icon: <Github className="w-5 h-5" />,
        href: 'https://github.com',
        label: 'Github',
        color: 'hover:text-violet-500'
    },
    {
        icon: <Linkedin className="w-5 h-5" />,
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        color: 'hover:text-blue-500'
    },
    {
        icon: <Twitter className="w-5 h-5" />,
        href: 'https://twitter.com',
        label: 'Twitter',
        color: 'hover:text-sky-500'
    },
    {
        icon: <Facebook className="w-5 h-5" />,
        href: 'https://facebook.com',
        label: 'Facebook',
        color: 'hover:text-indigo-500'
    }
]

const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
]

const services = [
    { name: 'UI/UX Design', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Brand Identity', icon: <Brush className="w-4 h-4" /> },
    { name: 'Web Design', icon: <Globe className="w-4 h-4" /> }
]

const contactInfo = [
    {
        icon: <Mail className="w-4 h-4" />,
        text: 'hello@example.com',
        href: 'mailto:hello@example.com'
    },
    {
        icon: <Phone className="w-4 h-4" />,
        text: '+1 234 567 890',
        href: 'tel:+1234567890'
    }
]

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0118]">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] to-[#0A0118]" />

            <div className="container relative px-4 mx-auto">
                {/* Main Footer Content */}
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <a
                            href="/"
                            className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        >
                            Thamarai
                        </a>
                        <p className="text-white/60">
                            Creating captivating designs that tell your story
                            and elevate your brand.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        'p-2 text-white/60 transition-all duration-300 rounded-lg hover:bg-white/5',
                                        social.color
                                    )}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="relative transition-colors text-white/60 hover:text-white group"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 w-0 h-px transition-all -bottom-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li
                                    key={service.name}
                                    className="flex items-center gap-2 text-white/60"
                                >
                                    {service.icon}
                                    <span>{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3">
                            {contactInfo.map((info) => (
                                <li key={info.text}>
                                    <a
                                        href={info.href}
                                        className="flex items-center gap-2 transition-colors text-white/60 hover:text-white"
                                    >
                                        {info.icon}
                                        <span>{info.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-6 text-center border-t border-white/10">
                    <p className="flex items-center justify-center gap-1 text-white/60">
                        Made with{' '}
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />{' '}
                        by Himal &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </div>

            {/* Meteors Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Meteors number={5} />
            </div>
        </footer>
    )
}
