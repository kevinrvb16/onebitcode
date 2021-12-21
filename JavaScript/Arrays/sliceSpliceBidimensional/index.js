const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
  ];

  const filteredSpaceships = hitchedSpaceships.filter((value) => {
    return value[0].length >= 9
  })

  filteredSpaceships.forEach((value)=> {
      console.log(value[0])
  })