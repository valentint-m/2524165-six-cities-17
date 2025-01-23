import { UserComment } from '../types/comment';

function sortCommentsByNew(comments: UserComment[]) {
  const sortedComments = comments.sort((commentA, commentB) => {
    const newDateA = new Date(commentA.date);
    const newDateB = new Date(commentB.date);
    return newDateB > newDateA ? 1 : -1;
  });
  return sortedComments;
}

export { sortCommentsByNew };
