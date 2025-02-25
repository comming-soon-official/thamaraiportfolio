'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

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
                'relative w-full h-full overflow-hidden center px-8 sm:px-12', // increased padding
                className
            )}
        >
            <motion.div
                layout
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex-col w-full gap-10"
            >
                <motion.div
                    className="flex items-start justify-center w-full gap-2 sm:gap-4"
                    layout
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {columns.map((column) => (
                        <motion.div
                            className={cn(
                                'w-[50%] sm:w-64 flex flex-col items-center justify-center gap-2 sm:gap-4',
                                itemClassName,
                                `${activeItem ? '' : 'h-64 sm:h-full'}`
                            )}
                            key={column.id}
                            layout
                            animate={{
                                opacity: activeItem !== null ? 0 : 1,
                                willChange: 'auto'
                            }}
                        >
                            {column.elements.map((ele) => (
                                <Gallery
                                    item={ele}
                                    key={ele.id}
                                    onClick={() => setActiveItem(ele)}
                                />
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <AnimatePresence mode="popLayout">
                {activeItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, willChange: 'auto' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full overflow-hidden"
                    >
                        <motion.div
                            key={activeItem.id}
                            className="flex flex-col items-center justify-center w-full h-full gap-4 p-4 overflow-hidden sm:gap-10 sm:p-0"
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            layout
                        >
                            <motion.div
                                layoutId={`card-${activeItem.id}`}
                                className="relative w-full sm:w-[600px] h-[300px] sm:h-[400px] rounded-3xl cursor-pointer overflow-hidden"
                                onClick={() => setActiveItem(null)}
                            >
                                <motion.img
                                    src={activeItem.img}
                                    alt={activeItem.title}
                                    className="object-cover w-full h-full"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]"
                                >
                                    <motion.h2
                                        layoutId={`title-${activeItem.id}`}
                                        className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
                                    >
                                        {activeItem.title}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`desc-${activeItem.id}`}
                                        className="text-lg text-gray-400/90"
                                    >
                                        {activeItem.description}
                                    </motion.p>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {allElements
                                    .filter((ele) => ele.id !== activeItem.id)
                                    .map((ele) => (
                                        <motion.div
                                            key={ele.id}
                                            className="relative overflow-hidden rounded-lg cursor-pointer group"
                                            layoutId={`card-${ele.id}`}
                                            onClick={() => setActiveItem(ele)}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <motion.img
                                                src={ele.img}
                                                alt={ele.title}
                                                className="object-cover w-20 h-20 transition-transform duration-300 sm:w-32 sm:h-32 group-hover:scale-110"
                                            />
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50 group-hover:opacity-100"
                                                initial={false}
                                            >
                                                <motion.p
                                                    className="text-sm font-medium text-white"
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10
                                                    }}
                                                    whileHover={{
                                                        opacity: 1,
                                                        y: 0
                                                    }}
                                                >
                                                    {ele.title}
                                                </motion.p>
                                            </motion.div>
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

const Gallery = (props: {
    item: GalleryItem
    onClick: () => void
    isSmall?: boolean
}) => {
    return (
        <motion.div
            style={{
                height: props.isSmall ? 100 : props.item.height || 300,
                width: props.isSmall ? 100 : '100%'
            }}
            className={cn(
                'rounded-2xl cursor-pointer overflow-hidden group relative',
                'border border-indigo-500/20',
                'shadow-[0_0_1rem_-0.5rem_rgba(79,70,229,0.3)]',
                'hover:shadow-[0_0_2rem_-0.5rem_rgba(79,70,229,0.5)]',
                props.isSmall ? 'w-[100px]' : 'w-full'
            )}
            layoutId={`card-${props.item.id}`}
            onClick={props.onClick}
            whileHover={{ scale: 1.02 }}
        >
            <motion.img
                src={props.item.img}
                alt={props.item.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            {!props.isSmall && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]"
                >
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                        {props.item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300/90">
                        {props.item.description}
                    </p>
                </motion.div>
            )}
        </motion.div>
    )
}

export default ImageGallery
