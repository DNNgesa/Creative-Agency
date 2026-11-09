export const initialProducts = [
  {
    id: 101,
    title: "White Queens of Africa",
    image: "https://www.artforum.com/wp-content/uploads/2025/12/Meyer-Kerry_James_Marshall-12.jpg?resize=640,883",
    artist: "Kerry James Marshall",
    year: 2024,
    description: "Created for his Africa Revisited suite within the The Histories retrospective, these heavily symbolic paintings challenge and re-examine postcolonial narratives and representations of identity in Africa."
  },
  {
    id: 102,
    title: "Lewis El Primo II",
    image: "https://static.wixstatic.com/media/333f9f_4bbf8437a3f7427d9032ab8fc14257c9~mv2.jpg/v1/fill/w_315,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.jpg",
    artist: "Paul Oz",
    year: 2026,
    description: "Sir Lewis Hamilton celebrating his first race win for Ferrari, el primo! The seven-time World Champion romped to victory at the Circuit de Barcelona-Catalunya by nearly 20 seconds."
  },
  {
    id: 103,
    title: "Blinded by Nationalism",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Banksy_statue_in_London.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
    artist: "Banksy",
    year: 2026,
    description: "He walks proudly forward while being entirely blinded by the very flag he carries. Patriotism becomes blindness. National identity transforms into obstruction. The symbol that should guide the figure instead prevents him from seeing where he is going."
  },
  {
    id: 104,
    title: "Better Not Be Born",
    image: "https://www.art.co.za/gallery/diane-victor-up25/images/better-not-to-be-born-2025.jpg",
    artist: "Diane Victor",
    year: 2025,
    description: "The title draws its meaning directly from the harrowing words of a Congolese woman who shared her experiences of intense exploitation and suffering while working in a cobalt mine in the Democratic Republic of the Congo."
    }
];


// Loops through the localStorage to retrieve any previously saved gallery data, or returns the initialProducts if none are found.
export const getSavedGallery = () => {
  const cachedData = localStorage.getItem("galleria_exhibit_store");
  return cachedData ? JSON.parse(cachedData) : initialProducts;
};
