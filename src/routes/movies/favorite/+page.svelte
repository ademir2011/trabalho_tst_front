<script lang="ts">
	import Template from "$lib/Template.svelte";
	import { TOKEN_STORE } from "$lib/stores/stores";
	import { onMount } from "svelte";

    let favorites: [] = [];

    async function fetchFavorites(){
        const res = await fetch(`https://tstapi.ffcloud.com.br/favorites`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${$TOKEN_STORE}`, // notice the Bearer before your token
            },
        });
        return (await res.json())["favorites"];
    }

    onMount(async () => {
		favorites = await fetchFavorites();
        console.log(favorites.length);
        for(let i = 0; i < favorites.length; i++){
            // console.log(await getMovieByImdbID(favorites[i]));
        }
	});

    async function getMovieByImdbID(imdbID: string){ 
        return fetch(`http://www.omdbapi.com/?apikey=8cea8858&i=${imdbID}`, {method: 'GET'}).then(async (response) => {
            return (await response.json());
        });
    }

</script>
 
<Template>
    
    <div slot="main">
        <div class="mx-auto flex  justify-center items-center space-x-3 mt-5">
            {#each favorites as favorite}
                {console.log(favorite)}

            {/each}
        </div>
    </div>
 
</Template>
    

  