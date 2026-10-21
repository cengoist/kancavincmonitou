import { Plus } from "lucide-react";
import type { Faq } from "@/lib/services";

export function FaqList({ faqs, name = "faq" }: { faqs: Faq[]; name?: string }) {
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          name={name}
          open={i === 0}
          className="card-surface group rounded-2xl transition-colors open:border-brand-500/40 open:bg-ink-800"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6">
            <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">{f.q}</h3>
            <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-all duration-300">
              <Plus className="size-5" />
            </span>
          </summary>
          <div className="faq-body">
            <div className="overflow-hidden">
              <p className="px-5 pb-6 leading-relaxed text-white/65 sm:px-6 sm:text-[1.02rem]">{f.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
