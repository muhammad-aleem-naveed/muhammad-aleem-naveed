import { motion } from "framer-motion";

interface Route {
  task: string;
  tool: string;
  note: string;
}

const routes: Route[] = [
  { task: "Coding & debugging", tool: "Claude", note: "architecture, implementation, end-to-end debugging" },
  { task: "General-purpose tasks", tool: "ChatGPT", note: "broad reasoning, drafting, quick iteration" },
  { task: "Image & design", tool: "Gemini", note: "visual assets and design direction" },
  { task: "Trend & behavioral analysis", tool: "Grok", note: "reading patterns and audience behavior" },
  { task: "Documentation", tool: "Kimi", note: "structured writing and reference material" },
];

/**
 * The page's signature element: a literal map of task -> AI platform,
 * mirroring how the work actually gets routed and directed.
 */
export default function ToolRouter() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-2 md:p-3">
      {routes.map((route, i) => (
        <motion.div
          key={route.tool}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative flex flex-col md:flex-row md:items-center gap-3 md:gap-0 px-5 md:px-7 py-5 md:py-6 border-b border-white/[0.06] last:border-b-0"
        >
          {/* task */}
          <div className="md:w-[42%]">
            <span className="text-white/85 text-base md:text-lg">{route.task}</span>
          </div>

          {/* connector */}
          <div className="hidden md:flex items-center flex-1 px-4">
            <div className="relative h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 + 0.15, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-0 bg-white/40"
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 + 0.8 }}
              className="w-1.5 h-1.5 rounded-full bg-white -ml-1"
            />
          </div>

          {/* tool + note */}
          <div className="md:w-[34%] flex items-baseline gap-3">
            <span className="font-mono text-sm md:text-base text-white tracking-tight">
              {route.tool}
            </span>
            <span className="text-xs text-white/35 leading-snug">{route.note}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
