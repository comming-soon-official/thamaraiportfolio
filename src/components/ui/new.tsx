'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import React, { useState } from 'react'

import { cn } from '../../lib/utils'

export interface GalleryItem {
    id: number
    img: string
    title: string
    description: string
    height?: number
}

export interface GalleryColumn {
    id: number
    elements: GalleryItem[]
}

export interface ImageGalleryProps {
    columns: GalleryColumn[]
    className?: string
    itemClassName?: string
    galleryItemSize?: {
        width: number
        height: number
    }
    activeItemSize?: {
        width: number
        height: number
    }
    smallItemSize?: {
        width: number
        height: number
    }
}

const defaultGalleryItemSize = { width: 250, height: 300 }
const defaultActiveItemSize = { width: 700, height: 500 }
const defaultSmallItemSize = { width: 120, height: 120 }

const ImageGallery = ({
    columns,
    className,
    itemClassName
}: ImageGalleryProps) => {
    const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)
    const allElements = columns.flatMap((column) => column.elements)

    return (
        <div
            className={cn(
                'relative w-full h-full overflow-hidden center',
                className
            )}
        >
            <motion.div
                layout
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex-col w-full gap-10"
            >
                <motion.div
                    className="flex items-start justify-center w-full gap-2"
                    layout
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {columns.map((column, columnIndex) => (
                        <motion.div
                            className={cn(
                                'w-48 flex flex-col items-center justify-center gap-2',
                                itemClassName
                            )}
                            key={column.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: columnIndex * 0.2 }}
                        >
                            {column.elements.map((ele, index) => (
                                <motion.div
                                    key={ele.id}
                                    layoutId={`card-${ele.id}`}
                                    className={cn(
                                        'rounded-2xl cursor-pointer overflow-hidden group relative',
                                        'border border-indigo-500/20',
                                        'shadow-[0_0_1rem_-0.5rem_rgba(79,70,229,0.3)]',
                                        'hover:shadow-[0_0_2rem_-0.5rem_rgba(79,70,229,0.5)]',
                                        'transition-all duration-300'
                                    )}
                                    style={{
                                        height: ele.height || 300,
                                        width: 192
                                    }}
                                    onClick={() => setActiveItem(ele)}
                                    whileHover={{ scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: (columnIndex * 3 + index) * 0.1
                                    }}
                                >
                                    <motion.div className="relative w-full h-full">
                                        <motion.img
                                            src={ele.img}
                                            alt={ele.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]"
                                        >
                                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                                                {ele.title}
                                            </h3>
                                            <p className="mt-2 text-sm text-gray-300/90">
                                                {ele.description}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
                {activeItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
                    >
                        <motion.button
                            className="absolute text-gray-400 transition-colors hover:text-white top-6 right-6"
                            onClick={() => setActiveItem(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${activeItem.id}`}
                            className="flex flex-col items-center gap-6 p-4"
                        >
                            <motion.div
                                className="overflow-hidden rounded-3xl border border-indigo-500/20 shadow-[0_0_3rem_-1rem_rgba(79,70,229,0.5)]"
                                style={{ width: 800, height: 500 }}
                            >
                                <motion.img
                                    src={activeItem.img}
                                    alt={activeItem.title}
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center"
                            >
                                <h2 className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                                    {activeItem.title}
                                </h2>
                                <p className="text-lg text-gray-400/90">
                                    {activeItem.description}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-4 gap-4 mt-4"
                            >
                                {allElements
                                    .filter((ele) => ele.id !== activeItem.id)
                                    .map((ele, index) => (
                                        <motion.div
                                            key={ele.id}
                                            className="relative overflow-hidden rounded-lg cursor-pointer group"
                                            onClick={() => setActiveItem(ele)}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <motion.img
                                                src={ele.img}
                                                alt={ele.title}
                                                className="object-cover w-32 h-32 transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <motion.div
                                                className="absolute inset-0 transition-opacity opacity-0 bg-black/50 group-hover:opacity-100"
                                                initial={false}
                                            />
                                        </motion.div>
                                    ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ImageGallery
