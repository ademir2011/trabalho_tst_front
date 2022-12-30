<script lang="ts">

	import Header from "$lib/Header.svelte";

</script>  

<div class="h-screen bg-base-300">
    <Header />
    <slot name="main"></slot>
</div >