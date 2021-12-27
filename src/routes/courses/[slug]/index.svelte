<script context="module" lang="ts">
	import showdown from 'showdown';

	import courseInfos from '$data/courseInfos';
	import courseDetails from '$data/courseDetails';

	export const load = ({ page }) => {
		const { slug } = page.params;

		const courseInfo: CourseInfo = courseInfos.find((value) => value.slug === slug);
		const courseDetail: CourseDetail = courseDetails.find((value) => value.slug === slug);

		const converter = new showdown.Converter();
		const detailHtml = converter.makeHtml(courseDetail.detail);

		if (courseInfo === undefined || courseDetail === undefined) {
			return {
				status: 404
			};
		}

		return {
			props: {
				courseInfo,
				detailHtml
			}
		};
	};
</script>

<script lang="ts">
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';

	export let courseInfo: CourseInfo, detailHtml: string;
</script>

<svelte:head>
	<title>
		{courseInfo.title}
	</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header compact />
	<div class="flex-1 bg-gray-50">
		<div class="container mx-auto p-5 mt-5 lg:mt-10">
			<div class="flex flex-col lg:flex-row-reverse gap-12">
				<div class="p-5 bg-white shadow-lg h-min rounded-xl">
					<div class="aspect-video bg-rose-100 relative rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="absolute w-1/3 text-rose-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h1 class="text-2xl lg:text-3xl font-semibold text-gray-700 mt-5 mb-3">{courseInfo.title}</h1>
					<p class="text-lg lg:text-xl text-gray-600 mb-6">{courseInfo.subtitle}</p>
					{#each courseInfo.features as feature}
						<div class="flex flex-row items-center mb-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-8 w-8 text-green-600 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="font-medium text-gray-600">{feature}</p>
						</div>
					{/each}
					<a href={`${courseInfo.slug}/apply`}
						class="block text-center py-2 rounded-lg bg-green-600 text-white font-semibold text-lg mt-4 hover:bg-green-500"
						>Apply</a
					>
				</div>
				<div class="prose lg:prose-xl prose-h2:text-gray-700 text-gray-600">
					{@html detailHtml}
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>
