<script>
	import { readFromDir, checkDir, fs } from './file.js';
	// import readFromDir from './file.js';

	let link = 'C:/Users';
	let files;

	$: files = readFromDir(link);

	const getFileTime = (fileName) => {
		const time = fs.statSync(`${link}/${Object.values(fileName)}`).mtime.getTime();
		const fileDate = new Date(time);
		return `${fileDate.getFullYear(fileDate)}-${fileDate.getMonth(fileDate)}-${fileDate.getDate(fileDate)} ${fileDate.getHours(fileDate)}:${fileDate.getMinutes(fileDate)}`;
	}
</script>

<main>
	<div id="navigator">{link}</div>
	<div id="fileList">
		<div id="files">
			{#each files as fileName}
				<div class="fileTitle"
					on:click={() =>{
						if (fileName.isDirectory()) {
							link = `${link}/${Object.values(fileName)}`
							files = readFromDir(link);
						}
					}}>
					<span>{Object.values(fileName)}</span>
					<span>{getFileTime(fileName)}</span>
				</div>
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
	.fileTitle {
		display: flex;
	}
	.fileTitle span:nth-child(1) {
		width: 60vw;
	}
	#navigator {
		width: 100px;
		background-color: #cdcdcd;
		border-right: 1px solid black;
		overflow-y: scroll;
		font-size: 5px;
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