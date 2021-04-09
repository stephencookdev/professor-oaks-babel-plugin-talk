export const pokeLookup = (n) => {
  n = parseInt(n, 10);
  return {
    1: "#1 Bulbasaur",
    2: "#2 Ivysaur",
    3: "#3 Venusaur",
    4: "#4 Charmander",
    5: "#5 Charmeleon",
    6: "#6 Charizard",
    7: "#7 Squirtle",
    8: "#8 Wartortle",
    9: "#9 Blastoise",
    25: "#25 Pikachu",
    384: "#384 Rayquaza",
  }[n];
};
