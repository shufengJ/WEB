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


        if (!hasError) {
            var tb = document.getElementById('tb')
            var newtr = document.createElement('tr')
            tb.appendChild(newtr)
            var td1 = document.createElement('td')
            var td2 = document.createElement('td')
            var td3 = document.createElement('td')
            var td4 = document.createElement('td')
            td1.innerHTML = firstnameInput.value;
            td2.innerHTML = phoneInput.value;
            td3.innerHTML = mailInput.value;
            td4.innerHTML = messageInput.value + "<a href='javascript:;'>Supprimer</a>";
            newtr.appendChild(td1)
            newtr.appendChild(td2)
            newtr.appendChild(td3)
            newtr.appendChild(td4)
            document.getElementById("form").reset();
        }
        var as = document.querySelectorAll('a')
        for(var i = 0; i<as.length; i++) {
            as[i].onclick = function () {
                tb.removeChild(this.parentNode.parentNode)
            }
        }

        if (hasError) {
            window.alert("erreur_de_formule")
        }

        //if (!hasError) {
        //    document.querySelector('#contact form')
        //        .submit()
        //}
    })
