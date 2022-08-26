<script lang="ts">
  import { cubicOut } from "svelte/easing";

  import { fade } from "svelte/transition";
  import checkReducedMotion from "../../../../helpers/checkReducedMotion";

  import CardBackContent from "./CardBackContent.svelte";

  interface TeammateBioData {
    avatarURL: string;
    name: string;
    jobTitle: string;
    quote: string;
    twitterURL?: string;
    linkedinURL?: string;
  }

  export let data: TeammateBioData;
</script>

<div
  in:fade={{
    duration: checkReducedMotion(400, 0),
    delay: checkReducedMotion(100, 0),
    easing: cubicOut,
  }}
  class="back-face pt-8 pb-14"
>
  <CardBackContent {data} />
</div>
