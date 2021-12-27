<script context="module" lang="ts">
	import courseInfos from '$data/courseInfos';
	export const load = ({ page }) => {
		const { slug } = page.params;

		const courseInfo: CourseInfo = courseInfos.find((value) => value.slug === slug);
		if (courseInfo === undefined) {
			return {
				status: 404
			};
		}

		return {
			props: {
				courseInfo
			}
		};
	};
</script>

<script lang="ts">
	// import { form, field } from 'svelte-forms';
	// import { required, email, between } from 'svelte-forms/validators';

	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';

	export let courseInfo: CourseInfo;

	function phoneNumberValidator() {
		return (value: string) => {
			return { valid: value.startsWith('01'), name: 'invalid-phone' };
		};
	}

	// const name = field('name', '', [required(), between(3, 20)]);
	// const emailAddr = field('email', '', [required(), email()]);
	// const phoneNumber = field('phone', '', [between(11, 11), phoneNumberValidator()]);
    // const grade = field('grade', '', [required()]);
    // const bkashNumber = field('bkash', '', [between(11, 11), phoneNumberValidator()]);
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
			<div class="flex flex-col lg:flex-row gap-12">
				<div class="flex-1">
					<p class="uppercase font-semibold text-rose-500">Applying for</p>
					<h1 class="text-gray-700 text-xl lg:text-3xl font-bold mt-2">{courseInfo.title}</h1>
                    <p class="text-gray-600 lg:text-lg mt-3">
                        কোর্স ফী আগে বিকাশ করে দিতে হবে। তারপর তোমার বিকাশ নাম্বার ফর্মে দিলে আমরা অতি সত্বর তা যাচাই করে কোর্সটির ফেসবুক গ্রুপে তোমাকে এড করে দেবো।
                    </p>
				</div>

				<form class="p-5 bg-white shadow-lg h-min rounded-xl flex-1 space-y-6">
                    <div>
                        <label for="name" class="block lg:text-lg font-semibold text-gray-600 mb-1">Full name</label>
                        <input type="text" id="name" class="w-full rounded-lg focus:border-rose-500 focus:ring-rose-500 text-gray-700">
                    </div>
                    <div>
                        <label for="email" class="block lg:text-lg font-semibold text-gray-600 mb-1">Email address</label>
                        <input type="email" id="email" class="w-full rounded-lg focus:border-rose-500 focus:ring-rose-500 text-gray-700">
                    </div>
                    <div>
                        <label for="phone" class="block lg:text-lg font-semibold text-gray-600 mb-1">Phone number</label>
                        <input type="tel" id="phone" class="w-full rounded-lg focus:border-rose-500 focus:ring-rose-500 text-gray-700">
                    </div>
                    
                    <div>
                        <label for="grade" class="block lg:text-lg font-semibold text-gray-600 mb-1">Class</label>
                        <select id="grade" class="w-full rounded-lg focus:border-rose-500 focus:ring-rose-500 text-gray-700">
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                            <option value="undergrad">Undergraduate</option>
                        </select>
                    </div>

                    <div>
                        <label for="bkash" class="block lg:text-lg font-semibold text-gray-600 mb-1">BKash number</label>
                        <input type="tel" id="bkash" class="w-full rounded-lg focus:border-rose-500 focus:ring-rose-500 text-gray-700">
                    </div>

                    <button class="rounded-lg bg-green-600 focus:bg-green-500 font-semibold w-full px-3 py-2 lg:text-lg text-white">
                        Submit
                    </button>
                </form>
			</div>
		</div>
	</div>
	<Footer />
</div>
