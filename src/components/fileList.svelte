<script>
  export let files;
</script>
<div id="fileList">
  <div id="files">
    {#each files as fileName}
      <div class="fileTitle">
        <!-- <span>{Object.keys(fileName)}</span> -->
        <!-- if (on) -->
        <span>{Object.values(fileName)}</span>
      </div>
    {/each}
  </div>
</div>