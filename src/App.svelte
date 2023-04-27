<script>
	import readFile from './file.js';

	let link = 'C:/Users';
	let files;
	$: files = readFile(link);
</script>

<main>
	<div id="navigator">{link}</div>
	<div id="fileList">
		<div id="files">
			{#each files as fileName}
				{#if !Object.values(fileName).includes('.')}
					<div class="fileTitle"
						on:click={() =>{
							link = `${link}/${Object.values(fileName)}`
							files = readFile(link);
						}}>
						<span>{Object.values(fileName)}</span>
					</div>
				{:else}
					<div class="fileTitle">
						<span>{Object.values(fileName)}</span>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		border: 3px solid #888;
		display: flex;
		min-height: calc(100vh - 10px);
		max-height: calc(100vh - 10px);
		min-width: calc(100% - 10px);
		box-sizing: border-box;
		position: fixed;
	}
	#navigator {
		width: 100px;
		background-color: #cdcdcd;
		border-right: 1px solid black;
		overflow-y: scroll;
	}
	#fileList {
		overflow-y: scroll;
		flex: 1;
	}
	#files {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>