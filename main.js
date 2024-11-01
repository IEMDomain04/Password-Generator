const app = document.getElementById('passGenerator-app')

const htmlTag = `
    <main id="container">

            <section id="header-container">
                <h1>Generate a<br><span style="color: #55F991;"> random password</span></h1>
                <h2>Never use an insecure password again.</h2>
            </section>

            <section id="inputs-wrapper">
                <button id="generate-btn" onclick="checkLength2()">Generate passwords</button>
                <input type="number" placeholder="Enter character length" id="char-length">
                <button id="char-length-btn" onclick="checkLength()">Enter character length</button>
            </section>
            
            <hr>
            <p style="color: white;">You can press the passwords to copy!</p>
            <section id="output-container">
                <h3 class="passwords" id="password1" onclick="copyPassword1()"></h3>
                <h3 class="passwords" id="password2" onclick="copyPassword2()"></h3>
            </section>
    
        </main>
`

app.innerHTML = htmlTag;