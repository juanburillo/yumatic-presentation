import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type RotateWordProps = {
  words: string[]
}
 
export function RotateWords({ words = ["Word 1", "Word 2", "Word 3"] }: RotateWordProps) {
  const [index, setIndex] = useState(0)
 
  useEffect(() => {
    if (words.length <= 1) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [words])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        className="absolute"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  )
}