export default function () {
  const email = ref("");
  const isValid = ref(true);
  const loading = ref(false);

  function validate() {
    isValid.value = email.value.match(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
    return isValid.value;
  }

  const config = useRuntimeConfig();

  async function subscribe() {
    if (loading.value) return;

    if (!validate()) {
      return;
    }

    try {
      loading.value = true;
      await fetch(`${config.public.apiBase}/email-subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.value }),
      });

      email.value = "";
    } finally {
      isValid.value = true;
      loading.value = false;
    }
  }

  return {
    email,
    isValid,
    loading,
    subscribe,
  };
}
