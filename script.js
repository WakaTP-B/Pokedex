fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/10")
    .then(response_obj => response_obj.json())
    .then(pokemons_arr => {
        const loadingTag_elem = document.querySelector(".loading");
        loadingTag_elem.remove();
        pokemons_arr.forEach(pokemon_obj => {
            console.log(pokemon_obj.name);
            // J'ai le nom du pokémon 
            // Je vais l'ajouter au body

            // J'ai besoin d'une balise p
            const pTag_elem = document.createElement("p");
            const pImgElm = document.createElement("img");
            // J'ajoute le nom du pokémon dans le texte de la balise
            pTag_elem.textContent = pokemon_obj.name;
            pImgElm.setAttribute("src", pokemon_obj.sprite)
            // J'ajoute la balise dans le body
            document.body.appendChild(pTag_elem);
            document.body.appendChild(pImgElm);
        });
    });
