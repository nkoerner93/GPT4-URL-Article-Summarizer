export default async function fetchDatabase(api, method, data) {
  try {
    let requestUrl = `${api}/summaries`;

    if (method === "GET" && data) {
      requestUrl += `?url=${data}`;
    }

    const response = await fetch(requestUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method === "POST" ? JSON.stringify(data) : null,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      const responseData = await response.json(); // Parse response body as JSON
      return responseData;
    }
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
}
