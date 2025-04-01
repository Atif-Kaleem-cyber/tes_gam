// Sample game data for the site

// Helper function to generate random rating between min and max
const getRandomRating = (min = 7, max = 10) => {
  return (Math.random() * (max - min) + min).toFixed(1);
};

// Game data array
export const games = [
  {
    id: 1,
    title: "Neon Horizon",
    description: "Immerse yourself in the sprawling cyberpunk metropolis of New Nexus, where corporate overlords rule with an iron fist and the digital frontier is the new wild west. As a skilled netrunner, you'll hack into secure systems, engage in fast-paced combat, and uncover a conspiracy that threatens to reshape the very fabric of society. With cutting-edge neural implants and a growing arsenal of weapons, you must navigate the neon-lit streets and make choices that will determine the fate of the city.",
    developer: "Cyber Dynamics",
    publisher: "Quantum Entertainment",
    releaseDate: "2023-09-15",
    price: "59.99",
    platform: "PC, PlayStation 5, Xbox Series X",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: 9.2,
    genres: ["Action", "RPG", "Open World", "Cyberpunk"],
    featured: true,
    ageRating: "PEGI 18",
    coverImage: "https://cdn.pixabay.com/photo/2022/03/28/08/35/abstract-7096388_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2021/09/14/16/20/cyberpunk-6624347_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/09/15/09/59/cyborg-7456470_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/03/23/17/19/animal-7871918_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/03/04/20/08/ai-generated-7830300_960_720.jpg"
    ]
  },
  {
    id: 2,
    title: "Stellar Odyssey",
    description: "Embark on an epic journey across the stars in this space exploration adventure. Command your own starship, recruit a diverse crew of aliens and humans, and chart a course through an expansive galaxy filled with wonder and danger. Discover ancient artifacts left by a long-gone civilization, engage in diplomatic relations with alien species, or become a feared space pirate. With fully customizable ships, strategic real-time combat, and a branching narrative, each playthrough offers a unique experience in this vast universe.",
    developer: "Cosmic Games",
    publisher: "Galactic Studios",
    releaseDate: "2023-07-22",
    price: "49.99",
    platform: "PC, PlayStation 5, Xbox Series X",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: 8.8,
    genres: ["Adventure", "Simulation", "Strategy", "Sci-Fi"],
    featured: true,
    ageRating: "PEGI 12",
    coverImage: "https://cdn.pixabay.com/photo/2023/01/23/13/37/space-7738924_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2023/03/13/05/13/ai-generated-7849605_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/06/10/15/24/ai-generated-8054326_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/13/53/spaceship-1834774_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245_960_720.jpg"
    ]
  },
  {
    id: 3,
    title: "Shadow Protocol",
    description: "Step into the shadows as an elite agent in this tactical stealth action game. Infiltrate heavily guarded facilities, execute covert operations, and dismantle a global terrorist network. With cutting-edge gadgets, adaptive AI, and multiple paths to complete each mission, you can choose to be a ghost who leaves no trace or a predator who eliminates all opposition. Set in meticulously crafted global locations, each environment offers unique challenges and opportunities. Your choices shape both the narrative and your character's specialized skills.",
    developer: "Phantom Studios",
    publisher: "Stealth Works",
    releaseDate: "2023-05-10",
    price: "39.99",
    platform: "PC, PlayStation 5, Xbox Series X, Nintendo Switch",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    rating: 8.5,
    genres: ["Stealth", "Action", "Tactical", "Thriller"],
    featured: true,
    ageRating: "PEGI 16",
    coverImage: "https://cdn.pixabay.com/photo/2022/07/28/23/30/hacker-7349864_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2017/06/01/09/33/hacker-2362795_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/01/02/18/21/ai-generated-7694626_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/07/04/16/45/spy-2472410_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/03/16/21/14/cyber-security-3232594_960_720.jpg"
    ]
  },
  {
    id: 4,
    title: "Eternal Legends",
    description: "In a world where magic and technology coexist, ancient deities have awakened to reclaim their domains. As the chosen one with latent divine powers, you must master elemental abilities, forge alliances with legendary heroes, and face mythological beasts in this action RPG. The extensive skill tree allows you to customize your playstyle, whether you prefer destructive magic, cunning stealth, or brute strength. With a day-night cycle affecting enemy behaviors and quest availability, the world truly feels alive.",
    developer: "Mythic Entertainment",
    publisher: "Legendary Games",
    releaseDate: "2023-08-05",
    price: "54.99",
    platform: "PC, PlayStation 5, Xbox Series X",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: 9.0,
    genres: ["RPG", "Action", "Fantasy", "Adventure"],
    featured: false,
    ageRating: "PEGI 16",
    coverImage: "https://cdn.pixabay.com/photo/2022/08/24/10/41/warrior-7407366_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2021/12/30/17/05/fantasy-6903112_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/03/18/10/21/ai-generated-7860369_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/03/20/15/40/ruins-7081003_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/01/01/14/35/dragon-6907510_960_720.jpg"
    ]
  },
  {
    id: 5,
    title: "Velocity Rush",
    description: "Feel the adrenaline as you race through neon-lit streets in the most advanced racing simulation to date. With over 100 meticulously recreated vehicles, from street racers to hypercars, every engine roar and tire screech is captured with stunning accuracy. Dynamic weather affects track conditions, while a realistic damage system means every crash has consequences. Compete in a global championship spanning futuristic cities and iconic race tracks, or test your skills in the underground street racing scene. The immersive career mode lets you rise from unknown rookie to racing legend.",
    developer: "Turbo Dreams",
    publisher: "Speed Works",
    releaseDate: "2023-04-12",
    price: "49.99",
    platform: "PC, PlayStation 5, Xbox Series X",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: 8.7,
    genres: ["Racing", "Simulation", "Sports"],
    featured: false,
    ageRating: "PEGI 7",
    coverImage: "https://cdn.pixabay.com/photo/2020/03/12/13/27/cyberpunk-4925013_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2023/01/31/05/58/sports-car-7757136_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/01/23/18/06/racing-car-4788979_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/08/14/12/32/cyberpunk-5488748_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/14/13/34/car-766768_960_720.jpg"
    ]
  },
  {
    id: 6,
    title: "Neon Drift",
    description: "Enter the digital grid in this fast-paced arcade racer where neon trails follow your light cycle as you compete against AI opponents and players worldwide. Master the art of drifting around impossible corners, collect power-ups to gain advantages, and deploy strategic traps to sabotage your rivals. With its distinctive visual style inspired by retro arcade games and synthwave aesthetics, Neon Drift offers a nostalgic yet fresh racing experience. The dynamic soundtrack adapts to your performance, intensifying as you take the lead or making close calls.",
    developer: "Retrowave Games",
    publisher: "Arcade Classics",
    releaseDate: "2023-02-28",
    price: "19.99",
    platform: "PC, PlayStation 5, Xbox Series X, Nintendo Switch",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    rating: 8.2,
    genres: ["Racing", "Arcade", "Retro"],
    featured: false,
    ageRating: "PEGI 3",
    coverImage: "https://cdn.pixabay.com/photo/2022/03/09/10/59/city-7057904_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2023/01/19/21/19/ai-generated-7730052_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/06/16/03/47/motorcycles-7265108_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/01/10/22/12/ai-generated-7710624_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/07/17/41/car-7577506_960_720.jpg"
    ]
  },
  {
    id: 7,
    title: "Quantum Break",
    description: "Time is both your weapon and enemy in this mind-bending puzzle platformer. After a quantum physics experiment goes wrong, you gain the ability to manipulate time—slowing it down, stopping it completely, or even reversing it in localized areas. Navigate through increasingly complex environments where time-related paradoxes create unique challenges. Solve intricate puzzles by strategically using your temporal powers, avoiding your past self, and outsmarting security systems. With a nonlinear narrative that branches based on your decisions, discover what caused the time fracture and if reality can be restored.",
    developer: "Chronos Interactive",
    publisher: "Time Paradox Games",
    releaseDate: "2023-06-20",
    price: "29.99",
    platform: "PC, PlayStation 5, Xbox Series X, Nintendo Switch",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    rating: 8.9,
    genres: ["Puzzle", "Platformer", "Adventure", "Sci-Fi"],
    featured: false,
    ageRating: "PEGI 12",
    coverImage: "https://cdn.pixabay.com/photo/2022/08/19/09/05/portal-7396339_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2022/01/17/17/20/time-6944590_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/03/11/07/36/ai-generated-7844344_960_720.jpg",
      "https://cdn.pixabay.com/photo/2023/03/06/01/37/ai-generated-7832431_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/03/13/13/59/bitcoin-3222287_960_720.jpg"
    ]
  },
  {
    id: 8,
    title: "Digital Defenders",
    description: "Take command of a specialized cyber security team in this strategic tower defense game. As hacking attacks become increasingly sophisticated, you must deploy firewalls, encryption nodes, and counter-measure units to protect vital data centers. Research and develop new security technologies, recruit specialist agents with unique abilities, and analyze attack patterns to predict and counter future threats. With both campaign and endless modes, Digital Defenders offers a perfect balance of strategic planning and reactive tactical decisions.",
    developer: "Firewall Studios",
    publisher: "Cyber Defense Inc.",
    releaseDate: "2023-01-15",
    price: "Free",
    platform: "PC, Mobile",
    platforms: ["PC", "Mobile"],
    rating: 8.4,
    genres: ["Strategy", "Tower Defense", "Simulation"],
    featured: false,
    ageRating: "PEGI 7",
    coverImage: "https://cdn.pixabay.com/photo/2020/02/17/16/51/gradient-4857344_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2018/05/08/08/50/artificial-intelligence-3382521_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/12/22/08/01/security-3033836_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/01/31/07/26/hackathon-4807315_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/04/21/04/08/hacking-3338152_960_720.jpg"
    ]
  },
  {
    id: 9,
    title: "Neon Nights",
    description: "In the underbelly of a futuristic metropolis, you operate an underground nightclub that serves as a front for your criminal empire. By day, manage renovations, book performers, and keep the health inspector at bay. By night, engage in turf wars, negotiate with rival gangs, and expand your influence across the city's neon-drenched districts. With a reputation system affecting both legitimate business and criminal operations, maintaining the perfect balance is key to success. The stylish visual aesthetic combined with an original synthwave soundtrack creates an immersive nightlife atmosphere.",
    developer: "Midnight Studios",
    publisher: "Underground Games",
    releaseDate: "2022-11-18",
    price: "34.99",
    platform: "PC, PlayStation 5, Xbox Series X",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: 8.6,
    genres: ["Simulation", "Strategy", "Management", "Action"],
    featured: false,
    ageRating: "PEGI 18",
    coverImage: "https://cdn.pixabay.com/photo/2022/11/03/15/25/car-7567062_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/09/19/06/19/singer-7465397_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/11/22/01/57/city-4644568_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/01/28/17/43/panorama-2016029_960_720.jpg"
    ]
  },
  {
    id: 10,
    title: "Apocalypse Protocol",
    description: "Twenty years after a global catastrophe, the remnants of humanity struggle to survive in a hostile world reclaimed by nature and mutated creatures. As one of the last trained soldiers, you must venture from your fortified settlement to secure vital resources, rescue survivors, and uncover what really caused civilization's downfall. With limited supplies, each expedition requires careful planning and resource management. The dynamic world features changing weather conditions, day-night cycles, and an ecosystem where predators hunt prey. Your choices affect both your personal story and the fate of your settlement.",
    developer: "Wasteland Works",
    publisher: "Endtimes Entertainment",
    releaseDate: "2023-03-30",
    price: "59.99",
    platform: "PC, PlayStation 5, Xbox Series X",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: 9.1,
    genres: ["Survival", "Open World", "Action", "Post-apocalyptic"],
    featured: false,
    ageRating: "PEGI 18",
    coverImage: "https://cdn.pixabay.com/photo/2023/01/09/16/24/robot-7708292_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2019/03/08/19/59/apocalypse-4042811_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/03/29/14/43/post-apocalyptic-4089254_960_720.jpg",
      "https://cdn.pixabay.com/photo/2021/01/24/20/11/floating-5946610_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/04/14/17/44/apocalypse-4127693_960_720.jpg"
    ]
  },
  {
    id: 11,
    title: "Cybernetic Arena",
    description: "Step into the ultimate competitive arena where mechanically enhanced gladiators battle for glory and freedom. Customize your fighter with interchangeable cybernetic parts that determine your combat style—heavy artillery, agile assassin, or balanced brawler. Rise through the ranks in the single-player campaign, or test your skills against other players in various multiplayer modes. The advanced physics-based combat system rewards skill and strategy over button mashing, with environmental hazards adding an extra layer of tactical depth to every arena.",
    developer: "Mech Warriors",
    publisher: "Arena Games",
    releaseDate: "2023-05-05",
    price: "29.99",
    platform: "PC, PlayStation 5, Xbox Series X",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    rating: 8.3,
    genres: ["Fighting", "Action", "Multiplayer", "Sci-Fi"],
    featured: false,
    ageRating: "PEGI 16",
    coverImage: "https://cdn.pixabay.com/photo/2020/02/16/15/49/arena-4854636_960_720.jpg",
    screenshots: [
      "https://cdn.pixabay.com/photo/2022/05/19/10/33/robot-7206935_960_720.jpg",
      "https://cdn.pixabay.com/photo/2021/02/05/09/11/robot-5983450_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/04/04/10/05/robot-3289295_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/06/27/10/27/battle-4301784_960_720.jpg"
    ]
  },
  {
    id: 12,
    title: "Pixel Realms",
    description: "Embark on a nostalgic adventure that combines classic 16-bit aesthetics with modern gameplay mechanics. Explore a vast interconnected world filled with distinct biomes, from crystal caves to floating islands. Collect magical artifacts, solve environmental puzzles, and befriend quirky creatures with unique abilities that help you access new areas. The charming retro art style is complemented by a memorable chiptune soundtrack that evolves as you progress through the story. With a mix of precision platforming, light RPG elements, and metroidvania-style exploration, Pixel Realms appeals to both retro enthusiasts and newcomers alike.",
    developer: "Retro Pixel Studios",
    publisher: "Nostalgia Games",
    releaseDate: "2023-02-10",
    price: "19.99",
    platform: "PC, PlayStation 5, Xbox Series X, Nintendo Switch",
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    rating: 8.7,
    genres: ["Platformer", "Adventure", "Retro", "Metroidvania"],
    featured: false,
    ageRating: "PEGI 7",
    coverImage: "https://cdn.pixabay.com/photo/2023/01/11/08/05/pixel-art-7711249_960_720.png",
    screenshots: [
      "https://cdn.pixabay.com/photo/2019/12/14/07/31/game-4694646_960_720.png",
      "https://cdn.pixabay.com/photo/2022/09/07/20/05/pixel-art-7439636_960_720.png",
      "https://cdn.pixabay.com/photo/2019/05/07/19/45/pixel-4187147_960_720.png",
      "https://cdn.pixabay.com/photo/2014/12/02/13/48/pixel-heart-554509_960_720.jpg"
    ]
  }
];

// Export additional filtered game collections
export const featuredGames = games.filter(game => game.featured);
export const freeGames = games.filter(game => game.price === 'Free');
export const recentGames = [...games].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 6);
export const topRatedGames = [...games].sort((a, b) => b.rating - a.rating).slice(0, 5);

// Export genres for filtering
export const genres = [...new Set(games.flatMap(game => game.genres))].sort();

// Export platforms for filtering
export const platforms = [...new Set(games.flatMap(game => {
  if (Array.isArray(game.platforms)) {
    return game.platforms;
  }
  return game.platform.split(', ');
}))].sort();
