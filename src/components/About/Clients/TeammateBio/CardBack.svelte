<script lang="ts">
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

<div class="back-face pt-8 pb-14">
  <CardBackContent {data} />
</div>
