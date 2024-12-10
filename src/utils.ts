function getUrlById (id: string) {
  return `/offer/${id}`;
}

function getFormattedDate(date: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
  const formattedDate = formatter.format(new Date(date));

  return formattedDate;
}

export { getUrlById, getFormattedDate };
