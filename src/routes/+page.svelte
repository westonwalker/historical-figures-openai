<script>
	export let form;
</script>

<section class="min-h-screen w-full bg-gray-900 text-white">
	<div class="w-full flex flex-col justify-center pt-12 mx-auto text-center">
		<h1 class="text-5xl font-bold">Historical Figure Facts</h1>
		<p class="text-lg mt-6">Generate a random historical figure and learn more about them.</p>
		<form method="POST">
			<button  class="text-lg px-4 py-2 bg-rose-500 hover:bg-rose-600 w-fit mx-auto mt-6">Generate</button>
		</form>
	</div>
	{#if form?.info && form?.image}
	<div class="flex flex-row max-w-5xl mx-auto mt-20 p-6 bg-gray-800 rounded-lg">
		<div class="w-1/2">
			<img class="w-52 h-52" src="{form.image}" alt="{form.info.name}" />
		</div>
		<div class="w-1/2">
			<h2 class="text-3xl font-bold">{form.info.name}</h2>
			<ul class="mt-4 list-disc space-y-2">
				{#each form.info.achievements as achievement}
					<li>{achievement}</li>
				{/each}
			</ul>
		</div>
	</div>
	{/if}
</section>
