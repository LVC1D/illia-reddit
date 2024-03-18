export const getTimeDifference = (timestamp) => {
    const currentTime = Math.floor(Date.now() / 1000);
    const timeDifferenceSeconds = currentTime - timestamp;
    if (timeDifferenceSeconds < 60) {
      return `${timeDifferenceSeconds} seconds ago`;
    } else if (timeDifferenceSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceSeconds < 86400) {
      const hours = Math.floor(timeDifferenceSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(timeDifferenceSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
};