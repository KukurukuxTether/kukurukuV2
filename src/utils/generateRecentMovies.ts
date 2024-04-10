export function generateRecentMovies(
  timeOfDay: "morning" | "afternoon" | "evening",
) {
  const moviesMap = {
    morning: [
      {
        id: 1,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//3Mwj2sIONQckOZP3YwsUXF7U5I4.jpg",
        href: `/media/tmdb-movie-49530-in-time`,
      },
      {
        id: 2,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
        href: `/media/tmdb-movie-581726-infinite`,
      },
      {
        id: 3,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//aNh4Q3iuPKDMPi2SL7GgOpiLukX.jpg",
        href: `/media/tmdb-movie-157350-divergent`,
      },
    ],
    afternoon: [
      {
        id: 1,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//sMp34cNKjIb18UBOCoAv4DpCxwY.jpg",
        href: `/media/tmdb-movie-763215-damsel`,
      },
      {
        id: 2,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        href: `/media/tmdb-movie-438631-dune`,
      },
      {
        id: 3,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
        href: `/media/tmdb-movie-866398-the-beekeeper`,
      },
    ],
    evening: [
      {
        id: 1,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg",
        href: `/media/tmdb-movie-955916-lift`,
      },
      {
        id: 2,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
        href: `/media/tmdb-movie-512195-red-notice`,
      },
      {
        id: 3,
        imageUrl:
          "https://image.tmdb.org/t/p/w342//i1J2zBCyOQJKsQipqJ0qXERC1Ma.jpg",
        href: `/media/tmdb-movie-29917-exam`,
      },
    ],
  };

  return moviesMap[timeOfDay];
}
