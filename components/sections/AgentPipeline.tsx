import { Fragment } from "react";
import { Reveal } from "../ui/Reveal";
import { agentPipeline } from "@/data/ai";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AgentPipeline() {
  return (
    <Reveal delay={120}>
      <div className="rounded-3xl border border-line bg-ink-soft p-7 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Sistemas além de um único modelo
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 lg:flex-row lg:justify-between">
          {agentPipeline.map((node, i) => {
            const isOutput = i === agentPipeline.length - 1;
            const isOrchestrator = node === "Orquestração";
            return (
              <Fragment key={`${node}-${i}`}>
                <div
                  className={`w-full rounded-xl border px-4 py-3.5 text-center text-sm font-medium lg:w-32 ${
                    isOrchestrator || isOutput
                      ? "border-accent/50 bg-accent-soft text-accent"
                      : "border-line-strong bg-ink text-paper"
                  }`}
                >
                  {node}
                </div>
                {i < agentPipeline.length - 1 ? (
                  <Arrow className="h-5 w-5 shrink-0 rotate-90 text-faint lg:rotate-0" />
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
