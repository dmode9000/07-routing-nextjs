// Libraries

// Services
import { fetchNoteById } from "@/lib/api";

// Components
import NoteDetailMarkup from "@/components/NoteDetailMarkup/NoteDetailMarkup";

interface Props {
  params: Promise<{ id: string }>;
}

//server component
const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NoteDetailMarkup note={note} />;
};

export default NoteDetails;
