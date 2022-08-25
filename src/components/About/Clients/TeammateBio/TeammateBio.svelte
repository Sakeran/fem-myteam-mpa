<script lang="ts">
  import TeammateBioButton from "./ToggleButton.svelte";
  import TeammateBioBack from "./CardBack.svelte";
  import TeammateBioFront from "./CardFront.svelte";

  interface TeammateBioData {
    avatarURL: string;
    name: string;
    jobTitle: string;
    quote: string;
    twitterURL?: string;
    linkedinURL?: string;
  }

  export let data: TeammateBioData;

  let expandedInfo = false;

  function toggle() {
    expandedInfo = !expandedInfo;
  }
</script>

<div class="teammate-bio">
  <div class="row-start-1 row-end-3 col-start-1 col-end-2 bg-green-sacremento">
    <TeammateBioFront {data} />
  </div>
  <div class="z-10 row-start-2 row-end-4 col-start-1 col-end-2">
    <TeammateBioButton {data} expanded={expandedInfo} on:click={toggle} />
  </div>
  {#if expandedInfo}
    <div class="row-start-1 row-end-3 col-start-1 col-end-2 bg-green-dark">
      <TeammateBioBack {data} />
    </div>
  {/if}
</div>

<style lang="postcss">
  .teammate-bio {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1.75rem 1.75rem;
  }
</style>
