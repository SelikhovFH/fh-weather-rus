export const getStringDate = (date: number): string => {
  return `${new Date(date).toLocaleString('en-GB', {
    weekday: 'long',
  })}, ${new Date(date).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};

export const getStringTime = (time: number): string => {
  return new Date(time).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const uppercaseFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};