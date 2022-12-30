<script lang="ts">
	import Button from "$lib/Button.svelte";
	import Header from "$lib/Header.svelte";
	import Label from "$lib/Label.svelte";
	import PromoCard from "$lib/PromoCard.svelte";
	import { NAME_STORE,TOKEN_STORE } from "$lib/stores/stores";
	import Template from "$lib/Template.svelte";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

    type Movie = {
        Title: string;
        imdbID: string;
        Poster: string;
    }

    let movies: Movie[] = [];

    let favorites: [] = [];


    async function updateFavorites(){
        const res = await fetch(`https://tstapi.ffcloud.com.br/favorites`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${$TOKEN_STORE}`, // notice the Bearer before your token
            },
        });
        favorites = (await res.json())["favorites"];
    }

    onMount(async () => {
		await updateFavorites();
	});


        export const movieInfo = writable({
            title: ''
        });

        function fetchApiMovies(){ 
            fetch(`http://www.omdbapi.com/?apikey=8cea8858&s=${$movieInfo.title}`, {method: 'GET'}).then(async (response) => {
                movies = [ ...(await response.json())['Search'] ];
                console.log(movies);
            });
        }

        function favorite(imdbID: string){
            fetch(`https://tstapi.ffcloud.com.br/favorites`, 
                {   
                    method: 'POST', 
                    body: JSON.stringify({
                        imdbID: imdbID, 
                    }),
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${$TOKEN_STORE}`, // notice the Bearer before your token
                    },
                }).then(async (response) => {
                updateFavorites();
            });
        }

        function removeFavorite(imdbID: string){
            fetch(`https://tstapi.ffcloud.com.br/favorites/${imdbID}`, 
                {   
                    method: 'DELETE', 
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${$TOKEN_STORE}`, // notice the Bearer before your token
                    },
                }).then(async (response) => {
                updateFavorites();
            });
        }

</script>
 
<Template>
    
    <div slot="main">
        <div class="mx-auto flex justify-center items-center flex-col space-y-5 mt-5">
            <div class="flex space-x-4">
                <input type="text" placeholder="Type here" class="input w-full max-w-xs" bind:value={$movieInfo.title} />
                <button class="btn btn-primary" on:click={fetchApiMovies}>Buscar</button>
            </div>
            <div class="grid grid-cols-4 gap-4">
                {#each movies as movie}
                    <!-- <a href={`/movies/detail?imdbID=${movie.imdbID}`}> -->
                        <div class="card w-60 bg-base-100 shadow-xl">
                            <figure><img src={movie.Poster} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{movie.Title}</h2>
                                <div class="card-actions justify-end">
                                <!-- {#if favorites.find( element => element['imdbID'] == movie.imdbID)}
                                    <button class="btn btn-secondary" on:click|preventDefault={() => removeFavorite(movie.imdbID)}>Favoritado</button>
                                {:else}
                                    <button class="btn btn-primary" on:click|preventDefault={() => favorite(movie.imdbID)}>Favoritar</button>
                                {/if} -->
                            </div>
                            </div>
                        </div>
                    <!-- </a> -->
                {/each}
            </div>
        </div>
    </div>

</Template>
    

  