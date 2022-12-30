<script lang="ts">
	import Button from "./Button.svelte";
    export let title: string = '';
    export let logged: boolean = false;

	import Label from "./Label.svelte"; 

</script>
<header>
     
    <div class="w-full bg-violet-500 p-3">
        <div class="max-w-3xl mx-auto flex justify-between items-center">
            <a href='/'>
                <Label text="Início" />
            </a>
            <div class="flex space-x-3">
                {#if logged}
                    <Button title='Favoritos' url="/movies/favorite"/>
                {/if}
                <Button title={logged ? 'Sair' : 'Autenticar'} url={ logged ? '' : "/auth/login"}/>
            </div>
        </div>
    </div>

</header>