<script lang="ts">
  import { cubicInOut } from "svelte/easing";
  import TeammateBioButton from "./ToggleButton.svelte";
  import TeammateBioBack from "./CardBack.svelte";
  import TeammateBioFront from "./CardFront.svelte";
  import checkReducedMotion from "../../../../helpers/checkReducedMotion";
  import { fade } from "svelte/transition";

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

  // Transition function for back face
  function clipExpand(
    node: HTMLDivElement,
    params: any
  ): SvelteTransitionReturnType {
    // Note - Animated clip-path not currently supported on Safari. Fall back to a fade animation.
    if (
      !window ||
      (window.navigator.userAgent.includes("Safari") &&
        !window.navigator.userAgent.includes("Chrome"))
    ) {
      return fade(node, params);
    }

    // Animated clip paths supported elsewhere.
    return {
      duration: checkReducedMotion(400, 0),
      easing: cubicInOut,
      css: (t) => `clip-path: circle(${t * 100}% at 50% 100%)`,
    };
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
    <div
      transition:clipExpand
      class="row-start-1 row-end-3 col-start-1 col-end-2 bg-green-dark"
    >
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
