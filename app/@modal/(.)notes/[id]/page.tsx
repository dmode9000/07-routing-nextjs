// Libraries
// Services
import { fetchNoteById } from "@/lib/api";
import NoteDetailMarkup from "@/components/NoteDetailMarkup/NoteDetailMarkup";
import Modal from "@/components/Modal/Modal";

interface Props {
  params: Promise<{ id: string }>;
}

//server component
const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NoteDetailMarkup note={note} />
    </Modal>
  );
};

export default NotePreview;
