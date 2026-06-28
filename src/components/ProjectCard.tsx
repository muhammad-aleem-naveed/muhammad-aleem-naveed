import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

interface ProjectCardProps {
  index: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  meta: string[];
  href: string;
  image: string;
}

export default function ProjectCard({
  index,
  title,
  tagline,
  description,
  tags,
  meta,
  href,
  image,
}: ProjectCardProps) {
  return (
    <Reveal>
      <motion.a
        href={href}
        whileHover="hover"
        initial="rest"
        className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
      >
        {/* visual header block */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0a0a0a]">
          <motion.img
            src={image}
            alt={title}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 left-5 font-mono text-xs text-white/50 tracking-[0.2em]">
            {index}
          </div>
          <div className="absolute top-4 right-4">
            <motion.div
              variants={{
                rest: { opacity: 0, x: -4 },
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center"
            >
              <ArrowUpRight size={15} />
            </motion.div>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col flex-1 p-7 md:p-8">
          <p className="font-mono text-xs text-white/40 tracking-wide uppercase mb-2">
            {tagline}
          </p>
          <h3 className="font-display text-2xl font-semibold text-white tracking-tight">
            {title}
          </h3>
          <p className="mt-4 text-sm text-white/50 leading-relaxed flex-1">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-white/60 border border-white/10 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap gap-x-5 gap-y-1.5">
            {meta.map((m) => (
              <span key={m} className="text-xs text-white/35">
                {m}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}
