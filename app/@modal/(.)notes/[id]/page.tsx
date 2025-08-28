// Services
import { fetchNoteById } from "@/lib/api";
// Components
import Modal from "@/components/Modal/Modal";
import NoteDetailMarkup from "@/components/NoteDetailMarkup/NoteDetailMarkup";

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
