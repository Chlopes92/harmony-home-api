export const CATEGORIES: any[] = [
    {
        id: '1',
        name: "Tous les produits",
        icon_url: "/assets/icons-category/all-categories.png"
    },
    {
        id: '2',
        name: "Salon",
        icon_url: "/assets/icons-category/salon.png"
    },
    {
        id: '3',
        name: "Cuisine",
        icon_url: "/assets/icons-category/cuisine.png"
    },
    {
        id: '4',
        name: "Salle à manger",
        icon_url: "/assets/icons-category/dining-room.png"
    },
    {
        id: '5',
        name: "Chambre",
        icon_url: "/assets/icons-category/chambre.png"
    },
    {
        id: '6',
        name: "Bureau",
        icon_url: "/assets/icons-category/office.png"
    },
    {
        id: '7',
        name: "Salle de bain",
        icon_url: "/assets/icons-category/toilet-room.png"
    },
    {
        id: '8',
        name: "Textiles",
        icon_url: "/assets/icons-category/textiles.png"
    },
    {
        id: '9',
        name: "Déco Murale",
        icon_url: "/assets/icons-category/deco-murale.png"
    },
    {
        id: '10',
        name: "Luminaires",
        icon_url: "/assets/icons-category/light.png"
    },
    {
        id: '11',
        name: "Accessoires",
        icon_url: "/assets/icons-category/accessoires.png"
    }

]

export const SUB_CATEGORIES: any[] = [
    {
        id: '1',
        name: "Canapés & Fauteuils",
        img_url: "assets/img-category/canapes-fauteuils.png",
        categories_id: [
            { 
                id:'1'
            },
            {
                id: '2'
            }
            
        ],
    },
    {
        id: '2',
        name: "Tables basses",
        img_url: "assets/img-category/tables-basses.png",
        categories_id: [
            { 
                 id:'1'
             },
             {
                 id: '2'
             }
             
         ],
    },
    {
        id: '3',
        name: "Meubles TV",
        img_url: "assets/img-category/meuble-tv.png",
        categories_id: [
            { 
                 id:'1'
             },
             {
                 id: '2'
             }
             
         ],
    },
    {
        id: '4',
        name: "Etagères de salon",
        img_url: "assets/img-category/etageres-salon.png",
        categories_id: [
            { 
                 id:'1'
             },
             {
                 id: '2'
             }
             
         ],
    },
    {
        id: '5',
        name: "Vaisselle de cuisine",
        img_url: "assets/img-category/vaisselle.png",
        categories_id: [
            { 
                 id:'1'
             },
             {
                id: '3'
             }
             
         ],
    },
    {
        id: '6',
        name: "Mobilier de cuisine",
        img_url: "assets/img-category/mobilier-cuisine.png",
        categories_id: [
            { 
                 id:'1'
             },
             {
                id: '3'
             }
             
         ], 
    },
    {
        id: '7',
        name: "Rangement de cuisine",
        img_url: "assets/img-category/rangement-cuisine.png",
        categories_id: [
            { 
                 id:'1'
             },
             {
                id: '3'
             }
             
         ], 
    },
    {
        id: '8',
        name: "Tables à manger",
        img_url: "assets/img-category/table.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '4'
             }
             
         ],
    },
    {
        id: '9',
        name: "Chaises & Bancs",
        img_url: "assets/img-category/chaises.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '4'
             }
             
         ],
    },
    {
        id: '10',
        name: "Vaisseliers & Buffets",
        img_url: "assets/img-category/vaisseliers.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '4'
             }
             
         ],
    },
    {
        id: '11',
        name: "Nappes & Sets de tables",
        img_url: "assets/img-category/art-table.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '4'
             }
             
         ],
    },
    {
        id: '12',
        name: "Lits & Têtes de lit",
        img_url: "assets/img-category/lits.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '5'
             }
             
         ],
    },
    {
        id: '13',
        name: "Mobilier de chambre",
        img_url: "assets/img-category/mobilier-chambre.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '5'
             }
             
         ],
    },
    {
        id: '14',
        name: "Lampe de chevet",
        img_url: "assets/img-category/lampe-chevet.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '5'
             }
             
         ],
    },
    {
        id: '15',
        name: "Dressing",
        img_url: "assets/img-category/dressing.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '5'
             }
             
         ],
    },
    {
        id: '16',
        name: "Bureaux design",
        img_url: "assets/img-category/bureaux.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '6'
             }
             
         ],
    },
    {
        id: '17',
        name: "Chaises de bureau ergonomiques",
        img_url: "assets/img-category/chaise-bureau.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '6'
             }
            ],
    },
    {
        id: '18',
        name: "Rangements de bureau",
        img_url: "assets/img-category/rangement-bureau.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '6'
             }
            ],
    },
    {
        id: '19',
        name: "Baignoire & Douche",
        img_url: "assets/img-category/baignoire.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '7'
             }
            ],
    },
    {
        id: '20',
        name: "Meubles de salle de bain",
        img_url:  "assets/img-category/meubles-salle-bain.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '7'
             }
            ],

    },
    {
        id: '21',
        name: "Miroirs de salle de bain",
        img_url: "assets/img-category/miroirs.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '7'
             }
            ],
    },
    {
        id: '22',
        name: "Lavabo",
        img_url: "assets/img-category/lavabo.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '7'
             }
            ],
    },
    {
        id: '23',
        name: "Coussins décoratifs & Housse",
        img_url: "assets/img-category/coussins.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '8'
             }
            ],
    },
    {
        id: '24',
        name: "Plaids & Couvertures",
        img_url: "assets/img-category/plaids.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '8'
             }
            ],
    },
    {
        id: '25',
        name: "Tapis",
        img_url: "assets/img-category/tapis.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '8'
             }
            ],
    },
    {
        id: '26',
        name: "Rideaux & Stores",
        img_url: "assets/img-category/rideaux.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '8'
             }
            ],
    },
    {
        id: '27',
        name: "Tableaux artistiques",
        img_url: "assets/img-category/tableaux.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '9'
             }
            ],

    },
    {
        id: '28',
        name: "Miroirs décoratifs",
        img_url: "assets/img-category/miroirs-décoratifs.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '9'
             }
            ],

    },
    {
        id: '29',
        name: "Horloges design",
        img_url: "assets/img-category/horloges.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '9'
             }
            ],

    },
    {
        id: '30',
        name: "Lampes de table",
        img_url: "assets/img-category/lampes.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '10'
             }
            ],
    },
    {
        id: '31',
        name: "Suspensions",
        img_url: "assets/img-category/suspensions.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '10'
             }
            ],
    },
    {
        id: '32',
        name: "Lampadaires",
        img_url: "assets/img-category/lampadaires.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '10'
             }
            ],
    },
    {
        id: '33',
        name: "Appliques murales",
        img_url:"assets/img-category/appliques-murales.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '10'
             }
            ],
    },
    {
        id: '34',
        name: "Guirlandes lumineuses",
        img_url: "assets/img-category/guirlandes.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '10'
             }
            ],
    },
    {
        id: '35',
        name: "Vases & Objets en céramiques",
        img_url: "assets/img-category/ceramique.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '11'
             }
            ],
    },
    {
        id: '36',
        name: "Bougies et photophores",
        img_url: "assets/img-category/bougies.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '11'
             }
            ],
    },
    {
        id: '37',
        name: "Paniers de rangement",
        img_url: "assets/img-category/paniers.png",
        categories_id: [
            { 
                id:'1'
             },
             {
                id: '11'
             }
            ],
    },
]

export const PRODUCTS: any[] = [
    {
        id: '1',
        title: 'Canapé moderne en tissu',
        description: "Ce canapé moderne offre un design confortable. Parfait pour votre salon, il apportera une touche de sophistication à votre espace de vie.",
        dimension: "Longueur: 150 cm, Profondeur: 92 cm, Hauteur: 90 cm",
        features: ["Revêtement en tissu résistant", "Assise rembourrée pour un confort optimal", "Structure solide en bois"],
        price: 399.90,
        img_url: "assets/img-category/canapes-fauteuils.png",
        subCategory_id: [
            { 
                id:'1',
                categories_id: [
                    { 
                        id:'1'
                    },
                    {
                        id: '2'
                    }
                    
                ],
            }
        ],
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '2',
        title: "Table basse en bois massif",
        description: "Cette table basse en bois massif apporte une touche naturelle et chaleureuse à votre salon.",
        dimension: "Longueur: 120cm , Profondeur: 70 cm, Hauteur: 60 cm",
        features: ["Bois massif", "Finition naturelle", "Design rustique"],
        price: 299.99,
        img_url: "assets/img-category/tables-basses.png",
        subCategory_id: [
            {
               id: '2',
               categories_id: [
                { 
                     id:'1'
                 },
                 {
                     id: '2'
                 }
                 
             ],
            },
        ],
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '3',
        title: "Meuble TV design scandinave",
        description: "Ce meuble TV au design scandinave apporte une touche nordique à votre salon. Ses lignes épurées, son bois clair et ses pieds coniques en font un choix parfait pour les amateurs de style minimaliste.",
        dimension: "Longueur: 140cm , Profondeur: 50 cm, Hauteur: 70 cm",
        features: ["Bois de pin massif", "Finition teintée naturelle", "Design minimaliste"],
        price: 369.99,
        img_url: "assets/img-category/meuble-tv.png",
        subCategory_id:[
            {
                id:'3',
                categories_id: [
                    { 
                         id:'1'
                     },
                     {
                         id: '2'
                     }
                     
                 ],
            },
        ] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '4',
        title: "Étagère d'angle en bois",
        description: "L'étagère d'angle en bois est parfaite pour maximiser l'espace de rangement dans votre salon. Son design à plusieurs niveaux offre un espace suffisant pour exposer vos objets de décoration préférés.",
        dimension: "Longueur: 120cm , Profondeur: 30 cm, Hauteur: 10 cm",
        features: ["Bois massif", "Finition teinture blanche", "Plusieurs niveaux"],
        price: 79.99,
        img_url: "assets/img-category/etageres-salon.png",
        subCategory_id: [
            {
                id:'4',
                categories_id: [
                    { 
                         id:'1'
                     },
                     {
                         id: '2'
                     }
                     
                 ],
            }
        ] 
        // isAddToCart: false, 
        // isAddToWishlist: false,
    },
    {
        id: '5',
        title: "Service de vaisselle en porcelaine",
        description: "Ce service de vaisselle en porcelaine comprend des assiettes plates, des assiettes creuses et des tasses. Parfait pour les repas quotidiens ou les occasions spéciales. Comprend 9 pièces.",
        dimension: "Assiettes plates: 3 , Assiettes: 3, Tasses: 3",
        features: ["Porcelaine", "Passe au lave-vaisselle", "Style épuré"],
        price: 79.99,
        img_url: "assets/img-category/vaisselle.png",
        subCategory_id: [
            {
                id: '5',
                categories_id: [
                    { 
                         id:'1'
                     },
                     {
                        id: '3'
                     }
                     
                 ],
            }
        ] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '6',
        title: "Meubles de rangement pour cuisine",
        description: "Un meuble de rangement moderne pour votre cuisine. Avec ses portes et ses étagères, il offre un espace de rangement généreux pour vos ustensiles de cuisine et vos provisions.",
        dimension: "Longueur: 200cm , Profondeur: 60 cm, Hauteur: 100 cm",
        features: ["Bois massif", "Finition teinture menthe", "Design contemporain"],
        price: 1289.99,
        img_url: "assets/img-category/mobilier-cuisine.png",
        subCategory_id: [
            {
                id: '6',
                categories_id: [
                    { 
                         id:'1'
                     },
                     {
                        id: '3'
                     }
                     
                 ], 
            }
        ]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '7',
        title: "Organiseur de placard en bois",
        description: "Un organiseur de placard pour maximiser l'espace de rangement dans vos tiroirs de cuisine.",
        dimension: "Longueur: 60cm , Profondeur: 40 cm, Hauteur: 50 cm",
        features: ["Bois massif", "Base antidérapante", "Design pratique"],
        price: 35.99,
        img_url: "assets/img-category/rangement-cuisine.png",
        subCategory_id:[{
            id: '7',
            categories_id: [
                { 
                     id:'1'
                 },
                 {
                    id: '3'
                 }
                 
             ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id:'8' ,
        title: "Table à manger en marbre",
        description: "Une table à manger en marbre pour une élégance intemporelle. Son plateau en marbre véritable ajoute une touche de luxe à votre salle à manger.",
        dimension: "Longueur: 160cm , Profondeur: 75 cm, Hauteur: 90 cm",
        features: ["Marbre véritable", "Pieds en métal", "Design élégant"],
        price: 1189.99,
        img_url: "assets/img-category/table.png",
        subCategory_id: [{
            id: '8',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '4'
                 }
                 
             ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '9',
        title: "Chaise de salle à manger ergonomique",
        description: "Une chaise de salle à manger ergonomique avec un dossier incurvé pour un soutien optimal. Conçue pour un confort maximal pendant les repas.",
        dimension: "Longueur: 50cm , Profondeur: 75 cm, Hauteur: 70 cm",
        features: ["Bois massif", "Rembourrage en tissu", "Design élégant"],
        price: 250,
        img_url: "assets/img-category/chaises.png",
        subCategory_id:[{
            id: '9',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '4'
                 }
                 
             ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '10',
        title: "Vaisselier en bois massif",
        description: "Un vaisselier en bois massif, idéal pour ranger votre vaisselle et vos ustensiles de cuisine. Son design classique s'intègre parfaitement à tout style de décoration.",
        dimension: "Longueur: 120cm , Profondeur: 50 cm, Hauteur: 180 cm",
        features: ["Noyer massif", "Étagères en bois", "Design robuste"],
        price: 250,
        img_url: "assets/img-category/vaisseliers.png",
        subCategory_id: [{
            id: '10',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '4'
                 }
                 
             ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
   },
   {
        id:'11',
        title: "Ensemble de nappe en feutre avec 6 sets de table",
        description: "Cet ensemble de nappe en feutre est livré avec 6 sets de table assortis. Parfait pour une ambiance moderne et chaleureuse sur votre table à manger.",
        dimension: "Dimensions de la nappe: 140cm x 200cm. Dimensions des sets de table: 30cm x 45cm.",
        features: ["Feutre épais", "Résistant à la chaleur", "Facile à nettoyer"],
        price: 79.89,
        img_url: "assets/img-category/art-table.png",
        subCategory_id:[{
           id: '11',
           categories_id: [
            { 
                id:'1'
             },
             {
                id: '4'
             }
             
         ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '12',
        title: "Lit double en bois massif avec tête de lit rembourrée",
        description: "Un lit double en bois massif avec une tête de lit rembourrée pour un confort et un style exceptionnels dans votre chambre à coucher.",
        dimension: "Longueur: 200cm , Largeur: 160cm",
        features: ["Bois massif", "Tête de lit rembourrée", "Sommier inclus"],
        price: 1589.89,
        img_url: "assets/img-category/lits.png",
        subCategory_id: [{
            id: '12',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '5'
                 }
                 
             ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '13',
        title: "Table de chevet en bois",
        description: "Une table de chevet en bois facile pour ranger vos livres et magazines préférés. Son design simple et fonctionnel s'intègre à tout type de décoration de chambre à coucher.",
        dimension: "Longueur: 50cm , Profondeur: 40 cm, Hauteur: 60 cm",
        features: ["Bois durable", "Étagère inclus", "Style épuré"],
        price: 1589.89,
        img_url: "assets/img-category/mobilier-chambre.png",
        subCategory_id: [{
            id: '13',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '5'
                 }
                 
             ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '14',
        title: "Lampe de chevet en bois teinté avec abat-jour en jute tressé",
        description: "Une lampe de chevet en bois teinté avec un abat-jour en jute tressé pour une ambiance zen et sereine dans votre chambre à coucher. Son design épuré et naturel crée une atmosphère apaisante et relaxante.",
        dimension: "Longueur: 40cm , Profondeur: 30 cm, Hauteur: 50 cm",
        features: ["Bois teinté", "Abat-jour en jute tressé", "Style épuré"],
        price: 69.89,
        img_url: "assets/img-category/lampe-chevet.png",
        subCategory_id:[{
            id :'14',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '5'
                 }
                 
             ],
        }]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '15',
        title: "Dressing modulable en bois",
        description: "Un dressing modulable en bois pour maximiser le rangement et l'organisation de vos vêtements et accessoires. Son design moderne et fonctionnel s'adapte à différents espaces de chambre.",
        dimension: "Longueur: 240 cm, Profondeur: 80 cm, Hauteur: 200 cm",
        features: ["Bois robuste", "Étagères modulables", "Tringles à vêtements"],
        price: 3590.99,
        img_url: "assets/img-category/dressing.png",
        subCategory_id: [{
            id:'15',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '5'
                 }
                 
             ],
        }]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '16',
        title: "Bureau style scandinave",
        description: "Ce bureau au style scandinave est idéal pour garder votre espace de travail organisé et fonctionnel. Ses tiroirs et ses étagères offrent un espace de rangement pratique pour les fournitures de bureau.",
        dimension: "Longueur: 85 cm, Largeur: 70 cm, Hauteur: 150 cm",
        features: ["Bois robuste", "Design moderne", "Rangements intégrés"],
        price: 1255,
        img_url: "assets/img-category/bureaux.png",
        subCategory_id:[{
            id: '16',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '6'
                 }
                 
             ],
        }]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '17',
        title: "Chaise de bureau ergonomique en cuir",
        description: "Cette chaise de bureau ergonomique en cuir véritable offre un confort luxueux et une élégance intemporelle. Son dossier inclinable, ses accoudoirs rembourrés et son assise moelleuse assurent un soutien optimal tout au long de la journée.",
        dimension: "Longueur: 85 cm, Largeur: 70 cm, Hauteur: 110 cm",
        features: ["Dossier inclinable", "Pivotante à 360 degrés", "Ajustable en hauteur"],
        price: 789.99,
        img_url: "assets/img-category/chaise-bureau.png",
        subCategory_id: [{
            id: '17',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '6'
                 }
                 
             ],
        }]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '18',
        title: "Étagère murale en bois",
        description: "Cette étagère murale en bois est parfaite pour organiser vos livres, dossiers et fournitures de bureau. Ses étagères réglables permettent de personnaliser l'espace de rangement selon vos besoins.",
        dimension: "Longueur: 85 cm, Profondeur: 30 cm, Hauteur: 100 cm",
        features: ["Étagères réglables", "Montage mural", "Design élégant"],
        price: 79,
        img_url: "assets/img-category/rangement-bureau.png",
        subCategory_id: [{
            id: '18',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '6'
                 }
                 
             ],
        }]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '19',
        title: "Baignoire rectangulaire",
        description: "Cette baignoire encastrable rectangulaire offre un équilibre parfait entre style et fonctionnalité. Son design classique s'intègre harmonieusement dans n'importe quelle salle de bain, tandis que sa forme ergonomique garantit un confort optimal.",
        dimension: "Longueur: 160 cm, Profondeur: 70 cm, Hauteur: 50 cm",
        features: ["Forme ergonomique", "Facile à entretenir", "Design moderne"],
        price: 989,
        img_url: "assets/img-category/baignoire.png",
        subCategory_id: [{
            id:'19',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '7'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '20',
        title: "Commode de salle de bain moderne",
        description: "Cette commode de salle de bain moderne offre un espace de rangement élégant et fonctionnel pour vos produits de toilette et autres accessoires. Son design épuré et ses finitions ajoutent une touche de sophistication à votre salle de bain.",
        dimension: "Longueur: 90 cm, Profondeur: 50 cm, Hauteur: 80 cm",
        features: ["Tiroirs spacieux", "Portes avec étagères", "Design moderne"],
        price: 889,
        img_url: "assets/img-category/meubles-salle-bain.png",
        subCategory_id: [{
            id: '20',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '7'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '21',
        title: "Miroir mural rectangulaire en bois vieilli",
        description: "Un miroir mural rectangulaire avec un cadre en bois vieilli, idéal pour apporter une touche de rusticité et d'authenticité à votre décoration intérieure.",
        dimension: "Hauteur : 60 cm, Largeur: 70 cm",
        features: ["Facile à accrocher", "Cadre solide", "Design rustique"],
        price: 125,
        img_url: "assets/img-category/miroirs.png",
        subCategory_id: [{
            id: '21',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '7'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '22',
        title: "Lavabo de forme ovale",
        description: "Ce lavabo en céramique blanc apporte une touche de modernité à votre salle de bain. Sa forme épurées ajoutent une touche contemporaine à votre espace.",
        dimension: "Longueur: 60 cm, Largeur: 40 cm",
        features: ["Installation facile", "Facile à nettoyer", "Design moderne"],
        price: 150,
        img_url: "assets/img-category/lavabo.png",
        subCategory_id: [{
            id: '22',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '7'
                 }
                ],
        }]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '23',
        title: "Coussin en lin lavé",
        description: "Deux coussins en lin lavé apporte une touche de simplicité et d'élégance à votre décoration intérieure.",
        dimension: "Longueur: 50 cm, Largeur: 50 cm",
        features: ["Fermeture éclair invisible", "Motifs géométriques", "Design minimaliste"],
        price: 55,
        img_url: "assets/img-category/coussins.png",
        subCategory_id: [{
            id:'23',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '8'
                 }
                ],
        }]
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '24',
        title: "Plaid en coton tissé",
        description: "Ce plaid en coton tissé est idéal pour ajouter une touche de légèreté à votre décoration intérieure. Sa texture aérée apportent une touche de modernité à votre intérieur.",
        dimension: "Longueur: 180 cm, Largeur: 140 cm",
        features: ["Texture légère", "Couleur Jaune moutarde", "Design minimaliste"],
        price: 45,
        img_url: "assets/img-category/plaids.png",
        subCategory_id: [{
            id:'24',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '8'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '25',
        title: "Tapis tissé à la main en jute naturel",
        description: "Ce tapis tissé à la main en jute naturel apporte une touche d'authenticité et de caractère à votre décoration intérieure.",
        dimension: "Longueur: 200 cm, Largeur: 160 cm",
        features: ["Matériau naturel", "Motif tressé", "Design minimaliste"],
        price: 75,
        img_url: "assets/img-category/tapis.png",
        subCategory_id: [{
            id:'25',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '8'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '26',
        title: "Ensemble de rideaux occultants avec stores assortis",
        description: "Cet ensemble de rideaux occultants est parfait pour bloquer la lumière du jour et assurer votre intimité. Les rideaux sont doublés d'un tissu épais et les stores assortis permettent de contrôler facilement la luminosité de la pièce.",
        dimension: "Rideaux: 140cm x 240cm, Stores: 100cm x 180cm",
        features: ["Facile à accrocher", "Polyester", "Stores réglables"],
        price: 250,
        img_url: "assets/img-category/rideaux.png",
        subCategory_id: [{
            id:'26',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '8'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
   },
   {
        id: '27',
        title: "Tableaux paysage montagnard en impression sur toile",
        description: "Trois tableaux représentant un paysage montagnard imprimé sur toile. Ses couleurs douces ajouterons une touche de tranquillité à votre intérieur.",
        dimension: "Hauteur : 40 cm, Largeur: 80 cm ",
        features: ["Facile à accrocher", "Impression de qualité", "Design relaxant"],
        price: 100,
        img_url: "assets/img-category/tableaux.png",
        subCategory_id: [{
            id:'27',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '9'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    
    },
    {
        id: '28',
        title: "Miroir ovale avec cadrant dorée",
        description: "Un miroir mural ovale avec cadrant dorée, idéal pour créer une ambiance sophistiquée à votre décoration intérieure. Son design vintage ajoutent une touche d'originalité.",
        dimension: "Hauteur: 80 cm, Largeur: 40cm",
        features: ["Design contemporain", "Cadre élégant", "Facile à accrocher"],
        price: 75,
        img_url: "assets/img-category/miroirs-décoratifs.png",
        subCategory_id: [{
            id:'28',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '9'
                 }
                ],

        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '29',
        title: "Horloge murale en métal noir minimaliste",
        description: "Une horloge murale en métal noir au design minimaliste, idéale pour apporter une touche moderne et élégante à votre décoration intérieure.",
        dimension: "Diamètre : 50 cm",
        features: ["Facile à installer", "Chirffres romains", "Design minimaliste"],
        price: 59.99,
        img_url: "assets/img-category/horloges.png",
        subCategory_id: [{
            id:'29',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '9'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '30',
        title: "Lampe de table en métal dorée avec abat-jour en tissu blanc",
        description: "Une lampe de table en métal dorée avec un abat-jour en tissu blanc, idéale pour apporter une touche de modernité à votre décoration intérieure.",
        dimension: "Hauteur : 50 cm",
        features: ["Interrupteur sur le câble", "Ampoule LED intégrée", "Design contemporain"],
        price: 139.99,
        img_url: "assets/img-category/lampes.png",
        subCategory_id: [{
            id:'30',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '10'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '31',
        title: "Suspension en verre soufflé transparent",
        description: "Une suspension en verre soufflé transparent, idéale pour apporter une touche de légèreté et d'élégance à votre décoration intérieure. Son design simple et épuré convient à tous les styles de décoration.",
        dimension: "Diamètre : 25 cm",
        features: ["Câble ajustable", "Ampoule LED intégrée", "Design minimaliste"],
        price: 139.99,
        img_url: "assets/img-category/suspensions.png",
        subCategory_id: [{
            id:'31',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '10'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '32',
        title: "Lampadaire trépied en métal dorée avec abat-jour en lin beige",
        description: "Un lampadaire trépied en métal dorée avec un abat-jour en lin beige, idéal pour ajouter une touche contemporaine à votre décoration. Sa structure robuste assure une grande stabilité.",
        dimension: "Hauteur: 170 cm",
        features: ["Interrupteur sur le câble", "Ampoule LED intégrée", "Design élégant"],
        price: 239.99,
        img_url: "assets/img-category/lampadaires.png",
        subCategory_id: [{
            id:'32',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '10'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,    
    },
    {
        id: '33',
        title: "Applique murale moderne en acier inoxydable",
        description: "Une applique murale moderne en acier inoxydable, idéale pour éclairer votre espace avec élégance et style.",
        dimension: "Longueur: 40 cm, Hauteur: 50 cm",
        features: ["Pose facile", "Ampoule LED intégrée", "Design élégant"],
        price: 45.80,
        img_url: "assets/img-category/appliques-murales.png",
        subCategory_id: [{
            id:'33',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '10'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '34',
        title: "Guirlande de perles",
        description: "Une guirlande de perles argentées, idéale pour ajouter une touche d'élégance à votre décoration intérieure. Parfait pour les fêtes!",
        dimension: "Longueur: 250 cm",
        features: ["Perles brillantes", "LEDs économes en énergie", "Facile à suspendre"],
        price: 25,
        img_url: "assets/img-category/guirlandes.png",
        subCategory_id: [{
            id:'34',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '10'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '35',
        title: "Ensemble d'objets en céramiques",
        description: "Un ensemble d'objets en céramiques moderne, parfait pour ajouter une touche de couleur et d'élégance à votre décoration intérieure.",
        dimension: "Longueur: 10 cm, Hauteur: 50 cm",
        features: ["Détails soignés", "Finition brillante", "Couleur blanche"],
        price: 75.80,
        img_url: "assets/img-category/ceramique.png",
        subCategory_id: [{
            id:'35',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '11'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '36',
        title: "Ensemble de bougies décorative",
        description: "Un ensemble de bougies décorative, idéal pour éclairer et décorer votre table. Fabriquées à partir de cire naturelle, ces bougies offrent une flamme brillante et durable.",
        dimension: "Diamètre: 10 cm, Hauteur: 50 cm",
        features: ["Cire naturelle", "Combustion longue durée", "Couleur blanche"],
        price: 35.80,
        img_url: "assets/img-category/bougies.png",
        subCategory_id: [{
            id:'36',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '11'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
    },
    {
        id: '37',
        title: "Panier de rangement en osier",
        description: "Un panier de rangement en osier tressé à la main, idéal pour organiser vos magazines, jouets, couvertures ou autres objets dans votre salon ou chambre à coucher.",
        dimension: "Longueur: 40 cm, Profondeur: 30 cm, Hauteur: 50 cm",
        features: ["Bois robuste", "Étagères modulables", "Tringles à vêtements"],
        price: 35.80,
        img_url: "assets/img-category/paniers.png",
        subCategory_id: [{
            id:'37',
            categories_id: [
                { 
                    id:'1'
                 },
                 {
                    id: '11'
                 }
                ],
        }] 
        // isAddToCart: false,
        // isAddToWishlist: false,
   }


]

