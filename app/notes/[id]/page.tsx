// Libraries
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// Services
import { fetchNoteById } from "@/lib/api";
// Components
import NoteDetailsClient from "./NoteDetails.client";

interface Props {
  params: Promise<{ id: string }>;
}

//server component
const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
};

export default NoteDetails;
