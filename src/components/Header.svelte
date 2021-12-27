<script lang="ts">
    import meta from "$data/meta";

	export let compact: boolean = false;
</script>

<header class="h-48 z-10 bg-white text-rose-200/30 shadow-lg flex items-center justify-center" class:h-28={compact} class:pattern-zigzag-xl={!compact} class:pattern-zigzag-lg={compact}>
    <a href="/" class="flex flex-row items-center justify-center">
        <div class="bg-rose-500 rounded-md h-28 w-28" class:h-20={compact} class:w-20={compact} />
        <div class="ml-4" class:ml-3={compact}>
            <h1 class="text-3xl font-semibold text-rose-700" class:text-2xl={compact}>{meta.title}</h1>
            <p class="text-xl text-rose-600" class:text-lg={compact}>{meta.subtitle}</p>
        </div>
    </a>
</header>
