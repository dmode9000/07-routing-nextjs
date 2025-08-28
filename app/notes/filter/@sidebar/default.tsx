import { noteTags, Tag } from "@/types/note";
import Link from "next/link";
import css from "@/app/notes/filter/@sidebar/SidebarNotes.module.css";

export default async function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      {["All notes", ...noteTags].map((tag) => {
        return (
          <li className={css.menuItem} key={tag}>
            <Link
              href={`/notes/filter/${encodeURIComponent(tag.split(" ")[0])}`}
              className={css.menuLink}
            >{`${tag}`}</Link>
          </li>
        );
      })}
    </ul>
  );
}
