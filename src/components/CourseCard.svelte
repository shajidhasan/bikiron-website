<script lang="ts">
	export let courseInfo: CourseInfo;
</script>

<a class="bg-white rounded-md p-4 space-y-2 shadow-2xl shadow-gray-300" href={`/courses/${courseInfo.slug}`}>
	<div class="bg-rose-100 rounded-md h-64" />
	<h1 class="text-xl lg:text-2xl text-gray-700 font-semibold">{courseInfo.title}</h1>
    {#if !courseInfo.upcoming}
	<div class="flex justify-between items-center">
		{#if courseInfo.discount}
			<div class="flex flex-row items-center space-x-4">
				<div class="text-gray-500 text-lg relative">
					৳ {courseInfo.price}
					<div class="absolute w-16 h-[1px] bg-gray-500 top-1/2 left-1/2 -rotate-6 -translate-x-1/2 -translate-y-1/2" />
				</div>
				<div class="rounded-md py-1 px-3 text-lg bg-green-50 text-green-500 font-semibold">
					৳ {courseInfo.discountedPrice}
				</div>
			</div>
		{:else}
			<div class="rounded-md py-1 px-3 text-lg bg-green-50 text-green-500 font-semibold">
				৳ {courseInfo.price}
			</div>
		{/if}
		<p class="font-semibold text-rose-500">{courseInfo.lectureCount} lectures</p>
	</div>
    {:else}
    <h1 class="text-lg font-semibold text-green-500">Upcoming!</h1>
        
    {/if}
</a>
