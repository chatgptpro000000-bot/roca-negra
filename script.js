const translations = {
  es: {
    heroKicker: "Playa Paraíso · Tenerife",
    heroTitle: "Roca Negra Sunset Club",
    heroText: "Bebidas, cócteles y pequeños platos para disfrutar frente al Atlántico, con calma, buena luz y cero menús eternos.",
    viewMenu: "Ver carta",
    openNow: "Abierto para sunset",
    openText: "Elige rápido, pide fácil y vuelve a mirar el mar, que para eso viniste.",
    houseChoice: "Recomendado",
    featuredTitle: "Sunset Spritz",
    featuredText: "Ligero, cítrico y perfecto para primera ronda.",
    menuKicker: "Carta digital",
    menuTitle: "Busca o entra directo en una sección",
    searchLabel: "Buscar",
    searchPlaceholder: "Spritz, vino, sangría...",
    navSignature: "Signature",
    navCocktails: "Cócteles",
    navSangrias: "Sangrías",
    navWines: "Vinos",
    navBeer: "Cerveza",
    navSoft: "Sin alcohol",
    navBites: "Bites",
    signatureKicker: "Selección del local",
    signatureTitle: "Para empezar bien",
    cocktailsKicker: "Cocktail bar",
    cocktailsTitle: "Cócteles",
    sangriasKicker: "Para compartir",
    sangriasTitle: "Sangrías",
    winesKicker: "Copas y botellas",
    winesTitle: "Vinos",
    beerKicker: "Frío y directo",
    beerTitle: "Cerveza",
    softKicker: "Fresh drinks",
    softTitle: "Sin alcohol",
    bitesKicker: "Algo para acompañar",
    bitesTitle: "Bites",
    emptyTitle: "No encontramos nada con esa búsqueda.",
    emptyText: "Prueba con “vino”, “spritz”, “mojito” o pide ayuda al equipo.",
    locationKicker: "Dónde estamos",
    locationText: "Un rincón para beber algo, compartir, mirar el atardecer y no pelearse con una carta ilegible en PDF. Revolucionario, por lo visto.",
    mapsBtn: "Abrir Maps",
    reviewKicker: "¿Te gustó?",
    reviewTitle: "Déjanos una reseña",
    reviewText: "Ayuda al local y a otros clientes. Además, Google vive de estas migas digitales.",
    reviewBtn: "Dejar reseña",
    backTop: "Volver arriba",
    bottomMenu: "Carta",
    bottomTop: "Top",
    bottomReview: "Reseña",
    tags: {
      house: "Casa",
      fresh: "Fresco",
      share: "Compartir",
      premium: "Premium",
      classic: "Clásico",
      alcoholFree: "0.0",
      bottle: "Botella",
      glass: "Copa"
    },
    menu: {
      signature: [
        { name: "Sunset Spritz", desc: "Aperol, prosecco, soda y pomelo rosado. Ligero, brillante y directo al atardecer.", price: "11€", tags: ["house", "fresh"] },
        { name: "Roca Negra Mule", desc: "Vodka, lima, ginger beer y toque volcánico de bitter aromático.", price: "12€", tags: ["house"] },
        { name: "Sangría de Cava", desc: "Cava, melocotón, lima y fruta fresca. La jarra que evita discusiones en mesa.", price: "8€ / 28€", tags: ["share", "fresh"] }
      ],
      cocktails: [
        { name: "Negroni Volcánico", desc: "Gin, vermut rosso, bitter italiano y piel de naranja.", price: "12€", tags: ["classic"] },
        { name: "Passion Mojito", desc: "Ron blanco, lima, hierbabuena y fruta de la pasión.", price: "12€", tags: ["fresh"] },
        { name: "Smoked Old Fashioned", desc: "Bourbon, azúcar, bitters y humo aromático.", price: "14€", tags: ["premium"] },
        { name: "Espresso Martini", desc: "Vodka, licor café, espresso y espuma fina.", price: "13€", tags: ["classic"] },
        { name: "Paloma Negra", desc: "Tequila, pomelo, lima y soda salina.", price: "12€", tags: ["fresh"] },
        { name: "Margarita Tropical", desc: "Tequila, lima, triple sec y mango suave.", price: "12€", tags: ["fresh"] }
      ],
      sangrias: [
        { name: "Sangría Tinta", desc: "Vino tinto, cítricos frescos, fruta y licor suave.", price: "7€ / 24€", tags: ["share"] },
        { name: "Sangría Blanca", desc: "Vino blanco, fruta blanca y soda fría.", price: "7€ / 24€", tags: ["share", "fresh"] },
        { name: "Sangría de Cava", desc: "Burbujas, melocotón, lima y frescura.", price: "8€ / 28€", tags: ["share", "premium"] },
        { name: "Sangría Maracuyá", desc: "Perfil tropical, aromático y suave.", price: "8€ / 28€", tags: ["share"] }
      ],
      wines: [
        { name: "Verdejo Selección", desc: "Blanco fresco, cítrico y mineral.", price: "5.5€ / 26€", tags: ["glass", "bottle"] },
        { name: "Albariño Atlántico", desc: "Elegante, salino y muy aromático.", price: "6€ / 29€", tags: ["glass", "bottle"] },
        { name: "Rioja Crianza", desc: "Fruta madura, vainilla y especia.", price: "6€ / 30€", tags: ["glass", "bottle"] },
        { name: "Ribera del Duero", desc: "Estructurado, profundo y redondo.", price: "6.5€ / 34€", tags: ["premium"] },
        { name: "Rosé Provenzal", desc: "Ligero, seco y delicado.", price: "5.5€ / 27€", tags: ["fresh"] }
      ],
      beer: [
        { name: "Dorada Especial", desc: "Cerveza local servida bien fría.", price: "3.8€", tags: ["classic"] },
        { name: "Dorada Sin Tostada", desc: "Cerveza sin alcohol, tostada y con cuerpo.", price: "3.8€", tags: ["alcoholFree"] },
        { name: "Corona", desc: "Con lima, porque a veces el cliché funciona.", price: "4.5€", tags: ["fresh"] },
        { name: "Alhambra Reserva", desc: "Más intensa, más redonda, menos aburrida.", price: "4.8€", tags: ["premium"] }
      ],
      soft: [
        { name: "Agua Mineral", desc: "Con o sin gas.", price: "2.5€", tags: ["fresh"] },
        { name: "Refrescos", desc: "Coca-Cola, Fanta, Sprite, Aquarius y opciones similares.", price: "3.2€", tags: [] },
        { name: "Limonada Roca Negra", desc: "Lima, limón, hierbabuena y soda.", price: "5.5€", tags: ["house", "alcoholFree"] },
        { name: "Virgin Mojito", desc: "Lima, hierbabuena, azúcar moreno y soda.", price: "7€", tags: ["alcoholFree", "fresh"] }
      ],
      bites: [
        { name: "Tabla Mediterránea", desc: "Quesos curados, focaccia, aceitunas y dips.", price: "18€", tags: ["share"] },
        { name: "Burrata y Tomates Confitados", desc: "Aceite de albahaca, pistacho y pan crujiente.", price: "15€", tags: ["fresh"] },
        { name: "Calamares Crujientes", desc: "Alioli cítrico y hierbas.", price: "14€", tags: [] },
        { name: "Patatas Trufadas", desc: "Parmesano, trufa suave y perejil.", price: "11€", tags: ["share"] }
      ]
    }
  },
  en: {
    heroKicker: "Playa Paraíso · Tenerife",
    heroTitle: "Roca Negra Sunset Club",
    heroText: "Drinks, cocktails and small plates by the Atlantic, with good light, calm energy and no endless menu nonsense.",
    viewMenu: "View menu",
    openNow: "Open for sunset",
    openText: "Choose fast, order easily and look back at the ocean, which was allegedly the point.",
    houseChoice: "Recommended",
    featuredTitle: "Sunset Spritz",
    featuredText: "Light, citrusy and perfect for the first round.",
    menuKicker: "Digital menu",
    menuTitle: "Search or jump straight into a section",
    searchLabel: "Search",
    searchPlaceholder: "Spritz, wine, sangria...",
    navSignature: "Signature",
    navCocktails: "Cocktails",
    navSangrias: "Sangrias",
    navWines: "Wines",
    navBeer: "Beer",
    navSoft: "Alcohol-free",
    navBites: "Bites",
    signatureKicker: "House selection",
    signatureTitle: "Start properly",
    cocktailsKicker: "Cocktail bar",
    cocktailsTitle: "Cocktails",
    sangriasKicker: "To share",
    sangriasTitle: "Sangrias",
    winesKicker: "Glasses and bottles",
    winesTitle: "Wines",
    beerKicker: "Cold and direct",
    beerTitle: "Beer",
    softKicker: "Fresh drinks",
    softTitle: "Alcohol-free",
    bitesKicker: "Something on the side",
    bitesTitle: "Bites",
    emptyTitle: "Nothing matched that search.",
    emptyText: "Try “wine”, “spritz”, “mojito” or ask the team.",
    locationKicker: "Where we are",
    locationText: "A spot to drink, share, watch the sunset and avoid fighting with an unreadable PDF menu. Humanity advances.",
    mapsBtn: "Open Maps",
    reviewKicker: "Liked it?",
    reviewTitle: "Leave us a review",
    reviewText: "Help the venue and other guests. Also, Google feeds on these digital crumbs.",
    reviewBtn: "Leave review",
    backTop: "Back to top",
    bottomMenu: "Menu",
    bottomTop: "Top",
    bottomReview: "Review",
    tags: { house: "House", fresh: "Fresh", share: "Share", premium: "Premium", classic: "Classic", alcoholFree: "0.0", bottle: "Bottle", glass: "Glass" },
    menu: {}
  },
  it: {
    heroKicker: "Playa Paraíso · Tenerife",
    heroTitle: "Roca Negra Sunset Club",
    heroText: "Drink, cocktail e piccoli piatti davanti all’Atlantico, con calma, bella luce e senza menu infiniti.",
    viewMenu: "Vedi menu",
    openNow: "Aperto per il tramonto",
    openText: "Scegli veloce, ordina facile e torna a guardare il mare, idea sorprendentemente sensata.",
    houseChoice: "Consigliato",
    featuredTitle: "Sunset Spritz",
    featuredText: "Leggero, agrumato e perfetto per il primo giro.",
    menuKicker: "Menu digitale",
    menuTitle: "Cerca o vai direttamente a una sezione",
    searchLabel: "Cerca",
    searchPlaceholder: "Spritz, vino, sangria...",
    navSignature: "Signature",
    navCocktails: "Cocktail",
    navSangrias: "Sangrie",
    navWines: "Vini",
    navBeer: "Birra",
    navSoft: "Analcolici",
    navBites: "Bites",
    signatureKicker: "Selezione della casa",
    signatureTitle: "Per iniziare bene",
    cocktailsKicker: "Cocktail bar",
    cocktailsTitle: "Cocktail",
    sangriasKicker: "Da condividere",
    sangriasTitle: "Sangrie",
    winesKicker: "Calici e bottiglie",
    winesTitle: "Vini",
    beerKicker: "Fredda e diretta",
    beerTitle: "Birra",
    softKicker: "Fresh drinks",
    softTitle: "Analcolici",
    bitesKicker: "Qualcosa da accompagnare",
    bitesTitle: "Bites",
    emptyTitle: "Nessun risultato per questa ricerca.",
    emptyText: "Prova “vino”, “spritz”, “mojito” o chiedi allo staff.",
    locationKicker: "Dove siamo",
    locationText: "Un posto per bere, condividere, guardare il tramonto e non litigare con un PDF illeggibile. Miracoli moderni.",
    mapsBtn: "Apri Maps",
    reviewKicker: "Ti è piaciuto?",
    reviewTitle: "Lasciaci una recensione",
    reviewText: "Aiuta il locale e gli altri clienti. Google, intanto, si nutre di briciole digitali.",
    reviewBtn: "Lascia recensione",
    backTop: "Torna su",
    bottomMenu: "Menu",
    bottomTop: "Top",
    bottomReview: "Recensione",
    tags: { house: "Casa", fresh: "Fresco", share: "Condividere", premium: "Premium", classic: "Classico", alcoholFree: "0.0", bottle: "Bottiglia", glass: "Calice" },
    menu: {}
  },
  fr: {
    heroKicker: "Playa Paraíso · Tenerife",
    heroTitle: "Roca Negra Sunset Club",
    heroText: "Boissons, cocktails et petites assiettes face à l’Atlantique, avec calme, belle lumière et sans carte interminable.",
    viewMenu: "Voir la carte",
    openNow: "Ouvert pour le sunset",
    openText: "Choisissez vite, commandez facilement et retournez regarder la mer, concept presque raisonnable.",
    houseChoice: "Recommandé",
    featuredTitle: "Sunset Spritz",
    featuredText: "Léger, citronné et parfait pour le premier verre.",
    menuKicker: "Carte digitale",
    menuTitle: "Cherchez ou ouvrez directement une section",
    searchLabel: "Chercher",
    searchPlaceholder: "Spritz, vin, sangria...",
    navSignature: "Signature",
    navCocktails: "Cocktails",
    navSangrias: "Sangrias",
    navWines: "Vins",
    navBeer: "Bière",
    navSoft: "Sans alcool",
    navBites: "Bites",
    signatureKicker: "Sélection maison",
    signatureTitle: "Bien commencer",
    cocktailsKicker: "Cocktail bar",
    cocktailsTitle: "Cocktails",
    sangriasKicker: "À partager",
    sangriasTitle: "Sangrias",
    winesKicker: "Verres et bouteilles",
    winesTitle: "Vins",
    beerKicker: "Froid et direct",
    beerTitle: "Bière",
    softKicker: "Fresh drinks",
    softTitle: "Sans alcool",
    bitesKicker: "Pour accompagner",
    bitesTitle: "Bites",
    emptyTitle: "Aucun résultat pour cette recherche.",
    emptyText: "Essayez “vin”, “spritz”, “mojito” ou demandez à l’équipe.",
    locationKicker: "Où nous sommes",
    locationText: "Un endroit pour boire, partager, regarder le sunset et éviter une carte PDF illisible. Le progrès, enfin.",
    mapsBtn: "Ouvrir Maps",
    reviewKicker: "Vous avez aimé ?",
    reviewTitle: "Laissez-nous un avis",
    reviewText: "Aidez le lieu et les autres clients. Google, lui, adore ces miettes numériques.",
    reviewBtn: "Laisser un avis",
    backTop: "Retour en haut",
    bottomMenu: "Carte",
    bottomTop: "Top",
    bottomReview: "Avis",
    tags: { house: "Maison", fresh: "Frais", share: "Partager", premium: "Premium", classic: "Classique", alcoholFree: "0.0", bottle: "Bouteille", glass: "Verre" },
    menu: {}
  }
};

translations.en.menu = cloneMenuWith({
  signature: [
    ["Sunset Spritz", "Aperol, prosecco, soda and pink grapefruit. Light, bright and made for sunset.", "11€"],
    ["Roca Negra Mule", "Vodka, lime, ginger beer and a volcanic touch of aromatic bitter.", "12€"],
    ["Cava Sangria", "Cava, peach, lime and fresh fruit. The jug that prevents table arguments.", "8€ / 28€"]
  ],
  cocktails: [
    ["Volcanic Negroni", "Gin, rosso vermouth, Italian bitter and orange peel.", "12€"],
    ["Passion Mojito", "White rum, lime, mint and passion fruit.", "12€"],
    ["Smoked Old Fashioned", "Bourbon, sugar, bitters and aromatic smoke.", "14€"],
    ["Espresso Martini", "Vodka, coffee liqueur, espresso and fine foam.", "13€"],
    ["Black Paloma", "Tequila, grapefruit, lime and saline soda.", "12€"],
    ["Tropical Margarita", "Tequila, lime, triple sec and soft mango.", "12€"]
  ],
  sangrias: [
    ["Classic Red Sangria", "Red wine, fresh citrus, fruit and a soft liqueur touch.", "7€ / 24€"],
    ["White Sangria", "White wine, orchard fruit and cold soda.", "7€ / 24€"],
    ["Cava Sangria", "Bubbles, peach, lime and freshness.", "8€ / 28€"],
    ["Passion Fruit Sangria", "Tropical, aromatic and smooth profile.", "8€ / 28€"]
  ],
  wines: [
    ["Selection Verdejo", "Fresh, citrusy and mineral white wine.", "5.5€ / 26€"],
    ["Atlantic Albariño", "Elegant, saline and highly aromatic.", "6€ / 29€"],
    ["Rioja Crianza", "Ripe fruit, vanilla and spice.", "6€ / 30€"],
    ["Ribera del Duero", "Structured, deep and rounded.", "6.5€ / 34€"],
    ["Provençal Rosé", "Light, dry and delicate.", "5.5€ / 27€"]
  ],
  beer: [
    ["Dorada Especial", "Local beer served properly cold.", "3.8€"],
    ["Dorada Sin Tostada", "Alcohol-free toasted beer with body.", "3.8€"],
    ["Corona", "With lime, because sometimes the cliché works.", "4.5€"],
    ["Alhambra Reserva", "More intense, rounder, less boring.", "4.8€"]
  ],
  soft: [
    ["Mineral Water", "Still or sparkling.", "2.5€"],
    ["Soft Drinks", "Coca-Cola, Fanta, Sprite, Aquarius and similar options.", "3.2€"],
    ["Roca Negra Lemonade", "Lime, lemon, mint and soda.", "5.5€"],
    ["Virgin Mojito", "Lime, mint, brown sugar and soda.", "7€"]
  ],
  bites: [
    ["Mediterranean Board", "Cured cheeses, focaccia, olives and dips.", "18€"],
    ["Burrata & Confit Tomatoes", "Basil oil, pistachio and crisp bread.", "15€"],
    ["Crispy Calamari", "Citrus aioli and herbs.", "14€"],
    ["Truffle Potatoes", "Parmesan, soft truffle and parsley.", "11€"]
  ]
});

translations.it.menu = cloneMenuWith({
  signature: [
    ["Sunset Spritz", "Aperol, prosecco, soda e pompelmo rosa. Leggero, luminoso e perfetto per il tramonto.", "11€"],
    ["Roca Negra Mule", "Vodka, lime, ginger beer e un tocco vulcanico di bitter aromatico.", "12€"],
    ["Sangria al Cava", "Cava, pesca, lime e frutta fresca. La caraffa che evita discussioni al tavolo.", "8€ / 28€"]
  ],
  cocktails: [
    ["Negroni Vulcanico", "Gin, vermut rosso, bitter italiano e scorza d’arancia.", "12€"],
    ["Passion Mojito", "Rum bianco, lime, menta e frutto della passione.", "12€"],
    ["Smoked Old Fashioned", "Bourbon, zucchero, bitters e fumo aromatico.", "14€"],
    ["Espresso Martini", "Vodka, liquore al caffè, espresso e schiuma fine.", "13€"],
    ["Paloma Nera", "Tequila, pompelmo, lime e soda salina.", "12€"],
    ["Margarita Tropicale", "Tequila, lime, triple sec e mango delicato.", "12€"]
  ],
  sangrias: [
    ["Sangria Rossa", "Vino rosso, agrumi freschi, frutta e un tocco di liquore.", "7€ / 24€"],
    ["Sangria Bianca", "Vino bianco, frutta chiara e soda fredda.", "7€ / 24€"],
    ["Sangria al Cava", "Bollicine, pesca, lime e freschezza.", "8€ / 28€"],
    ["Sangria al Maracujà", "Profilo tropicale, aromatico e morbido.", "8€ / 28€"]
  ],
  wines: [
    ["Verdejo Selezione", "Bianco fresco, agrumato e minerale.", "5.5€ / 26€"],
    ["Albariño Atlantico", "Elegante, salino e molto aromatico.", "6€ / 29€"],
    ["Rioja Crianza", "Frutto maturo, vaniglia e spezie.", "6€ / 30€"],
    ["Ribera del Duero", "Strutturato, profondo e rotondo.", "6.5€ / 34€"],
    ["Rosé Provenzale", "Leggero, secco e delicato.", "5.5€ / 27€"]
  ],
  beer: [
    ["Dorada Especial", "Birra locale servita ben fredda.", "3.8€"],
    ["Dorada Sin Tostada", "Birra analcolica tostata e corposa.", "3.8€"],
    ["Corona", "Con lime, perché a volte il cliché funziona.", "4.5€"],
    ["Alhambra Reserva", "Più intensa, più rotonda, meno noiosa.", "4.8€"]
  ],
  soft: [
    ["Acqua Minerale", "Naturale o frizzante.", "2.5€"],
    ["Bibite", "Coca-Cola, Fanta, Sprite, Aquarius e opzioni simili.", "3.2€"],
    ["Limonata Roca Negra", "Lime, limone, menta e soda.", "5.5€"],
    ["Virgin Mojito", "Lime, menta, zucchero di canna e soda.", "7€"]
  ],
  bites: [
    ["Tagliere Mediterraneo", "Formaggi stagionati, focaccia, olive e dips.", "18€"],
    ["Burrata e Pomodori Confit", "Olio al basilico, pistacchio e pane croccante.", "15€"],
    ["Calamari Croccanti", "Aioli agrumato ed erbe.", "14€"],
    ["Patate al Tartufo", "Parmigiano, tartufo delicato e prezzemolo.", "11€"]
  ]
});

translations.fr.menu = cloneMenuWith({
  signature: [
    ["Sunset Spritz", "Aperol, prosecco, soda et pamplemousse rose. Léger, lumineux et fait pour le sunset.", "11€"],
    ["Roca Negra Mule", "Vodka, citron vert, ginger beer et touche volcanique de bitter aromatique.", "12€"],
    ["Sangria au Cava", "Cava, pêche, citron vert et fruits frais. Le pichet qui évite les débats à table.", "8€ / 28€"]
  ],
  cocktails: [
    ["Negroni Volcanique", "Gin, vermouth rosso, bitter italien et zeste d’orange.", "12€"],
    ["Passion Mojito", "Rhum blanc, citron vert, menthe et fruit de la passion.", "12€"],
    ["Smoked Old Fashioned", "Bourbon, sucre, bitters et fumée aromatique.", "14€"],
    ["Espresso Martini", "Vodka, liqueur de café, espresso et mousse fine.", "13€"],
    ["Paloma Noire", "Tequila, pamplemousse, citron vert et soda salin.", "12€"],
    ["Margarita Tropicale", "Tequila, citron vert, triple sec et mangue douce.", "12€"]
  ],
  sangrias: [
    ["Sangria Rouge", "Vin rouge, agrumes frais, fruits et touche légère de liqueur.", "7€ / 24€"],
    ["Sangria Blanche", "Vin blanc, fruits blancs et soda frais.", "7€ / 24€"],
    ["Sangria au Cava", "Bulles, pêche, citron vert et fraîcheur.", "8€ / 28€"],
    ["Sangria Passion", "Profil tropical, aromatique et doux.", "8€ / 28€"]
  ],
  wines: [
    ["Verdejo Sélection", "Vin blanc frais, citronné et minéral.", "5.5€ / 26€"],
    ["Albariño Atlantique", "Élégant, salin et très aromatique.", "6€ / 29€"],
    ["Rioja Crianza", "Fruit mûr, vanille et épices.", "6€ / 30€"],
    ["Ribera del Duero", "Structuré, profond et rond.", "6.5€ / 34€"],
    ["Rosé Provençal", "Léger, sec et délicat.", "5.5€ / 27€"]
  ],
  beer: [
    ["Dorada Especial", "Bière locale servie bien fraîche.", "3.8€"],
    ["Dorada Sin Tostada", "Bière sans alcool, toastée et avec du corps.", "3.8€"],
    ["Corona", "Avec citron vert, car parfois le cliché fonctionne.", "4.5€"],
    ["Alhambra Reserva", "Plus intense, plus ronde, moins ennuyeuse.", "4.8€"]
  ],
  soft: [
    ["Eau Minérale", "Plate ou gazeuse.", "2.5€"],
    ["Soft drinks", "Coca-Cola, Fanta, Sprite, Aquarius et options similaires.", "3.2€"],
    ["Limonade Roca Negra", "Citron vert, citron, menthe et soda.", "5.5€"],
    ["Virgin Mojito", "Citron vert, menthe, sucre brun et soda.", "7€"]
  ],
  bites: [
    ["Planche Méditerranéenne", "Fromages affinés, focaccia, olives et dips.", "18€"],
    ["Burrata & Tomates Confites", "Huile de basilic, pistache et pain croustillant.", "15€"],
    ["Calamars Croustillants", "Aïoli citronné et herbes.", "14€"],
    ["Pommes de Terre à la Truffe", "Parmesan, truffe douce et persil.", "11€"]
  ]
});

function cloneMenuWith(source) {
  const tagMap = {
    signature: [["house", "fresh"], ["house"], ["share", "fresh"]],
    cocktails: [["classic"], ["fresh"], ["premium"], ["classic"], ["fresh"], ["fresh"]],
    sangrias: [["share"], ["share", "fresh"], ["share", "premium"], ["share"]],
    wines: [["glass", "bottle"], ["glass", "bottle"], ["glass", "bottle"], ["premium"], ["fresh"]],
    beer: [["classic"], ["alcoholFree"], ["fresh"], ["premium"]],
    soft: [["fresh"], [], ["house", "alcoholFree"], ["alcoholFree", "fresh"]],
    bites: [["share"], ["fresh"], [], ["share"]]
  };

  return Object.fromEntries(
    Object.entries(source).map(([section, items]) => [
      section,
      items.map(([name, desc, price], index) => ({
        name,
        desc,
        price,
        tags: tagMap[section]?.[index] || []
      }))
    ])
  );
}

const state = {
  lang: "es",
  query: ""
};

const i18nNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const langButtons = document.querySelectorAll(".lang-btn");
const menuGrids = document.querySelectorAll("[data-menu-grid]");
const menuSections = document.querySelectorAll("[data-menu-section]");
const categoryChips = document.querySelectorAll(".category-chip");
const searchInput = document.getElementById("menuSearch");
const emptyState = document.getElementById("emptyState");

function normalize(value) {
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function createTag(tagKey, dictionary) {
  const label = dictionary.tags[tagKey] || tagKey;
  const accentClass = ["house", "premium", "share"].includes(tagKey) ? " menu-tag--accent" : "";
  return `<span class="menu-tag${accentClass}">${label}</span>`;
}

function createMenuCard(item, dictionary) {
  const tags = item.tags?.length
    ? `<div class="menu-item__meta">${item.tags.map((tag) => createTag(tag, dictionary)).join("")}</div>`
    : "";

  return `
    <article class="menu-item" data-search="${normalize(`${item.name} ${item.desc} ${item.price} ${item.tags?.join(" ") || ""}`)}">
      <div class="menu-item__inner">
        <div>
          <h3 class="menu-item__title">${item.name}</h3>
          <p class="menu-item__desc">${item.desc}</p>
          ${tags}
        </div>
        <strong class="menu-item__price">${item.price}</strong>
      </div>
    </article>
  `;
}

function applyTranslations() {
  const dictionary = translations[state.lang];

  document.documentElement.lang = state.lang;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dictionary[key]) node.setAttribute("placeholder", dictionary[key]);
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
}

function renderMenus() {
  const dictionary = translations[state.lang];

  menuGrids.forEach((grid) => {
    const section = grid.dataset.menuGrid;
    const items = dictionary.menu[section] || [];
    grid.innerHTML = items.map((item) => createMenuCard(item, dictionary)).join("");
  });

  filterMenu();
}

function filterMenu() {
  const query = normalize(state.query.trim());
  let totalVisible = 0;

  menuSections.forEach((section) => {
    const cards = section.querySelectorAll(".menu-item");
    let sectionVisible = 0;

    cards.forEach((card) => {
      const isVisible = !query || card.dataset.search.includes(query);
      card.hidden = !isVisible;
      if (isVisible) sectionVisible += 1;
    });

    section.hidden = sectionVisible === 0;
    totalVisible += sectionVisible;
  });

  emptyState.hidden = totalVisible !== 0;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  state.lang = lang;
  localStorage.setItem("rocaNegraLang", lang);
  applyTranslations();
  renderMenus();
}

function detectInitialLanguage() {
  const saved = localStorage.getItem("rocaNegraLang");
  if (saved && translations[saved]) return saved;

  const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
  return translations[browserLanguage] ? browserLanguage : "es";
}

function updateActiveSection() {
  const visibleSections = [...menuSections].filter((section) => !section.hidden);
  let activeId = visibleSections[0]?.id || "signature";

  visibleSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 190) activeId = section.id;
  });

  categoryChips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.section === activeId);
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  filterMenu();
  updateActiveSection();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("resize", updateActiveSection);

setLanguage(detectInitialLanguage());
updateActiveSection();
