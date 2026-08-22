import type { EvidenceStatus } from "@/lib/types";

export function Badge({ children }: { children: EvidenceStatus | string }) {
  const key = String(children).toLowerCase().replaceAll(" ", "-");
  return <span className={`badge badge-${key}`}>{children}</span>;
}
