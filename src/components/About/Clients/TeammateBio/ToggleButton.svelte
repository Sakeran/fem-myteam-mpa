<script lang="ts">
  interface TeammateBioData {
    avatarURL: string;
    name: string;
    jobTitle: string;
    quote: string;
    twitterURL?: string;
    linkedinURL?: string;
  }

  export let data: TeammateBioData;
  export let expanded: boolean;
</script>

<button
  on:click
  aria-expanded={expanded}
  class="mx-auto w-14 aspect-square rounded-[50%] bg-red-coral hocus:bg-blue-rapture motion-safe:transition-colors motion-safe:ease-in-out grid place-items-center"
>
  <svg
    class="motion-safe:transition-transform motion-safe:ease-in-out"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    aria-hidden="true"
    ><path
      fill="#012F34"
      fill-rule="evenodd"
      d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
    /></svg
  >
  <span class="sr-only"
    >{expanded ? "Hide" : "Show more"} info for {data.name}</span
  ></button
>

<style lang="postcss">
  [aria-expanded="true"] > svg {
    transform: rotate(45deg);
  }
</style>
