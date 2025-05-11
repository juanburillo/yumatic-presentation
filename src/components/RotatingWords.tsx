import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type RotatingWordProps = {
  words: string[]
}
 
export function RotatingWords({ words = ["Word 1", "Word 2", "Word 3"] }: RotatingWordProps) {
  const [index, setIndex] = useState(0)
 
  useEffect(() => {
    if (words.length <= 1) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [words])

  return (
    <span aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="block sm:inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}