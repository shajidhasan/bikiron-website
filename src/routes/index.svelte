<script lang="ts">
	import courses from '$data/courseInfos';
	import meta from '$data/meta';

	import CourseCard from '$components/CourseCard.svelte';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>
		{meta.title} - {meta.subtitle}
	</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<div class="flex-1 bg-gray-50">
		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 container mx-auto p-5 gap-5">
			{#each courses as courseInfo}
				<CourseCard {courseInfo} />
			{/each}
		</div>
	</div>
	<Footer />
</div>
