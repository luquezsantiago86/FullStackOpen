// https://www.websequencediagrams.com/cgi-bin/cdraw?lz=Cm5vdGUgb3ZlciBicm93c2VyOgp3cml0aW5nIHNvbWV0aGluZyBpbnRvIHRoZSB0ZXh0IGZpZWxkCmFuZCBjbGlja2luZwAXBXN1Ym1pdCBidXR0b24gCmVuZCBub3RlCgBRBy0-c2VydmVyOiBIVFRQIFBPU1QgaHR0cHM6Ly9zdHVkaWVzLmNzLmhlbHNpbmtpLmZpL2V4YW1wbGVhcHAvbmV3XwBJBQCBJgoASAcKVVJMIFJFRElSRUNUOgCBBAYAZAUgYXNrcwCBMQUAgVMHCnRvIGRvIGEgbmV3AIB_BkdFVCByZXF1ZXN0IACBWwdhZGRyZXNzCicvbm90ZScuAIE-CgCBOQYtPgCCIAgAgUIGAHIIAIEgLACBfBpHRQAZMHMAgRAIAIEMDU1MLWNvZAAgRm1haW4uY3MAVRQAEgkAH0lqAE4ZanMKAIUZFACFLwcgc3RhcnRzIGV4ZWN1AIU5BWpzAIF9BnRoYXQAg10IcyBKU09OIGRhdGEgZnJvbQCEIggAhSMKAIJTRWRhdGEuanNvbgCDCRNbeyBjb250ZW50OiAiSFRNTCBpcyBlYXN5IiwgZGF0ZTogIjIwMTktMDUtMjMiIH0sIC4uLl0AgV4dAIFuBmUAhWYGZXZlbnQgaGFuZGxlcgCBdQhuZGVycwCHCQVzIHRvIGRpc3BsYXkAhxoJ&s=default
// note over browser:
// writing something into the text field
// and clicking the submit button 
// end note
// browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
// note over server:
// URL REDIRECT: the server asks the browser
// to do a new HTTP GET request to the address
// '/note'.
// end note
// server->browser: HTTP REDIRECT https://studies.cs.helsinki.fi/exampleapp/note
// browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
// server-->browser: HTML-code
// browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
// server-->browser: main.css
// browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
// server-->browser: main.js

// note over browser:
// browser starts executing js-code
// that requests JSON data from server 
// end note

// browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
// server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

// note over browser:
// browser executes the event handler
// that renders notes to display
// end note