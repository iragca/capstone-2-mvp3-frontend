<script lang="ts">
	import type { ScoredTweetList } from '$lib/types';
	let { tweets }: { tweets: ScoredTweetList } = $props<{ tweets: ScoredTweetList }>();
</script>

{#if tweets}
	<ul>
		{#each tweets as item}
			<li class="mb-4 p-2 w-120 border rounded">
				<p><strong>{item.node.text}</strong></p>
				<p class="text-sm text-gray-600">Score: {item.score.toFixed(3)}</p>
				<a class="text-blue-600 underline" href={item.node.status_link} target="_blank">
					View Tweet
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>No results yet.</p>
{/if}
