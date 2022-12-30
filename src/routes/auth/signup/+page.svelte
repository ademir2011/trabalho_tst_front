<script lang="ts">
	import Button from "$lib/Button.svelte";
	import Header from "$lib/Header.svelte";
	import Input from "$lib/Input.svelte";
	import Template from "$lib/Template.svelte";

    /** @type {import('./$types').PageData} */
    export let data:any;
    /** @type {import('./$types').ActionData} */
    export let form:any;
    
    export let loading: boolean = false;

</script>

<Template>
    
    <div slot="main">

        <form method="POST" >
            <div class="flex justify-center items-center w-full flex-col mt-4">
    
                <div class="flex w-1/5 space-y-4 justify-start flex-col border border-slate-200 p-4 bg-white rounded-md">
                    <span class="font-semibold">Nome</span>
                    <input name="name" type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                    <span class="font-semibold">E-mail</span>
                    <input name="email" type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                    <span class="font-semibold">Password</span>
                    <input name="password" type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                    <div class="w-full">
                        <button  class="btn btn-primary btn-block {loading ? 'loading' : ''}" on:click={ () => loading = !loading}>{loading ? 'Cadastrando' : 'Cadastrar'}</button>
                    </div> 
                </div>
                
            </div>
        </form>
    
        {#if form?.success}
        <!-- this message is ephemeral; it exists because the page was rendered in
            response to a form submission. it will vanish if the user reloads -->
        <p>Successfully logged in! Welcome back, </p>
        {/if}
        {#if form?.invalid}
        <!-- this message is ephemeral; it exists because the page was rendered in
            response to a form submission. it will vanish if the user reloads -->
        <p>Successfully logged in! Welcome back, </p>
        {/if}
    </div>

</Template>

