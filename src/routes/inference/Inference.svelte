<script lang="ts">
	import Options from './Options.svelte';
</script>

<form method="POST">
	<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
		<legend class="fieldset-legend">Inference</legend>
		<label class="label" for="username">Username</label>
		<input type="text" class="input" id="username" name="username" placeholder="elonmusk" />

		<label class="label" for="userId">User ID</label>
		<input type="text" class="input" id="userId" name="userId" placeholder="44196397" />
		<Options />
		<button class="btn btn-neutral mt-4" type="submit">Submit</button>
	</fieldset>

</form>
