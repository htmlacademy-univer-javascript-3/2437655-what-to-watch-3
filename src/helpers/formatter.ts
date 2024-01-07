export const formatDuration = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  if (hours === 0) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
