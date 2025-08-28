//libraries
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
//components
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
//services
import { fetchNotes } from "@/lib/api";
// styles
import css from "./NotesPage.module.css";
import { noteTags, Tag } from "@/types/note";

type Props = {
  params: Promise<{ slug: string[] }>;
};

// This is a Server Component
export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  const tag = slug.length > 0 ? (slug[0] as Tag) : noteTags[0];
  // console.log("slug", slug);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page: 1, search: "", tag: tag }],
    queryFn: () => fetchNotes({ page: 1, search: "", tag: tag }),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient filter={slug} />
      </HydrationBoundary>
    </div>
  );
}
