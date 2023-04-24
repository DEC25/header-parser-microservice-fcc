const PROTOCOL = window.location.protocol;
const HOST = window.location.host;
const URL = `${PROTOCOL}//${HOST}`

let example1 = document.getElementById('example1');

example1.innerHTML += `<a href="${URL}/api/whoami">[host]/api/whoami</a>`;