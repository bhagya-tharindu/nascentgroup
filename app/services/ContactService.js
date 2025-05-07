const saveFormInfo = async (data) => {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default { saveFormInfo };
