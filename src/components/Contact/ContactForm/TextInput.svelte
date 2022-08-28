<script lang="ts">
  export let label: string;
  export let name: string;
  export let type: "text" | "email" = "text";
  export let required: boolean = false;
  export let placeholder: string = "";

  const id = name + "-" + Math.random().toString().slice(3);
  const errorsId = id + "-errors";

  let pattern: string;
  let title: string;
  if (type === "text") {
    title = "Please enter a value for " + name;
    pattern = ".+";
  } else {
    title = "Please enter a valid email address";
    pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,61}$";
  }

  let input: HTMLInputElement;
  let hasErrors = false;

  let errorMessage = "This field is required";

  function checkValidity() {
    hasErrors = !input.checkValidity();

    if (!hasErrors) return;
    if (input.required && input.value.length == 0) {
      errorMessage = "This field is required";
      return;
    }

    if (input.type == "email" && input.value.length > 0) {
      errorMessage = "Enter a valid email address";
      return;
    }
  }

  let debounceHandle: ReturnType<typeof setTimeout> | 0;
  function debouncedCheckValidity() {
    if (debounceHandle) {
      clearTimeout(debounceHandle);
      debounceHandle = 0;
    }

    if (input.checkValidity()) {
      hasErrors = false;
      return;
    }

    debounceHandle = setTimeout(checkValidity, 400);
  }
</script>

<div class="flex flex-col">
  <label class="sr-only" for={id}>{label}</label>
  <input
    bind:this={input}
    on:input={debouncedCheckValidity}
    on:blur={debouncedCheckValidity}
    {pattern}
    {title}
    aria-invalid={hasErrors}
    aria-describedby={hasErrors ? errorsId : null}
    class="bg-transparent placeholder:text-white/60 text-white aria-invalid:text-red-coral aria-invalid:placeholder:text-red-coral/60 hocus:text-white/100 focus-visible:outline-none pl-[0.875rem] pb-4 border-white/100 aria-invalid:border-red-coral hocus:border-blue-rapture border-b text-15p leading-25/15 -tracking-12"
    {name}
    {type}
    {id}
    {placeholder}
    {required}
  />
  <p
    id={errorsId}
    style:visibility={hasErrors ? "visible" : "collapse"}
    class="pl-[0.875rem] -mb-2 mt-2 text-10p font-bold italic text-red-coral"
  >
    {errorMessage}
  </p>
</div>
