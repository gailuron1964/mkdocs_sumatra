const kadabraHtml = {
  "CountUnique(user by ip)": `<iframe style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;" src="https://www.app.kadabra.dev/r/5c30gm06bk9xh5r2/embed?view=preview&showopensandbox=1&enablehorizontalscrolling=0&pathname=%2F&search=" frameborder="0" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"></iframe>`,
  "Count(user by ip where ip.Contains('1'))": `<iframe style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;" src="https://www.app.kadabra.dev/r/5c30gm06bk9xh5r2/embed?view=preview&showopensandbox=1&enablehorizontalscrolling=0&pathname=%2F&search=%3Fscowl%3DCount(user%2520by%2520ip%2520where%2520ip.Contains(%25271%2527))" frameborder="0" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"></iframe>`,
}

for (const button of document.querySelectorAll(".btn-sandbox")) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const container = button.closest(".scowl-container");
    container.innerHTML = kadabraHtml[button.dataset.scowlQuery];
  });
}
