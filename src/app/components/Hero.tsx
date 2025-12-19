import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">Professional Video Editing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl mb-6"
            >
              Transform Your
              <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                Vision Into Reality
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-purple-100 mb-8 max-w-xl"
            >
              We craft stunning videos that captivate audiences and elevate your brand. From concept to final cut, we bring your stories to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-purple-50 transition-all hover:scale-105">
                Get Started
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
              <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <div>
                <div className="text-4xl mb-1">500+</div>
                <div className="text-purple-200 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-4xl mb-1">50+</div>
                <div className="text-purple-200 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl mb-1">4.9★</div>
                <div className="text-purple-200 text-sm">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2MDY4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Video editing workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">In Progress</div>
                  <div className="text-gray-900">24 Projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="text-sm mb-2 text-center">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
          />
        </div>
      </motion.div>
    </section>
  );
}
