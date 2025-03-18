export function formatDate(inputDate) {
    const date = new Date(inputDate);
  
    const day = date.getUTCDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
  
    return `${day} ${month} at ${formattedHours}:${minutes} ${amOrPm}`;
  }
  
  export function isLiked(likeList, userId) {
    return likeList.includes(userId);
  }