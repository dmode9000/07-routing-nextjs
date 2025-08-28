import { noteTags } from "@/types/note";
import Link from "next/link";
import css from "../SidebarNotes.module.css";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function SidebarNotes({ params }: Props) {
  const { slug } = await params;
  const currentTag = slug?.[0];
  return (
    <ul className={css.menuList}>
      {["All notes", ...noteTags].map((tagItem) => {
        const tagKey = tagItem === "All notes" ? "All" : tagItem;
        const isActive = currentTag === tagKey;

        return (
          <li className={css.menuItem} key={tagItem}>
            <Link
              href={`/notes/filter/${encodeURIComponent(tagKey)}`}
              className={`${css.menuLink} ${isActive ? css.active : ""}`}
            >
              {tagItem}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
