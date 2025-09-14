<script lang="ts">
	import Inference from './inference/Inference.svelte';
	import type { Response } from '$lib/types';
	import Display from './display/Display.svelte';

	let graph_container: HTMLDivElement;
	let { data, form } = $props<{ data: any; form: Response }>();
</script>

<main class="space-y-20 p-8">
	<section class="hero bg-base-200 min-h-screen flex items-center justify-center">
		<div class="hero-content flex flex-col md:flex-row gap-12">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Hello there</h1>
				<p class="py-6">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
					exercitationem quasi.
				</p>
				<button class="btn btn-primary">Start Inference</button>
			</div>
			<div
				class="flex-1 flex items-center justify-center bg-gray-100 rounded-lg"
				bind:this={graph_container}
			>
				<span class="text-gray-400">[ Graph Illustration ]</span>
			</div>
		</div>
	</section>

	<section class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
		<div class="space-y-4">
			<h2 class="text-3xl font-bold">Study Details</h2>
			<p class="text-gray-600">Some description about the study goes here.</p>
			<div class="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
				[ Chart ]
			</div>
			<div class="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
				[ Diagram ]
			</div>
		</div>
		<div class="space-y-4">
			<div class="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
				[ Sidebar Content ]
			</div>
			<div class="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
				[ Extra Details ]
			</div>
		</div>
	</section>

	<!-- Inference -->
	<section class="max-w-4xl mx-auto space-y-8">
		<h2 class="text-3xl font-bold">Inference</h2>
		<div class="flex w-full flex-row items-top">
			<Inference />
			<div class="divider divider-horizontal"></div>
			<div class="card bg-base-300 rounded-box grid h-20 w-32 place-items-center">
				{#if form && form.success}
					<Display tweets={form.data} />
				{/if}
			</div>
		</div>
	</section>
</main>
