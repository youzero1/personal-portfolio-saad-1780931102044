import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <div className="w-24 h-24 rounded-full bg-brand/20 border-2 border-brand flex items-center justify-center mb-6 text-4xl">
        👨‍💻
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I'm{' '}
        <span className="text-brand">Alex</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl">
        Full-Stack Developer building modern web experiences
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-600 hover:border-brand text-gray-300 hover:text-white rounded-lg font-semibold transition-colors"
        >
          Get In Touch
        </a>
      </div>
      <a href="#about" className="mt-16 text-gray-600 hover:text-gray-400 animate-bounce">
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
