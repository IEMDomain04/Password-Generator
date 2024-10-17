const app = document.getElementById('passGenerator-app')

const htmlTag = `
    <div id="container">

        <div id="header-container">
            <h1>Generate a<br><span style="color: #55F991;"> random password</span></h1>
            <h2>Never use an insecure password again.</h2>
            <button id="generate-btn" onclick="generatePassword()">Generate passwords</button>
        </div>
        
        <hr>

        <div id="output-container">
            <h3 class="passwords" id="password1" onclick="copyPassword1()"></h3>
            <h3 class="passwords" id="password2" onclick="copyPassword2()"></h3>
        </div>

    </div>
`

app.innerHTML = htmlTag