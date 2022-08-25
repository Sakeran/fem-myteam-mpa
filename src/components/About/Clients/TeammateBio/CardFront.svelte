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

<div class="front-face pt-8 pb-14">
  <img
    class="w-[6rem] aspect-square rounded-[50%] border-2 border-blue-rapture block mx-auto"
    src={data.avatarURL}
    alt=""
  />
  <h3
    class="mt-4 text-blue-rapture font-bold text-18p text-center leading-28/18"
  >
    {data.name}
  </h3>
  <p class="text-15p font-medium italic text-center leading-25/15">
    {data.jobTitle}
  </p>

  <noscript>
    <div class="mt-8 pt-8 border-t-2 border-blue-rapture">
      <CardBackContent {data} />
    </div>
  </noscript>
</div>
