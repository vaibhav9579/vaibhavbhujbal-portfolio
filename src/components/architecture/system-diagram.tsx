import { ArrowDown } from "lucide-react";

const layers = [
  {
    label: "Client Layer",
    nodes: ["Angular Admin Console", "React / Next.js Portals", "Real-time Dashboard UI"],
  },
  {
    label: "API & Service Layer",
    nodes: ["REST API Gateway", "Auth Service (RBAC)", "WebSocket Gateway", "Node-RED Integration"],
  },
  {
    label: "Data & Messaging Layer",
    nodes: ["PostgreSQL / MySQL", "MongoDB", "RabbitMQ", "MQTT Broker"],
  },
  {
    label: "Edge & Devices",
    nodes: ["Industrial Sensors", "Third-party Integrations"],
  },
];

export function SystemDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex w-full flex-col items-center gap-3">
          <div className="w-full rounded-2xl border border-border bg-surface p-5">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent">
              {layer.label}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {layer.nodes.map((node) => (
                <span
                  key={node}
                  className="rounded-lg border border-border bg-surface-elevated px-4 py-2 text-xs font-medium text-foreground/80 sm:text-sm"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && <ArrowDown className="h-5 w-5 shrink-0 text-accent" />}
        </div>
      ))}
    </div>
  );
}
