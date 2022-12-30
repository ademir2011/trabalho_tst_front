<script lang="ts">
	import Button from "./Button.svelte";


    export let title: string = 'Smartphone Xiaomi Redmi 10A Tela 6.53 3GB RAM 32GB Câmera Tripla Azul';

</script>

<div class="w-screen border border-neutral-300 rounded-md p-3 flex flex-row">
    <img width="125" height="125" src="https://planoscelular.claro.com.br/medias/18435-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w1OTc2OXxpbWFnZS9wbmd8aDNkL2g5MC85MjY3OTE1NjIwMzgyLzE4NDM1XzBfemVyb18zMDBXeDMwMEhfcHJvZHVjdENhcmR8NjdkMDViYmQzMzFhYjZhM2JlMGFmY2JlM2U5ZTdkNjBkNjEzOThjYjY1NjNhZjY2NDAwZDVkMWMwMTEwNGY0Yw" alt="Not Found" />
    <div class="flex flex-col justify-between">
        <span class="font-semibold text-lg">{title}</span>
        <div class="flex justify-between items-center ">
            <span>R$ 499.44</span>
            <Button url="http://pelando.com.br" title="Acessar" typeButton='secondary' /> 
        </div>
    </div>
</div>