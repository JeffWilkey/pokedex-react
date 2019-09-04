export const getTypeColor = type => {
  switch (type) {
    case "Fire":
      return "#ef5350";
    case "Water":
      return "#29b6f6";
    case "Grass":
      return "#66bb6a";
    case "Psychic":
      return "#ab47bc";
    case "Fighting":
      return "#ffa726";
    case "Lightning":
      return "#fdd835";
    default:
      return "#333";
  }
};