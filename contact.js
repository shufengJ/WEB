document.querySelector('#contact form button')
    .addEventListener('click', function (event) {
        event.preventDefault()

        let hasError = false

        let firstnameInput = document.getElementById('name')

        if(firstnameInput.value.length === 0) {
            hasError = true
        }
        else if(firstnameInput.value.match(/^[\S]{1,50}$/) == null) {
            hasError = true
        }

        let phoneInput = document.getElementById('phone')
        if(phoneInput.value.length === 0) {
            hasError = true
        }
        else if(phoneInput.value.match(/^\d{10}$/) == null) {
            hasError = true
        }

        let mailInput = document.getElementById('mail')
        if(mailInput.value.length === 0) {
            hasError = true
        }
        else if(mailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null) {
            hasError = true
        }

        let messageInput = document.getElementById('message')
        if(messageInput.value.length === 0) {
            hasError = true
        }

        if (hasError) {
            window.alert("erreur_de_formule")
        }
        if (!hasError) {
            window.alert(firstnameInput.value + phoneInput.value + mailInput.value + messageInput.value)
            document.querySelector('#contact form')
                .submit()
        }
    })
