<script lang="ts">
	import Button from "./Button.svelte";
	import {  logout } from "$lib/stores/stores";
	import { NAME_STORE } from "$lib/stores/stores";
	import Label from "./Label.svelte"; 
	import { onMount } from "svelte";

    let logged: boolean = false;
    
    NAME_STORE.subscribe( () => {
        logged = $NAME_STORE !== undefined;
    });

</script>
<header>
    <div class="w-full bg-violet-500 p-3">
        <div class="max-w-3xl mx-auto flex justify-between items-center">
            <a href='/'>
                <Label text="Início" />
            </a>
            <div class="flex space-x-3">
                <Button 
                    title={logged ? 'Sair' : 'Autenticar'} 
                    url={ logged ? '' : "/auth/login"} 
                    onPressed={logged ? () => {
                        logged = false;
                        logout();
                        location.reload();
                    } : () => {
                    }}/>
            </div>
        </div>
    </div>

</header>