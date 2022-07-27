<script lang="ts">

</script>

<p> contact</p>
<!-- 
<script lang="ts">
  import emailjs from "@emailjs/browser";
  import Input from "./Input.svelte";

  import { form, field } from "svelte-forms";
  import { required } from "svelte-forms/validators";

  import { schema, validateValues } from "./schema";

  let errors = {};

  let values = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const validate = async () => {
    errors = await validateValues(values);
  };

  const handleSubmit = async () => {
    validate();
  };

  const handleFirstNameInput = (e) => {
    values.firstName = e.target.value;
  };

  const handleLastNameInput = (e) => {
    values.lastName = e.target.value;
  };

  const handleEmailInput = (e) => {
    values.email = e.target.value;
  };

  const name = field("name", "", [required()], {
    validateOnChange: true,
  });
  const email = field("email", "", [required()]);
  const myForm = form(name, email);

  console.log(process.env.VITE_USER_ID);
  console.log(process.env.VITE_TEMPLATE_ID);
  console.log(process.env.VITE_SERVICE_ID);
  // console.log(process.env.VITE_USER_ID);
  // console.log(process.env.VITE_TEMPLATE_ID);
  // console.log(process.env.VITE_SERVICE_ID);

  // env vars undefined, why
  const sendEmail = (e) => {
    e.preventDefault();
    alert("lksdjf");
    emailjs
      .sendForm(
        // process.env.SERVICE_ID,
        process.env.VITE_SERVICE_ID,
        // "service_7jrq2gv",
        // "template_owkbegn",
        process.env.VITE_TEMPLATE_ID,
        "#emailform",
        process.env.VITE_USER_ID
        // "user_syQnaJg1pFkIoDz5V3il4"
        // process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
</script>


<div style="width: 60%; margin: auto;">
  <form on:submit|preventDefault={sendEmail} id="emailform">
    <div>
      <input
        name="firstName"
        label="First Name"
        value={values.firstName}
        on:change={handleFirstNameInput}
        on:blur={validate}
      />
      {errors.firstName && "name req"}
    </div>
    <div>
      <input
        name="lastName"
        value={values.lastName}
        label="Last Name"
        on:change={handleLastNameInput}
        on:blur={validate}
      />
    </div>
    <div>
      <input
        name="email"
        type="email"
        label="Email"
        value={values.email}
        on:change={handleEmailInput}
        on:blur={validate}
      />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</div>

<style>
  div {
    margin-bottom: 20px;
  }
</style> -->
