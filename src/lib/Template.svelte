<script lang="ts">

	import Header from "$lib/Header.svelte";
	import { NAME_STORE, EMAIL_STORE, TOKEN_STORE } from "$lib/stores/stores";

</script>  

<div class="h-screen bg-base-300">
    <Header title={$NAME_STORE != undefined ? `Seja bem vindo: ${$NAME_STORE}` : 'Seja bem vindo ao Promo Imports'} logged={$NAME_STORE != undefined} />
    <slot name="main"></slot>
</div >