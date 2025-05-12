import Countdown from "./Countdown"
import { RotatingWords } from "./RotatingWords"

const Hero = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-10 md:p-12 lg:p-16 w-full">
        <h1 className="sr-only">
          Yumatic is coming to change the way you eat, cook, and snack.
        </h1>
        <h2 aria-hidden="true" className="lg:mx-24 font-display">
          <span className="block text-6xl md:text-8xl lg:text-9xl animate-gradient bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
            Yumatic
          </span>
          <span className="text-5xl md:text-7xl lg:text-8xl">
            is coming to change the way you&nbsp;
            <RotatingWords words={["eat.", "cook.", "snack."]} />
          </span>
        </h2>

        {/*<Countdown />*/}
      </div >
    </main >
  )
}

export default Hero
