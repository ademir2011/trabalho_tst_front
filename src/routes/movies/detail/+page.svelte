<script lang="ts">
	import Template from "$lib/Template.svelte";

    import { page } from '$app/stores';
	import { onMount } from "svelte";
	import { TOKEN_STORE } from "$lib/stores/stores";
	import { writable } from "svelte/store";
    const imdbID = $page.url.searchParams.get('imdbID');

    type MovieType = {
        Title: string;
        Poster: string;
        Plot: string;
    }

    let movie: any = {};
    let reviews: any = [];

    export const reviewData = writable({comment: ''});

    function updateReviews(){
        fetch(`https://tstapi.ffcloud.com.br/reviews/${imdbID}`, 
            {   
                method: 'GET', 
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${$TOKEN_STORE}`, // notice the Bearer before your token
                },
            }).then(async (response) => {
            reviews = (await response.json())['reviews'];
            console.log(reviews)
        });
    }

    onMount(() => {
        fetch(`http://www.omdbapi.com/?apikey=8cea8858&i=${imdbID}`, {method: 'GET'}).then(async (response) => {
            movie = (await response.json());
        });
        updateReviews();
    });

    function deleteReview(){
        fetch(`https://tstapi.ffcloud.com.br/reviews/${imdbID}`, 
            {   
                method: 'DELETE', 
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${$TOKEN_STORE}`, // notice the Bearer before your token
                },
            }).then( (response) => {
                updateReviews();
            }
        );
    }

    function sendReview(){
        fetch(`https://tstapi.ffcloud.com.br/reviews/${imdbID}`, 
            {   
                method: 'POST', 
                body: JSON.stringify({
                    "comment" : $reviewData.comment,
                    "stars" : "5"
                }),
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${$TOKEN_STORE}`, // notice the Bearer before your token
                },
            }).then( (response) => {
                updateReviews();
            }
        );
    }


</script>
 
<Template>
    
    <div slot="main">
        <div class="mx-auto flex justify-center items-center space-x-3 mt-5">
                <div class="card w-56 bg-base-100 shadow-xl">
                    <figure><img class="object-fill" src={movie.Poster} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{movie.Title}</h2>
                        <p>{movie.Plot}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="space-y-1">
                        {#each reviews as review}
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <p>{review.comment}</p>
                                </div>
                                <div class="card-actions justify-end m-5">
                                    <h3>{review.user.name}</h3>
                                </div>
                            </div>
                        {/each}
                    </div>
                    
                    <div class="flex justify-between items-center mt-5">
                        <textarea class="textarea textarea-primary" placeholder="Escreva aqui sua review" bind:value={$reviewData.comment}></textarea>
                        <div class="flex flex-col">
                            <button class="btn btn-primary" on:click={sendReview}>Enviar Review</button>
                            <button class="btn btn-error" on:click={deleteReview}>Deletar Reviews</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
 
</Template>
    

  