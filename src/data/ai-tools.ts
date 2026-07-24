import { SiClaude, SiGooglegemini, SiPerplexity } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { Orbit } from "lucide-react";
import type { ComponentType } from "react";

export type AiTool = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
};

export const aiTools: AiTool[] = [
  {
    name: "Claude",
    icon: SiClaude,
    description: "Agentic coding, code review, and architecture decisions — daily driver",
  },
  {
    name: "Codex",
    icon: TbBrandOpenai,
    description: "Code generation and autocompletion inside the editor",
  },
  {
    name: "Gemini",
    icon: SiGooglegemini,
    description: "Multimodal reasoning and long-context codebase analysis",
  },
  {
    name: "Antigravity",
    icon: Orbit,
    description: "Agentic IDE workflows for multi-file, multi-step changes",
  },
  {
    name: "Perplexity",
    icon: SiPerplexity,
    description: "Fast, sourced technical research instead of open-ended search",
  },
];
