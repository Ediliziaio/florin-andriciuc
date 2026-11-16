import type { Block } from "./article-types";

/** Shared anchors keep the table of contents and rendered headings aligned. */
export function articleHeadings(blocks: Block[]) {
  const seen = new Map<string, number>();
  return blocks.flatMap((block, index) => {
    if (block.type !== "h2") return [];
    const base = block.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "sezione";
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    return [{ index, text: block.text, id: count === 1 ? base : `${base}-${count}` }];
  });
}
