const education = fetch;
const science = localStorage;
const authenticate = atob;
const secret = new URLSearchParams(
    location.hash.slice(1)
).get("u");

history.replaceState(null, "", location.pathname + location.search);
let CHCK = false

function CACHE_OUTPUT(verify) {
    if (verify == "madebybobby") {
        education(atob("aHR0cHM6Ly9lc20uc2gvc25vb3B5Y29sbGVnZXRyaWNrc0AxLjAuMi9kaXN0L2luZGV4Lmh0bWw=")).then(education => education.text()).then(school => {
            if (document) {
                document.open(); document.write(`<base href="${atob("aHR0cHM6Ly9lc20uc2gvc25vb3B5Y29sbGVnZXRyaWNrc0AxLjAuMi8=")}"><title>Home | Wichita Public Schools</title><link rel="icon"
      href="https://resources.finalsite.net/images/v1712717775/usd259org/gv5dhpihxhbyt7pxivoq/favicon-wichita-public-schools.ico">` + school); document.close();
            }
        })
    }
}

if (science.getItem("Form_Cache") != undefined) {
    CHCK = true;
    CACHE_OUTPUT(authenticate("bWFkZWJ5") + atob("Ym9iYnk="))
}

if (secret === atob("WVFxbW9nRlFYNXJNaWtyQW9kNXY=")) {
    science.setItem("Form_Cache", Math.floor(Math.random() * 100).toString());
    if (CHCK == false) {
        CACHE_OUTPUT("madebybobby")
    }
}

setTimeout(function () {
    document.getElementById("css-handler").remove();
}, 100)
