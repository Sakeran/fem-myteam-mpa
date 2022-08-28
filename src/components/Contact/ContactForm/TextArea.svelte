<script lang="ts">
  export let label: string;
  export let name: string;
  export let required: boolean = false;
  export let placeholder: string = "";

  const id = name + "-" + Math.random().toString().slice(3);
  const errorsId = id + "-errors";

  let textArea: HTMLTextAreaElement;
  let hasErrors = false;
  
  let debounceHandle: ReturnType<typeof setTimeout> | 0;
  function debouncedCheckValidity() {
    if (debounceHandle) {
      clearTimeout(debounceHandle);
      debounceHandle = 0;
    }

    if (textArea.checkValidity()) {
      hasErrors = false;
      return;
    }

    debounceHandle = setTimeout(
      () => (hasErrors = !textArea.checkValidity()),
      400
    );
  }
</script>

<div class="flex flex-col">
  <label class="sr-only" for={id}>{label}</label>
  <textarea
    bind:this={textArea}
    on:input={debouncedCheckValidity}
    on:blur={debouncedCheckValidity}
    title={"Please enter a value for " + name}
    aria-invalid={hasErrors}
    aria-describedby={hasErrors ? errorsId : null}
    class="resize-none bg-transparent placeholder:text-white/60 text-white aria-invalid:text-red-coral aria-invalid:placeholder:text-red-coral/60 hocus:text-white/100 focus-visible:outline-none pl-[0.875rem] pb-4 border-white/100 aria-invalid:border-red-coral hocus:border-blue-rapture border-b text-15p leading-25/15 -tracking-12"
    {name}
    {id}
    {placeholder}
    {required}
  />
  <p
    id={errorsId}
    style:visibility={hasErrors ? "visible" : "collapse"}
    class="pl-[0.875rem] -mb-2 mt-2 text-15p text-red-coral"
  >
    Please enter a message
  </p>
</div>
