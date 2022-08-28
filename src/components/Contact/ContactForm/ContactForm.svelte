<script>
  import TextArea from "./TextArea.svelte";
  import TextInput from "./TextInput.svelte";
</script>

<form class="flex flex-col gap-6">
  <TextInput
    name="name"
    label="Name"
    type="text"
    placeholder="Name"
    required={true}
  />
  <TextInput
    name="email"
    label="Email Address"
    type="email"
    placeholder="Email Address"
    required={true}
  />
  <TextInput
    name="company-name"
    label="Company Name"
    type="text"
    placeholder="Company Name"
  />
  <TextInput
    name="title"
    label="Title"
    type="text"
    placeholder="Title"
    required={true}
  />
  <TextArea
    name="message"
    label="Message"
    placeholder="Message"
    required={true}
  />
  <button
    class="button submit text-18p leading-28/18 px-[1.875rem] self-start"
    formaction="/contact">submit</button
  >
</form>
