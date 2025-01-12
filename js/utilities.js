function checkresponse(response) {
  if (response.includes("http")) {
      return `
          <a href="${response}" target="_blank" style="color: blue; text-decoration: underline;">
              ${response}
          </a>
      `;
  }
  return `<span>${response}</span>`; // Envuelve el texto en un span para consistencia
}