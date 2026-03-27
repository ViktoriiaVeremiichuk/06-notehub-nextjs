import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

async function Notes() {
  const response = await fetchNotes(1, 12, '');
  console.log({ notes: response.notes });

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={response.notes} />
    </div>
  );
}

export default Notes;
