import { cn } from "@/lib/utils";

export type TreeNode = {
  label: string;
  note?: string;
  children?: TreeNode[];
};

function Node({ node, depth }: { node: TreeNode; depth: number }) {
  return (
    <div className={cn(depth > 0 && "ml-6 border-l border-border pl-6")}>
      <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface px-4 py-3 my-2">
        <span className="text-sm font-semibold text-foreground">{node.label}</span>
        {node.note && <span className="text-xs text-muted">{node.note}</span>}
      </div>
      {node.children?.map((child) => (
        <Node key={child.label} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export function TreeDiagram({ root, className }: { root: TreeNode; className?: string }) {
  return (
    <div className={className}>
      <Node node={root} depth={0} />
    </div>
  );
}
