
// Function to generate current date and time
function getCurrentDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timezoneOffset = date.getTimezoneOffset() / -60;
  const timezoneSign = timezoneOffset >= 0 ? "+" : "-";
  const timezoneHour = Math.abs(Math.floor(timezoneOffset));
  const timezoneMinute = Math.abs((timezoneOffset % 1) * 60);
  const timezone = `UTC${timezoneSign}${padZero(timezoneHour)}:${padZero(
    timezoneMinute
  )}`;
  const dateTime = `${padZero(day)}-${month}-${year} ${padZero(
    hours
  )}:${padZero(minutes)} ${timezone}`;
  return dateTime;
}

// Function to pad zero for single digit numbers
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
// Function to generate random ID
function generateRandomId() {
  let randomId = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 8;
  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomId;
}

// Function to submit entertaiment form
function submitEntertaimentForm() {
  const dateTime = getCurrentDateTime();
  const name = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="name"]').value;
  const name2 = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="name2"]').value;
  const email = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="email"]').value;
  const username = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="username"]').value;
  const password = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="password"]').value;
  const item = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="item"]').value;
    
  const harga_seller = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="harga_seller"]').value;
  const harga_simlic = document
    .getElementById("entertaiment-form")
    .querySelector('input[name="harga_simlic"]').value;

  const randomId = generateRandomId();
  const message = `
     
    **ENTERTAIMENT PRODUK**\n **ORDER ID:** \`#order-${randomId}\`
 
\`\`\`
Nama Pembeli    : ${name}
Nama Penjual    : ${name2}
Email           : ${email}
Username        : ${username}
Password        : ${password}
Item            : ${item}
Harga Seller    : Rp. ${harga_seller}
Harga Simlic    : Rp. ${harga_simlic}

\`\`\`
Log Created ${dateTime}
`;

  // Send message to Discord webhook
  const webhookUrl =
    "https://discord.com/api/webhooks/"; //discord webhook link
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });

  // Print message
  alert(message);
}

// Function to submit digital product form
function submitDigitalProductForm() {
  const dateTime = getCurrentDateTime();
  const name = document
    .getElementById("digital-product-form")
    .querySelector('input[name="name"]').value;
  const email = document
    .getElementById("digital-product-form")
    .querySelector('input[name="email"]').value;
  const item = document
    .getElementById("digital-product-form")
    .querySelector('input[name="item"]').value;
  const licenseKey = document
    .getElementById("digital-product-form")
    .querySelector('input[name="license-key"]').value;
  const harga = document
    .getElementById("digital-product-form")
    .querySelector('input[name="harga"]').value;

  const randomId = generateRandomId();
  //const message = `INVOICE PENJUALAN simlic-${randomId}\nNama Pembeli: ${name}\nEmail: ${email}\nItem: ${item}\nLicense Key: ${licenseKey}\nHarga: ${harga}`;
  const message = `
   
  **DIGITAL PRODUK**\n **ORDER ID:** \`#order-${randomId}\`
 
\`\`\`
Nama Pembeli    : ${name}
Email           : ${email}
License Key     : ${licenseKey}
Item            : ${item}
Harga           : Rp. ${harga}
\`\`\`
Log Created ${dateTime}
`;

  // Send message to Discord webhook
  const webhookUrl =
  "https://discord.com/api/webhooks/"; //discord webhook link
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });

  // Print message
  alert(message);
}

// Function to show entertaiment form and hide digital product form
function showEntertaimentForm() {
  document.getElementById("entertaiment-form").style.display = "block";
  document.getElementById("digital-product-form").style.display = "none";
}

// Function to show digital product form and hide entertaiment form
function showDigitalProductForm() {
  document.getElementById("digital-product-form").style.display = "block";
  document.getElementById("entertaiment-form").style.display = "none";
}
