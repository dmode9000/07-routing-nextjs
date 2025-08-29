// libraries
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// Services
import { fetchNoteById } from "@/lib/api";
// Components
import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "./NotePreview.client";

interface Props {
  params: Promise<{ id: string }>;
}

//server component
const NoteDetailsClient = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <Modal>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotePreviewClient />
      </HydrationBoundary>
    </Modal>
  );
};

export default NoteDetailsClient;
