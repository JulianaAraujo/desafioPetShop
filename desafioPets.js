const nomePetshop = "Petshop DH";
console.log("** " + nomePetshop + " **");

let pets = [
    {
      nome: "Batman",
      tipo: "cão",
      raca: "labrador",
      idade: 5,
      genero: "M",
      vacinado: false,
      servicos: ["banho", "tosa"]
    },
    {
      nome: "Costelinha",
      tipo: "cão",
      raca: "vira-lata",
      idade: 10,
      genero: "M",
      vacinado: true,
      servicos: ["banho"]
    },
    {
      nome: "Scooby Doo",
      tipo: "cão",
      raca: "Dogue Alemão",
      idade: 5,
      genero: "M",
      vacinado: false,
      servicos: ["banho", "tosa"]
    },
    {
      nome: "Tom",
      tipo: "gato",
      raca: "poodle",
      idade: 5,
      genero: "M",
      vacinado: false,
      servicos: ["corte de unha"]
    },
    {
      nome: "Lessi",
      tipo: "cao",
      raca: "sem-raça",
      idade: 2,
      genero: "M",
      vacinado: true,
      servicos: ["banho"]
    }
  ];

const imprimirPets = (pets) => {
    for (let i = 0; i < pets.length; i++) {
      console.log("------------------------");
      console.log("Nome: " + pets[i].nome);
      console.log("Tipo: " + pets[i].tipo);
      console.log("Raça: " + pets[i].raca);
    }
    console.log("------------------------");
  };

  const vacinarPet = (pets) => {
    for (i=0; i< pets.length; i++){
    if (!pets.vacinado) {
      pets.vacinado = true;
    }    
  };
  }

const listaPets = (pets, imprimirPets,vacinarPet) => {
    let petsVacinados = [];
    let petsSemVacina = [];

    for (let i = 0; i< pets.length; i++) {
        pets[i].vacinado ? petsVacinados.push(pets[i]) : petsSemVacina.push(pets[i]);
    }
    
    console.log("pets já vacinados");
    imprimirPets(petsVacinados);
    console.log("pets sem vacina");
    imprimirPets(petsSemVacina);
    
    vacinarPet(petsSemVacina);

    console.log("pets vacinados agora:")
    imprimirPets(petsSemVacina)

    console.log("Todos os pets foram vacinados");
    imprimirPets(petsSemVacina);
    imprimirPets(petsVacinados);

}


listaPets(pets, imprimirPets, vacinarPet);

    

