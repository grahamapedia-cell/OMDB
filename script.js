

async function getMovies() {
    try {
        const search = document.getElementById("search")
        const movieName=search.value
        const url="https://www.omdbapi.com/?s="+movieName+"&apikey=31970859"
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON

        

        const movieHolder = document.getElementById("movieHolder");
        const headers=new Headers();
        headers.append("Accept", "application/json")
        const response=await fetch(url, {headers:headers})       
        const json=await response.json();
        console.log(json);

        for (movie of json.Search) {
            const card=document.createElement("div")
            card.classList.add("card")
            const poster=document.createElement("img");
            poster.src=movie.Poster;
            poster.classList.add("poster")
            card.appendChild(poster)
            const container=document.createElement("div")
            container.classList.add("container")
            const title=document.createElement("p")
            title.textContent=movie.Title;
            container.appendChild(title)
            const year=document.createElement("p")
            year.textContent=movie.Year;
            container.appendChild(year)
            card.appendChild(container)
            movieHolder.appendChild(card)
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD


            // Create an image element
            //      point it to the image from this movie            


            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container

            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder element
        }


    }
    catch (error) {
        console.log(error)
    }
}