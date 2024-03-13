const btn = document.getElementById("btn");
const text = document.getElementById("text");

async function fetchData() {
  try {
    const apiKey = "8kL8h5RVmssu7njdhYxNLQ==u9VfZtPTA4FYJ9wP"; // Replace 'YOUR_API_KEY' with your actual API key
    const requestOptions = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    let response = await fetch(
      "https://api.api-ninjas.com/v1/dadjokes",
      requestOptions
    );
    let data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      setTimeout(() => {
        const joke = data[0].joke;
        text.innerText = joke;
      }, 1000);
      text.innerText = "Upadating....";
    } else {
      console.log("No jokes found in response");
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}

btn.addEventListener("click", fetchData);
