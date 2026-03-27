import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';

import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';

interface NoteProps {
  params: Promise<{ id: string }>;
}

async function Note({ params }: NoteProps) {
  const queryClient = new QueryClient();
  const { id } = await params;

  queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  const response = await fetchNoteById(id);

  console.log(response);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}

export default Note;
