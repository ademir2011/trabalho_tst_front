<script lang="ts">
	import { NAME_STORE, EMAIL_STORE, TOKEN_STORE } from "$lib/stores/stores";
	import Template from "$lib/Template.svelte";
	import { onMount } from "svelte";

    let loading: boolean = false;

    /** @type {import('./$types').PageData} */
    export let data:any;
    /** @type {import('./$types').ActionData} */
    export let form:any;

    function save() {
        NAME_STORE.set(form.user.name);
        EMAIL_STORE.set(form.user.email);
        TOKEN_STORE.set(form.user.token);
    }

    onMount(() => {
        if(form?.success){
            save();
            alert('autenticado!');
        }
    });

</script>  

<Template>
    
    <div slot="main">

        <form method="POST"> 
            <div class="flex justify-center items-center w-full flex-col mt-4">
                
                <div class="flex w-1/5  space-y-4 justify-start flex-col border border-slate-200 p-4 bg-white rounded-md">
                    <span class="font-semibold">E-mail</span>
                    <input name="email" type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                    <span class="font-semibold">Password</span>
                    <input name="password" type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                    <div class="w-full flex justify-between ">
                        <a href="/auth/signup">
                            <button class="btn btn-outline btn-primary">Cadastrar</button>
                        </a>
                        <button  class="btn btn-primary {loading ? 'loading' : ''}" on:click={ () => loading = !loading}>{loading ? 'Autenticando' : 'Autenticar'}</button>
                    </div>
                </div>
    
            </div>

        </form>

    </div >
    
</Template>