var email = document.getElementById('email');

            email.addEventListener('focus', ()=>{
                    email.style.borderColor = "rgba(63, 20, 77, 0.521)";
            });

            email.addEventListener('blur', ()=>{
                    email.style.borderColor = "#ccc";
            });

            var senha = document.getElementById('senha');

            senha.addEventListener('focus',()=>{
                    senha.style.borderColor = "rgba(63, 20, 77, 0.521)";
            });

            senha.addEventListener('blur',()=>{
                    senha.style.borderColor = "#ccc";
            });
