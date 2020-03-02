var randomColor = (function () {
  let colorArray = [{
      "name": "Warm Flame",
      "favorite": true,
      "index": "001",
      "deg": 45,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ff9a9e",
          "pos": 0
        },
        {
          "color": "#fad0c4",
          "pos": 99
        },
        {
          "color": "#fad0c4",
          "pos": 100
        }
      ]
    },
    {
      "name": "Night Fade",
      "favorite": false,
      "index": "002",
      "deg": 0,
      "group": [
        "#FC96D3",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#a18cd1",
          "pos": 0
        },
        {
          "color": "#fbc2eb",
          "pos": 100
        }
      ]
    },
    {
      "name": "Spring Warmth",
      "favorite": false,
      "index": "003",
      "deg": 0,
      "group": [
        "#F9AFAD",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#fad0c4",
          "pos": 0
        },
        {
          "color": "#fad0c4",
          "pos": 1
        },
        {
          "color": "#ffd1ff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Juicy Peach",
      "favorite": false,
      "index": "004",
      "deg": 90,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ffecd2",
          "pos": 0
        },
        {
          "color": "#fcb69f",
          "pos": 100
        }
      ]
    },
    {
      "name": "Young Passion",
      "favorite": false,
      "index": "005",
      "deg": 90,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ff8177",
          "pos": 0
        },
        {
          "color": "#ff867a",
          "pos": 0
        },
        {
          "color": "#ff8c7f",
          "pos": 21
        },
        {
          "color": "#f99185",
          "pos": 52
        },
        {
          "color": "#cf556c",
          "pos": 78
        },
        {
          "color": "#b12a5b",
          "pos": 100
        }
      ]
    },
    {
      "name": "Lady Lips",
      "favorite": false,
      "index": "006",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#ff9a9e",
          "pos": 0
        },
        {
          "color": "#fecfef",
          "pos": 99
        },
        {
          "color": "#fecfef",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sunny Morning",
      "favorite": false,
      "index": "007",
      "deg": 120,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#f6d365",
          "pos": 0
        },
        {
          "color": "#fda085",
          "pos": 100
        }
      ]
    },
    {
      "name": "Rainy Ashville",
      "favorite": false,
      "index": "008",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#fbc2eb",
          "pos": 0
        },
        {
          "color": "#a6c1ee",
          "pos": 100
        }
      ]
    },
    {
      "name": "Frozen Dreams",
      "favorite": false,
      "index": "009",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#fdcbf1",
          "pos": 0
        },
        {
          "color": "#fdcbf1",
          "pos": 1
        },
        {
          "color": "#e6dee9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Winter Neva",
      "favorite": false,
      "index": "010",
      "deg": 120,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#a1c4fd",
          "pos": 0
        },
        {
          "color": "#c2e9fb",
          "pos": 100
        }
      ]
    },
    {
      "name": "Dusty Grass",
      "favorite": false,
      "index": "011",
      "deg": 120,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#d4fc79",
          "pos": 0
        },
        {
          "color": "#96e6a1",
          "pos": 100
        }
      ]
    },
    {
      "name": "Tempting Azure",
      "favorite": false,
      "index": "012",
      "deg": 120,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#84fab0",
          "pos": 0
        },
        {
          "color": "#8fd3f4",
          "pos": 100
        }
      ]
    },
    {
      "name": "Heavy Rain",
      "favorite": false,
      "index": "013",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#cfd9df",
          "pos": 0
        },
        {
          "color": "#e2ebf0",
          "pos": 100
        }
      ]
    },
    {
      "name": "Amy Crisp",
      "favorite": false,
      "index": "014",
      "deg": 120,
      "group": [
        "#FC96D3",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#a6c0fe",
          "pos": 0
        },
        {
          "color": "#f68084",
          "pos": 100
        }
      ]
    },
    {
      "name": "Mean Fruit",
      "favorite": false,
      "index": "015",
      "deg": 120,
      "group": [
        "#F9AFAD",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#fccb90",
          "pos": 0
        },
        {
          "color": "#d57eeb",
          "pos": 100
        }
      ]
    },
    {
      "name": "Deep Blue",
      "favorite": false,
      "index": "016",
      "deg": 120,
      "group": [
        "#259BE5",
        "#FC96D3",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#e0c3fc",
          "pos": 0
        },
        {
          "color": "#8ec5fc",
          "pos": 100
        }
      ]
    },
    {
      "name": "Ripe Malinka",
      "favorite": false,
      "index": "017",
      "deg": 120,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#f093fb",
          "pos": 0
        },
        {
          "color": "#f5576c",
          "pos": 100
        }
      ]
    },
    {
      "name": "Cloudy Knoxville",
      "favorite": false,
      "index": "018",
      "deg": 120,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#fdfbfb",
          "pos": 0
        },
        {
          "color": "#ebedee",
          "pos": 100
        }
      ]
    },
    {
      "name": "Malibu Beach",
      "favorite": false,
      "index": "019",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#4facfe",
          "pos": 0
        },
        {
          "color": "#00f2fe",
          "pos": 100
        }
      ]
    },
    {
      "name": "New Life",
      "favorite": false,
      "index": "020",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#43e97b",
          "pos": 0
        },
        {
          "color": "#38f9d7",
          "pos": 100
        }
      ]
    },
    {
      "name": "True Sunset",
      "favorite": false,
      "index": "021",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#fa709a",
          "pos": 0
        },
        {
          "color": "#fee140",
          "pos": 100
        }
      ]
    },
    {
      "name": "Morpheus Den",
      "favorite": false,
      "index": "022",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#30cfd0",
          "pos": 0
        },
        {
          "color": "#330867",
          "pos": 100
        }
      ]
    },
    {
      "name": "Rare Wind",
      "favorite": false,
      "index": "023",
      "deg": 0,
      "group": [
        "#E5E9EC",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#a8edea",
          "pos": 0
        },
        {
          "color": "#fed6e3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Near Moon",
      "favorite": false,
      "index": "024",
      "deg": 0,
      "group": [
        "#7BCC9B",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#5ee7df",
          "pos": 0
        },
        {
          "color": "#b490ca",
          "pos": 100
        }
      ]
    },
    {
      "name": "Wild Apple",
      "favorite": false,
      "index": "025",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#d299c2",
          "pos": 0
        },
        {
          "color": "#fef9d7",
          "pos": 100
        }
      ]
    },
    {
      "name": "Saint Petersburg",
      "favorite": false,
      "index": "026",
      "deg": 135,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#f5f7fa",
          "pos": 0
        },
        {
          "color": "#c3cfe2",
          "pos": 100
        }
      ]
    },
    {
      "name": "Arielles Smile",
      "favorite": false,
      "index": "027",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#16d9e3",
          "pos": 0
        },
        {
          "color": "#30c7ec",
          "pos": 47
        },
        {
          "color": "#46aef7",
          "pos": 100
        }
      ]
    },
    {
      "name": "Plum Plate",
      "favorite": false,
      "index": "028",
      "deg": 135,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#667eea",
          "pos": 0
        },
        {
          "color": "#764ba2",
          "pos": 100
        }
      ]
    },
    {
      "name": "Everlasting Sky",
      "favorite": false,
      "index": "029",
      "deg": 135,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#fdfcfb",
          "pos": 0
        },
        {
          "color": "#e2d1c3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Happy Fisher",
      "favorite": false,
      "index": "030",
      "deg": 120,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#89f7fe",
          "pos": 0
        },
        {
          "color": "#66a6ff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Blessing",
      "favorite": false,
      "index": "031",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#fddb92",
          "pos": 0
        },
        {
          "color": "#d1fdff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sharpeye Eagle",
      "favorite": false,
      "index": "032",
      "deg": 0,
      "group": [
        "#7BCC9B",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#9890e3",
          "pos": 0
        },
        {
          "color": "#b1f4cf",
          "pos": 100
        }
      ]
    },
    {
      "name": "Ladoga Bottom",
      "favorite": false,
      "index": "033",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#ebc0fd",
          "pos": 0
        },
        {
          "color": "#d9ded8",
          "pos": 100
        }
      ]
    },
    {
      "name": "Lemon Gate",
      "favorite": false,
      "index": "034",
      "deg": 0,
      "group": [
        "#7BCC9B",
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#96fbc4",
          "pos": 0
        },
        {
          "color": "#f9f586",
          "pos": 100
        }
      ]
    },
    {
      "name": "Itmeo Branding",
      "favorite": false,
      "index": "035",
      "deg": 180,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#2af598",
          "pos": 0
        },
        {
          "color": "#009efd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Zeus Miracle",
      "favorite": false,
      "index": "036",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#cd9cf2",
          "pos": 0
        },
        {
          "color": "#f6f3ff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Old Hat",
      "favorite": false,
      "index": "037",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#e4afcb",
          "pos": 0
        },
        {
          "color": "#b8cbb8",
          "pos": 0
        },
        {
          "color": "#b8cbb8",
          "pos": 0
        },
        {
          "color": "#e2c58b",
          "pos": 30
        },
        {
          "color": "#c2ce9c",
          "pos": 64
        },
        {
          "color": "#7edbdc",
          "pos": 100
        }
      ]
    },
    {
      "name": "Star Wine",
      "favorite": false,
      "index": "038",
      "deg": 0,
      "group": [
        "#FC96D3",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#b8cbb8",
          "pos": 0
        },
        {
          "color": "#b8cbb8",
          "pos": 0
        },
        {
          "color": "#b465da",
          "pos": 0
        },
        {
          "color": "#cf6cc9",
          "pos": 33
        },
        {
          "color": "#ee609c",
          "pos": 66
        },
        {
          "color": "#ee609c",
          "pos": 100
        }
      ]
    },
    {
      "name": "Blue Velvet",
      "favorite": false,
      "index": "039",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#6a11cb",
          "pos": 0
        },
        {
          "color": "#2575fc",
          "pos": 100
        }
      ]
    },
    {
      "name": "Happy Acid",
      "favorite": false,
      "index": "041",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#37ecba",
          "pos": 0
        },
        {
          "color": "#72afd3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Awesome Pine",
      "favorite": false,
      "index": "042",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ebbba7",
          "pos": 0
        },
        {
          "color": "#cfc7f8",
          "pos": 100
        }
      ]
    },
    {
      "name": "New York",
      "favorite": false,
      "index": "043",
      "deg": 0,
      "group": [
        "#259BE5",
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#fff1eb",
          "pos": 0
        },
        {
          "color": "#ace0f9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Shy Rainbow",
      "favorite": false,
      "index": "044",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#eea2a2",
          "pos": 0
        },
        {
          "color": "#bbc1bf",
          "pos": 19
        },
        {
          "color": "#57c6e1",
          "pos": 42
        }
      ]
    },
    {
      "name": "Mixed Hopes",
      "favorite": false,
      "index": "046",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#c471f5",
          "pos": 0
        },
        {
          "color": "#fa71cd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Fly High",
      "favorite": false,
      "index": "047",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#48c6ef",
          "pos": 0
        },
        {
          "color": "#6f86d6",
          "pos": 100
        }
      ]
    },
    {
      "name": "Strong Bliss",
      "favorite": false,
      "index": "048",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#f78ca0",
          "pos": 0
        },
        {
          "color": "#f9748f",
          "pos": 19
        },
        {
          "color": "#fd868c",
          "pos": 60
        }
      ]
    },
    {
      "name": "Fresh Milk",
      "favorite": false,
      "index": "049",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#feada6",
          "pos": 0
        },
        {
          "color": "#f5efef",
          "pos": 100
        }
      ]
    },
    {
      "name": "Snow Again",
      "favorite": false,
      "index": "050",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#e6e9f0",
          "pos": 0
        },
        {
          "color": "#eef1f5",
          "pos": 100
        }
      ]
    },
    {
      "name": "February Ink",
      "favorite": false,
      "index": "051",
      "deg": 0,
      "group": [
        "#259BE5",
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#accbee",
          "pos": 0
        },
        {
          "color": "#e7f0fd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Kind Steel",
      "favorite": false,
      "index": "052",
      "deg": -20,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#e9defa",
          "pos": 0
        },
        {
          "color": "#fbfcdb",
          "pos": 100
        }
      ]
    },
    {
      "name": "Soft Grass",
      "favorite": false,
      "index": "053",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#c1dfc4",
          "pos": 0
        },
        {
          "color": "#deecdd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Grown Early",
      "favorite": false,
      "index": "054",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#0ba360",
          "pos": 0
        },
        {
          "color": "#3cba92",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sharp Blues",
      "favorite": false,
      "index": "055",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#00c6fb",
          "pos": 0
        },
        {
          "color": "#005bea",
          "pos": 100
        }
      ]
    },
    {
      "name": "Shady Water",
      "favorite": false,
      "index": "056",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#74ebd5",
          "pos": 0
        },
        {
          "color": "#9face6",
          "pos": 100
        }
      ]
    },
    {
      "name": "Dirty Beauty",
      "favorite": false,
      "index": "057",
      "deg": 0,
      "group": [
        "#259BE5",
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#6a85b6",
          "pos": 0
        },
        {
          "color": "#bac8e0",
          "pos": 100
        }
      ]
    },
    {
      "name": "Great Whale",
      "favorite": false,
      "index": "058",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#a3bded",
          "pos": 0
        },
        {
          "color": "#6991c7",
          "pos": 100
        }
      ]
    },
    {
      "name": "Teen Notebook",
      "favorite": false,
      "index": "059",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#9795f0",
          "pos": 0
        },
        {
          "color": "#fbc8d4",
          "pos": 100
        }
      ]
    },
    {
      "name": "Polite Rumors",
      "favorite": false,
      "index": "060",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#a7a6cb",
          "pos": 0
        },
        {
          "color": "#8989ba",
          "pos": 52
        },
        {
          "color": "#8989ba",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sweet Period",
      "favorite": false,
      "index": "061",
      "deg": 0,
      "group": [
        "#F9AFAD",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#3f51b1",
          "pos": 0
        },
        {
          "color": "#5a55ae",
          "pos": 13
        },
        {
          "color": "#7b5fac",
          "pos": 25
        },
        {
          "color": "#8f6aae",
          "pos": 38
        },
        {
          "color": "#a86aa4",
          "pos": 50
        },
        {
          "color": "#cc6b8e",
          "pos": 62
        },
        {
          "color": "#f18271",
          "pos": 75
        },
        {
          "color": "#f3a469",
          "pos": 87
        },
        {
          "color": "#f7c978",
          "pos": 100
        }
      ]
    },
    {
      "name": "Wide Matrix",
      "favorite": false,
      "index": "062",
      "deg": 0,
      "group": [
        "#F9AFAD",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#fcc5e4",
          "pos": 0
        },
        {
          "color": "#fda34b",
          "pos": 15
        },
        {
          "color": "#ff7882",
          "pos": 35
        },
        {
          "color": "#c8699e",
          "pos": 52
        },
        {
          "color": "#7046aa",
          "pos": 71
        },
        {
          "color": "#0c1db8",
          "pos": 87
        },
        {
          "color": "#020f75",
          "pos": 100
        }
      ]
    },
    {
      "name": "Soft Cherish",
      "favorite": false,
      "index": "063",
      "deg": 0,
      "group": [
        "#E5E9EC",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#dbdcd7",
          "pos": 0
        },
        {
          "color": "#dddcd7",
          "pos": 24
        },
        {
          "color": "#e2c9cc",
          "pos": 30
        },
        {
          "color": "#e7627d",
          "pos": 46
        },
        {
          "color": "#b8235a",
          "pos": 59
        },
        {
          "color": "#801357",
          "pos": 71
        },
        {
          "color": "#3d1635",
          "pos": 84
        },
        {
          "color": "#1c1a27",
          "pos": 100
        }
      ]
    },
    {
      "name": "Red Salvation",
      "favorite": false,
      "index": "064",
      "deg": 0,
      "group": [
        "#259BE5",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#f43b47",
          "pos": 0
        },
        {
          "color": "#453a94",
          "pos": 100
        }
      ]
    },
    {
      "name": "Burning Spring",
      "favorite": false,
      "index": "065",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#4fb576",
          "pos": 0
        },
        {
          "color": "#44c489",
          "pos": 30
        },
        {
          "color": "#28a9ae",
          "pos": 46
        },
        {
          "color": "#28a2b7",
          "pos": 59
        },
        {
          "color": "#4c7788",
          "pos": 71
        },
        {
          "color": "#6c4f63",
          "pos": 80
        },
        {
          "color": "#432c39",
          "pos": 100
        }
      ]
    },
    {
      "name": "Night Party",
      "favorite": false,
      "index": "066",
      "deg": 0,
      "group": [
        "#259BE5",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#0250c5",
          "pos": 0
        },
        {
          "color": "#d43f8d",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sky Glider",
      "favorite": false,
      "index": "067",
      "deg": 0,
      "group": [
        "#7BCC9B",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#88d3ce",
          "pos": 0
        },
        {
          "color": "#6e45e2",
          "pos": 100
        }
      ]
    },
    {
      "name": "Heaven Peach",
      "favorite": false,
      "index": "068",
      "deg": 0,
      "group": [
        "#259BE5",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#d9afd9",
          "pos": 0
        },
        {
          "color": "#97d9e1",
          "pos": 100
        }
      ]
    },
    {
      "name": "Purple Division",
      "favorite": false,
      "index": "069",
      "deg": 0,
      "group": [
        "#FC96D3",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#7028e4",
          "pos": 0
        },
        {
          "color": "#e5b2ca",
          "pos": 100
        }
      ]
    },
    {
      "name": "Aqua Splash",
      "favorite": false,
      "index": "070",
      "deg": 15,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#13547a",
          "pos": 0
        },
        {
          "color": "#80d0c7",
          "pos": 100
        }
      ]
    },
    {
      "name": "Above Clouds",
      "favorite": false,
      "index": "071",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#BDBBBE",
          "pos": 0
        },
        {
          "color": "#9D9EA3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Spiky Naga",
      "favorite": false,
      "index": "072",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#505285",
          "pos": 0
        },
        {
          "color": "#585e92",
          "pos": 12
        },
        {
          "color": "#65689f",
          "pos": 25
        }
      ]
    },
    {
      "name": "Love Kiss",
      "favorite": false,
      "index": "073",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ff0844",
          "pos": 0
        },
        {
          "color": "#ffb199",
          "pos": 100
        }
      ]
    },
    {
      "name": "Clean Mirror",
      "favorite": false,
      "index": "075",
      "deg": 45,
      "group": [
        "#259BE5",
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#93a5cf",
          "pos": 0
        },
        {
          "color": "#e4efe9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Premium Dark",
      "favorite": false,
      "index": "076",
      "deg": 0,
      "group": [
        "#000000"
      ],
      "gradient": [
        {
          "color": "#434343",
          "pos": 0
        },
        {
          "color": "#000000",
          "pos": 100
        }
      ]
    },
    {
      "name": "Cold Evening",
      "favorite": false,
      "index": "077",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#0c3483",
          "pos": 0
        },
        {
          "color": "#a2b6df",
          "pos": 100
        },
        {
          "color": "#6b8cce",
          "pos": 100
        }
      ]
    },
    {
      "name": "Cochiti Lake",
      "favorite": false,
      "index": "078",
      "deg": 45,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#93a5cf",
          "pos": 0
        },
        {
          "color": "#e4efe9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Summer Games",
      "favorite": false,
      "index": "079",
      "deg": 0,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#92fe9d",
          "pos": 0
        },
        {
          "color": "#00c9ff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Passionate Bed",
      "favorite": false,
      "index": "080",
      "deg": 0,
      "group": [
        "#F9AFAD",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#ff758c",
          "pos": 0
        },
        {
          "color": "#ff7eb3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Mountain Rock",
      "favorite": false,
      "index": "081",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#868f96",
          "pos": 0
        },
        {
          "color": "#596164",
          "pos": 100
        }
      ]
    },
    {
      "name": "Desert Hump",
      "favorite": false,
      "index": "082",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#c79081",
          "pos": 0
        },
        {
          "color": "#dfa579",
          "pos": 100
        }
      ]
    },
    {
      "name": "Jungle Day",
      "favorite": false,
      "index": "083",
      "deg": 45,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#8baaaa",
          "pos": 0
        },
        {
          "color": "#ae8b9c",
          "pos": 100
        }
      ]
    },
    {
      "name": "Phoenix Start",
      "favorite": false,
      "index": "084",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#f83600",
          "pos": 0
        },
        {
          "color": "#f9d423",
          "pos": 100
        }
      ]
    },
    {
      "name": "October Silenceiver",
      "favorite": false,
      "index": "085",
      "deg": -20,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#b721ff",
          "pos": 0
        },
        {
          "color": "#21d4fd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Faraway River",
      "favorite": false,
      "index": "086",
      "deg": -20,
      "group": [
        "#7BCC9B",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#6e45e2",
          "pos": 0
        },
        {
          "color": "#88d3ce",
          "pos": 100
        }
      ]
    },
    {
      "name": "Alchemist Lab",
      "favorite": false,
      "index": "087",
      "deg": -20,
      "group": [
        "#7BCC9B",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#d558c8",
          "pos": 0
        },
        {
          "color": "#24d292",
          "pos": 100
        }
      ]
    },
    {
      "name": "Over Sun",
      "favorite": false,
      "index": "088",
      "deg": 60,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#abecd6",
          "pos": 0
        },
        {
          "color": "#fbed96",
          "pos": 100
        }
      ]
    },
    {
      "name": "Premium White",
      "favorite": false,
      "index": "089",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#d5d4d0",
          "pos": 0
        },
        {
          "color": "#d5d4d0",
          "pos": 1
        },
        {
          "color": "#eeeeec",
          "pos": 31
        }
      ]
    },
    {
      "name": "Mars Party",
      "favorite": false,
      "index": "090",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#5f72bd",
          "pos": 0
        },
        {
          "color": "#9b23ea",
          "pos": 100
        }
      ]
    },
    {
      "name": "Eternal Constance",
      "favorite": false,
      "index": "091",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#09203f",
          "pos": 0
        },
        {
          "color": "#537895",
          "pos": 100
        }
      ]
    },
    {
      "name": "Japan Blush",
      "favorite": false,
      "index": "092",
      "deg": -20,
      "group": [
        "#F9AFAD",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#ddd6f3",
          "pos": 0
        },
        {
          "color": "#faaca8",
          "pos": 100
        },
        {
          "color": "#faaca8",
          "pos": 100
        }
      ]
    },
    {
      "name": "Smiling Rain",
      "favorite": false,
      "index": "093",
      "deg": -20,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#dcb0ed",
          "pos": 0
        },
        {
          "color": "#99c99c",
          "pos": 100
        }
      ]
    },
    {
      "name": "Cloudy Apple",
      "favorite": false,
      "index": "094",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#f3e7e9",
          "pos": 0
        },
        {
          "color": "#e3eeff",
          "pos": 99
        },
        {
          "color": "#e3eeff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Big Mango",
      "favorite": false,
      "index": "095",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#c71d6f",
          "pos": 0
        },
        {
          "color": "#d09693",
          "pos": 100
        }
      ]
    },
    {
      "name": "Healthy Water",
      "favorite": false,
      "index": "096",
      "deg": 60,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#96deda",
          "pos": 0
        },
        {
          "color": "#50c9c3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Amour Amour",
      "favorite": false,
      "index": "097",
      "deg": 0,
      "group": [
        "#E5E9EC",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#f77062",
          "pos": 0
        },
        {
          "color": "#fe5196",
          "pos": 100
        }
      ]
    },
    {
      "name": "Risky Concrete",
      "favorite": false,
      "index": "098",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#c4c5c7",
          "pos": 0
        },
        {
          "color": "#dcdddf",
          "pos": 52
        },
        {
          "color": "#ebebeb",
          "pos": 100
        }
      ]
    },
    {
      "name": "Strong Stick",
      "favorite": false,
      "index": "099",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#a8caba",
          "pos": 0
        },
        {
          "color": "#5d4157",
          "pos": 100
        }
      ]
    },
    {
      "name": "Vicious Stance",
      "favorite": false,
      "index": "100",
      "deg": 60,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#29323c",
          "pos": 0
        },
        {
          "color": "#485563",
          "pos": 100
        }
      ]
    },
    {
      "name": "Palo Alto",
      "favorite": false,
      "index": "101",
      "deg": -60,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#16a085",
          "pos": 0
        },
        {
          "color": "#f4d03f",
          "pos": 100
        }
      ]
    },
    {
      "name": "Happy Memories",
      "favorite": false,
      "index": "102",
      "deg": -60,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ff5858",
          "pos": 0
        },
        {
          "color": "#f09819",
          "pos": 100
        }
      ]
    },
    {
      "name": "Midnight Bloom",
      "favorite": false,
      "index": "103",
      "deg": -20,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#2b5876",
          "pos": 0
        },
        {
          "color": "#4e4376",
          "pos": 100
        }
      ]
    },
    {
      "name": "Crystalline",
      "favorite": false,
      "index": "104",
      "deg": -20,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#00cdac",
          "pos": 0
        },
        {
          "color": "#8ddad5",
          "pos": 100
        }
      ]
    },
    {
      "name": "Raccoon Back",
      "favorite": false,
      "index": "105",
      "deg": -180,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#BCC5CE",
          "pos": 0
        },
        {
          "color": "#929EAD",
          "pos": 98
        }
      ]
    },
    {
      "name": "Party Bliss",
      "favorite": false,
      "index": "106",
      "deg": 0,
      "group": [
        "#259BE5",
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#4481eb",
          "pos": 0
        },
        {
          "color": "#04befe",
          "pos": 100
        }
      ]
    },
    {
      "name": "Confident Cloud",
      "favorite": false,
      "index": "107",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#dad4ec",
          "pos": 0
        },
        {
          "color": "#dad4ec",
          "pos": 1
        },
        {
          "color": "#f3e7e9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Le Cocktail",
      "favorite": false,
      "index": "108",
      "deg": 45,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#874da2",
          "pos": 0
        },
        {
          "color": "#c43a30",
          "pos": 100
        }
      ]
    },
    {
      "name": "River City",
      "favorite": false,
      "index": "109",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#4481eb",
          "pos": 0
        },
        {
          "color": "#04befe",
          "pos": 100
        }
      ]
    },
    {
      "name": "Frozen Berry",
      "favorite": false,
      "index": "110",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#e8198b",
          "pos": 0
        },
        {
          "color": "#c7eafd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Elegance",
      "favorite": false,
      "index": "111",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#EADFDF",
          "pos": 59
        },
        {
          "color": "#ECE2DF",
          "pos": 100
        }
      ]
    },
    {
      "name": "Child Care",
      "favorite": false,
      "index": "112",
      "deg": -20,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#f794a4",
          "pos": 0
        },
        {
          "color": "#fdd6bd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Flying Lemon",
      "favorite": false,
      "index": "113",
      "deg": 60,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#64b3f4",
          "pos": 0
        },
        {
          "color": "#c2e59c",
          "pos": 100
        }
      ]
    },
    {
      "name": "New Retrowave",
      "favorite": false,
      "index": "114",
      "deg": 0,
      "group": [
        "#F9AFAD",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#3b41c5",
          "pos": 0
        },
        {
          "color": "#a981bb",
          "pos": 49
        },
        {
          "color": "#ffc8a9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Hidden Jaguar",
      "favorite": false,
      "index": "115",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#0fd850",
          "pos": 0
        },
        {
          "color": "#f9f047",
          "pos": 100
        }
      ]
    },
    {
      "name": "Above The Sky",
      "favorite": false,
      "index": "116",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#d3d3d3",
          "pos": 0
        },
        {
          "color": "#d3d3d3",
          "pos": 1
        },
        {
          "color": "#e0e0e0",
          "pos": 26
        }
      ]
    },
    {
      "name": "Nega",
      "favorite": false,
      "index": "117",
      "deg": 45,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ee9ca7",
          "pos": 0
        },
        {
          "color": "#ffdde1",
          "pos": 100
        }
      ]
    },
    {
      "name": "Dense Water",
      "favorite": false,
      "index": "118",
      "deg": 0,
      "group": [
        "#7BCC9B",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#3ab5b0",
          "pos": 0
        },
        {
          "color": "#3d99be",
          "pos": 31
        },
        {
          "color": "#56317a",
          "pos": 100
        }
      ]
    },
    {
      "name": "Seashore",
      "favorite": false,
      "index": "120",
      "deg": 0,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#209cff",
          "pos": 0
        },
        {
          "color": "#68e0cf",
          "pos": 100
        }
      ]
    },
    {
      "name": "Marble Wall",
      "favorite": false,
      "index": "121",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#bdc2e8",
          "pos": 0
        },
        {
          "color": "#bdc2e8",
          "pos": 1
        },
        {
          "color": "#e6dee9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Cheerful Caramel",
      "favorite": false,
      "index": "122",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#e6b980",
          "pos": 0
        },
        {
          "color": "#eacda3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Night Sky",
      "favorite": false,
      "index": "123",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#1e3c72",
          "pos": 0
        },
        {
          "color": "#1e3c72",
          "pos": 1
        },
        {
          "color": "#2a5298",
          "pos": 100
        }
      ]
    },
    {
      "name": "Magic Lake",
      "favorite": false,
      "index": "124",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#d5dee7",
          "pos": 0
        },
        {
          "color": "#ffafbd",
          "pos": 0
        },
        {
          "color": "#c9ffbf",
          "pos": 100
        }
      ]
    },
    {
      "name": "Young Grass",
      "favorite": false,
      "index": "125",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#9be15d",
          "pos": 0
        },
        {
          "color": "#00e3ae",
          "pos": 100
        }
      ]
    },
    {
      "name": "Colorful Peach",
      "favorite": false,
      "index": "126",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ed6ea0",
          "pos": 0
        },
        {
          "color": "#ec8c69",
          "pos": 100
        }
      ]
    },
    {
      "name": "Gentle Care",
      "favorite": false,
      "index": "127",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#ffc3a0",
          "pos": 0
        },
        {
          "color": "#ffafbd",
          "pos": 100
        }
      ]
    },
    {
      "name": "Plum Bath",
      "favorite": false,
      "index": "128",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#cc208e",
          "pos": 0
        },
        {
          "color": "#6713d2",
          "pos": 100
        }
      ]
    },
    {
      "name": "Happy Unicorn",
      "favorite": false,
      "index": "129",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#b3ffab",
          "pos": 0
        },
        {
          "color": "#12fff7",
          "pos": 100
        }
      ]
    },
    {
      "name": "Full Metal",
      "favorite": false,
      "index": "130",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#D5DEE7",
          "pos": 0
        },
        {
          "color": "#E8EBF2",
          "pos": 50
        },
        {
          "color": "#E2E7ED",
          "pos": 100
        }
      ]
    },
    {
      "name": "African Field",
      "favorite": false,
      "index": "131",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#65bd60",
          "pos": 0
        },
        {
          "color": "#5ac1a8",
          "pos": 25
        },
        {
          "color": "#3ec6ed",
          "pos": 50
        }
      ]
    },
    {
      "name": "Solid Stone",
      "favorite": false,
      "index": "132",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#243949",
          "pos": 0
        },
        {
          "color": "#517fa4",
          "pos": 100
        }
      ]
    },
    {
      "name": "Orange Juice",
      "favorite": false,
      "index": "133",
      "deg": -20,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#fc6076",
          "pos": 0
        },
        {
          "color": "#ff9a44",
          "pos": 100
        }
      ]
    },
    {
      "name": "Glass Water",
      "favorite": false,
      "index": "134",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#dfe9f3",
          "pos": 0
        },
        {
          "color": "#ffffff",
          "pos": 100
        }
      ]
    },
    {
      "name": "North Miracle",
      "favorite": false,
      "index": "136",
      "deg": 0,
      "group": [
        "#259BE5",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#00dbde",
          "pos": 0
        },
        {
          "color": "#fc00ff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Fruit Blend",
      "favorite": false,
      "index": "137",
      "deg": 0,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#f9d423",
          "pos": 0
        },
        {
          "color": "#ff4e50",
          "pos": 100
        }
      ]
    },
    {
      "name": "Millennium Pine",
      "favorite": false,
      "index": "138",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#50cc7f",
          "pos": 0
        },
        {
          "color": "#f5d100",
          "pos": 100
        }
      ]
    },
    {
      "name": "High Flight",
      "favorite": false,
      "index": "139",
      "deg": 0,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#0acffe",
          "pos": 0
        },
        {
          "color": "#495aff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Mole Hall",
      "favorite": false,
      "index": "140",
      "deg": -20,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#616161",
          "pos": 0
        },
        {
          "color": "#9bc5c3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Space Shift",
      "favorite": false,
      "index": "142",
      "deg": 60,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#3d3393",
          "pos": 0
        },
        {
          "color": "#2b76b9",
          "pos": 37
        },
        {
          "color": "#2cacd1",
          "pos": 65
        },
        {
          "color": "#35eb93",
          "pos": 100
        }
      ]
    },
    {
      "name": "Forest Inei",
      "favorite": false,
      "index": "143",
      "deg": 0,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#df89b5",
          "pos": 0
        },
        {
          "color": "#bfd9fe",
          "pos": 100
        }
      ]
    },
    {
      "name": "Royal Garden",
      "favorite": false,
      "index": "144",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#ed6ea0",
          "pos": 0
        },
        {
          "color": "#ec8c69",
          "pos": 100
        }
      ]
    },
    {
      "name": "Rich Metal",
      "favorite": false,
      "index": "145",
      "deg": 0,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#d7d2cc",
          "pos": 0
        },
        {
          "color": "#304352",
          "pos": 100
        }
      ]
    },
    {
      "name": "Juicy Cake",
      "favorite": false,
      "index": "146",
      "deg": 0,
      "group": [
        "#F9AFAD",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#e14fad",
          "pos": 0
        },
        {
          "color": "#f9d423",
          "pos": 100
        }
      ]
    },
    {
      "name": "Smart Indigo",
      "favorite": false,
      "index": "147",
      "deg": 0,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#b224ef",
          "pos": 0
        },
        {
          "color": "#7579ff",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sand Strike",
      "favorite": false,
      "index": "148",
      "deg": 0,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#c1c161",
          "pos": 0
        },
        {
          "color": "#c1c161",
          "pos": 0
        },
        {
          "color": "#d4d4b1",
          "pos": 100
        }
      ]
    },
    {
      "name": "Norse Beauty",
      "favorite": false,
      "index": "149",
      "deg": 0,
      "group": [
        "#FC96D3",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#ec77ab",
          "pos": 0
        },
        {
          "color": "#7873f5",
          "pos": 100
        }
      ]
    },
    {
      "name": "Aqua Guidance",
      "favorite": false,
      "index": "150",
      "deg": 0,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#007adf",
          "pos": 0
        },
        {
          "color": "#00ecbc",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sun Veggie",
      "favorite": false,
      "index": "151",
      "deg": -225,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#20E2D7",
          "pos": 0
        },
        {
          "color": "#F9FEA5",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sea Lord",
      "favorite": false,
      "index": "152",
      "deg": -225,
      "group": [
        "#259BE5",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#2CD8D5",
          "pos": 0
        },
        {
          "color": "#C5C1FF",
          "pos": 56
        },
        {
          "color": "#FFBAC3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Black Sea",
      "favorite": false,
      "index": "153",
      "deg": -225,
      "group": [
        "#7BCC9B",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#2CD8D5",
          "pos": 0
        },
        {
          "color": "#6B8DD6",
          "pos": 48
        },
        {
          "color": "#8E37D7",
          "pos": 100
        }
      ]
    },
    {
      "name": "Grass Shampoo",
      "favorite": false,
      "index": "154",
      "deg": -225,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#DFFFCD",
          "pos": 0
        },
        {
          "color": "#90F9C4",
          "pos": 48
        },
        {
          "color": "#39F3BB",
          "pos": 100
        }
      ]
    },
    {
      "name": "Landing Aircraft",
      "favorite": false,
      "index": "155",
      "deg": -225,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#5D9FFF",
          "pos": 0
        },
        {
          "color": "#B8DCFF",
          "pos": 48
        },
        {
          "color": "#6BBBFF",
          "pos": 100
        }
      ]
    },
    {
      "name": "Witch Dance",
      "favorite": false,
      "index": "156",
      "deg": -225,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#A8BFFF",
          "pos": 0
        },
        {
          "color": "#884D80",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sleepless Night",
      "favorite": false,
      "index": "157",
      "deg": -225,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#5271C4",
          "pos": 0
        },
        {
          "color": "#B19FFF",
          "pos": 48
        },
        {
          "color": "#ECA1FE",
          "pos": 100
        }
      ]
    },
    {
      "name": "Angel Care",
      "favorite": false,
      "index": "158",
      "deg": -225,
      "group": [
        "#F9AFAD"
      ],
      "gradient": [
        {
          "color": "#FFE29F",
          "pos": 0
        },
        {
          "color": "#FFA99F",
          "pos": 48
        },
        {
          "color": "#FF719A",
          "pos": 100
        }
      ]
    },
    {
      "name": "Crystal River",
      "favorite": false,
      "index": "159",
      "deg": -225,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#22E1FF",
          "pos": 0
        },
        {
          "color": "#1D8FE1",
          "pos": 48
        },
        {
          "color": "#625EB1",
          "pos": 100
        }
      ]
    },
    {
      "name": "Soft Lipstick",
      "favorite": false,
      "index": "160",
      "deg": -225,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#B6CEE8",
          "pos": 0
        },
        {
          "color": "#F578DC",
          "pos": 100
        }
      ]
    },
    {
      "name": "Salt Mountain",
      "favorite": false,
      "index": "161",
      "deg": -225,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#FFFEFF",
          "pos": 0
        },
        {
          "color": "#D7FFFE",
          "pos": 100
        }
      ]
    },
    {
      "name": "Perfect White",
      "favorite": false,
      "index": "162",
      "deg": -225,
      "group": [
        "#E5E9EC"
      ],
      "gradient": [
        {
          "color": "#E3FDF5",
          "pos": 0
        },
        {
          "color": "#FFE6FA",
          "pos": 100
        }
      ]
    },
    {
      "name": "Fresh Oasis",
      "favorite": false,
      "index": "163",
      "deg": -225,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#7DE2FC",
          "pos": 0
        },
        {
          "color": "#B9B6E5",
          "pos": 100
        }
      ]
    },
    {
      "name": "Strict November",
      "favorite": false,
      "index": "164",
      "deg": -225,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#CBBACC",
          "pos": 0
        },
        {
          "color": "#2580B3",
          "pos": 100
        }
      ]
    },
    {
      "name": "Morning Salad",
      "favorite": false,
      "index": "165",
      "deg": -225,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#B7F8DB",
          "pos": 0
        },
        {
          "color": "#50A7C2",
          "pos": 100
        }
      ]
    },
    {
      "name": "Deep Relief",
      "favorite": false,
      "index": "166",
      "deg": -225,
      "group": [
        "#259BE5"
      ],
      "gradient": [
        {
          "color": "#7085B6",
          "pos": 0
        },
        {
          "color": "#87A7D9",
          "pos": 50
        },
        {
          "color": "#DEF3F8",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sea Strike",
      "favorite": false,
      "index": "167",
      "deg": -225,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#77FFD2",
          "pos": 0
        },
        {
          "color": "#6297DB",
          "pos": 48
        },
        {
          "color": "#1EECFF",
          "pos": 100
        }
      ]
    },
    {
      "name": "Night Call",
      "favorite": false,
      "index": "168",
      "deg": -225,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#AC32E4",
          "pos": 0
        },
        {
          "color": "#7918F2",
          "pos": 48
        },
        {
          "color": "#4801FF",
          "pos": 100
        }
      ]
    },
    {
      "name": "Supreme Sky",
      "favorite": false,
      "index": "169",
      "deg": -225,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#D4FFEC",
          "pos": 0
        },
        {
          "color": "#57F2CC",
          "pos": 48
        },
        {
          "color": "#4596FB",
          "pos": 100
        }
      ]
    },
    {
      "name": "Light Blue",
      "favorite": false,
      "index": "170",
      "deg": -225,
      "group": [
        "#259BE5",
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#9EFBD3",
          "pos": 0
        },
        {
          "color": "#57E9F2",
          "pos": 48
        },
        {
          "color": "#45D4FB",
          "pos": 100
        }
      ]
    },
    {
      "name": "Mind Crawl",
      "favorite": false,
      "index": "171",
      "deg": -225,
      "group": [
        "#7BCC9B"
      ],
      "gradient": [
        {
          "color": "#473B7B",
          "pos": 0
        },
        {
          "color": "#3584A7",
          "pos": 51
        },
        {
          "color": "#30D2BE",
          "pos": 100
        }
      ]
    },
    {
      "name": "Lily Meadow",
      "favorite": false,
      "index": "172",
      "deg": -225,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#65379B",
          "pos": 0
        },
        {
          "color": "#886AEA",
          "pos": 53
        },
        {
          "color": "#6457C6",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sugar Lollipop",
      "favorite": false,
      "index": "173",
      "deg": -225,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#A445B2",
          "pos": 0
        },
        {
          "color": "#D41872",
          "pos": 52
        },
        {
          "color": "#FF0066",
          "pos": 100
        }
      ]
    },
    {
      "name": "Sweet Dessert",
      "favorite": false,
      "index": "174",
      "deg": -225,
      "group": [
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#7742B2",
          "pos": 0
        },
        {
          "color": "#F180FF",
          "pos": 52
        },
        {
          "color": "#FD8BD9",
          "pos": 100
        }
      ]
    },
    {
      "name": "Magic Ray",
      "favorite": false,
      "index": "175",
      "deg": -225,
      "group": [
        "#259BE5",
        "#FC96D3",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#FF3CAC",
          "pos": 0
        },
        {
          "color": "#562B7C",
          "pos": 52
        },
        {
          "color": "#2B86C5",
          "pos": 100
        }
      ]
    },
    {
      "name": "Teen Party",
      "favorite": false,
      "index": "176",
      "deg": -225,
      "group": [
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#FF057C",
          "pos": 0
        },
        {
          "color": "#8D0B93",
          "pos": 50
        },
        {
          "color": "#321575",
          "pos": 100
        }
      ]
    },
    {
      "name": "Frozen Heat",
      "favorite": false,
      "index": "177",
      "deg": -225,
      "group": [
        "#259BE5",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#FF057C",
          "pos": 0
        },
        {
          "color": "#7C64D5",
          "pos": 48
        },
        {
          "color": "#4CC3FF",
          "pos": 100
        }
      ]
    },
    {
      "name": "Gagarin View",
      "favorite": false,
      "index": "178",
      "deg": -225,
      "group": [
        "#7BCC9B",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#69EACB",
          "pos": 0
        },
        {
          "color": "#EACCF8",
          "pos": 48
        },
        {
          "color": "#6654F1",
          "pos": 100
        }
      ]
    },
    {
      "name": "Fabled Sunset",
      "favorite": false,
      "index": "179",
      "deg": -225,
      "group": [
        "#259BE5",
        "#F9AFAD",
        "#FC96D3"
      ],
      "gradient": [
        {
          "color": "#231557",
          "pos": 0
        },
        {
          "color": "#44107A",
          "pos": 29
        },
        {
          "color": "#FF1361",
          "pos": 67
        }
      ]
    },
    {
      "name": "Perfect Blue",
      "favorite": false,
      "index": "180",
      "deg": -225,
      "group": [
        "#259BE5",
        "#8B56E9"
      ],
      "gradient": [
        {
          "color": "#3D4E81",
          "pos": 0
        },
        {
          "color": "#5753C9",
          "pos": 48
        },
        {
          "color": "#6E7FF3",
          "pos": 100
        }
      ]
    }
  ];

  function random(max) {
    return Math.floor(Math.random() * (max));
  }

  function getColor(color, num) {
    let data = [];
    for (let i = 0; i < num; i++) {
      data.push(color.splice(random(color.length), 1)[0]);
      if (color.length == 0) break;
    }
    return data;
  }

  let _get = function (num) {
    let color = [...colorArray];
    return getColor(color, num);
  }

  let _getType = function (type, num) {
    let group = ['#F9AFAD', '#FC96D3', '#8B56E9', '#259BE5', '#7BCC9B', '#E5E9EC', '#000000']
    let quary = group[type];
    let color = colorArray.filter(function (v) {
      let check = false;
      v.group.forEach(function (value) {
        if (value == quary) {
          check = true;
          return;
        }
      })
      return check;
    })
    return getColor(color, num);
  }

  let _getLike = function (num) {
    let color = colorArray.filter(function (v) {
      return v.favorite;
    })
    return getColor(color, num);
  }

  return {
    get: _get,
    getType: _getType,
    getLike: _getLike
  }
}())