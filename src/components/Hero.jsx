import Countdown from "./Countdown.jsx"
import { RotatingWords } from "./RotatingWords.tsx"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="p-10 md:p-12 lg:p-16">
        <h1 className="text-justify lg:px-20 text-5xl md:text-7xl lg:text-8xl font-display">
          <span className="text-6xl md:text-8xl lg:text-9xl block sm:inline animate-gradient bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
            Yumatic
          </span> is coming to change the way you&nbsp;
          <RotatingWords words={["eat.", "cook.", "snack."]} />
        </h1>

        <Countdown />
      </main >
    </div >
  )
}

export default Hero
