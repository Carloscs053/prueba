
function calcularPrecio(form) {
                let precio = 0;
                if (!form.Iva[0].checked && !form.Iva[1].checked) {
                    alert("Seleccione una opción");
                } else {
                    if (document.getElementById("auriculares").checked) precio += parseFloat(document.getElementById("auriculares").value);
                    if (document.getElementById("teclado").checked) precio += parseFloat(document.getElementById("teclado").value);
                    if (document.getElementById("webcam").checked) precio += parseFloat(document.getElementById("webcam").value);
                    if (document.getElementById("lampara").checked) precio += parseFloat(document.getElementById("lampara").value);
                    if (document.getElementById("pulsera").checked) precio += parseFloat(document.getElementById("pulsera").value);
                    if (document.getElementById("disco").checked) precio += parseFloat(document.getElementById("disco").value);
                    if (document.getElementById("router").checked) precio += parseFloat(document.getElementById("router").value);
                    if (document.getElementById("vr").checked) precio += parseFloat(document.getElementById("vr").value);
                    if (document.getElementById("cargador").checked) precio += parseFloat(document.getElementById("cargador").value);
                    if (form.Iva[0].checked) form.mostrarPrecio.value = precio;
                    else {
                        form.mostrarPrecio.value = (precio * 1.21);
                        console.log(form.mostrarPrecio)
                    }
                }
            }