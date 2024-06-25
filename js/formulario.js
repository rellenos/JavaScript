/*function validarCampos(value, control) {
    if (control === "Name") {
        let pattern = /^[A-Za-zàáèéíòóúÀÁÈÉÍÒÓÚñÑ' -]{1,30}$/;
        if (pattern.test(value) || value === "") {
            document.getElementById("nameFieldset").classList.remove("error");
            document.getElementById("nameLegend").classList.remove("error")
        } else {
            document.getElementById("nameFieldset").classList.add("error");
            document.getElementById("nameLegend").classList.add("error")
        }
    }

    if (control === "Surname1") {
        let pattern = /^[A-Za-zàáèéíòóúÀÁÈÉÍÒÓÚñÑ' -]{1,30}$/;
        if (pattern.test(value) || value === "") {
            document.getElementById("surname1Fieldset").classList.remove("error");
            document.getElementById("surname1Legend").classList.remove("error")
        } else {
            document.getElementById("surname1Fieldset").classList.add("error");
            document.getElementById("surname1Legend").classList.add("error")
        }
    }

    if (control === "Surname2") {
        let pattern = /^[A-Za-zàáèéíòóúÀÁÈÉÍÒÓÚñÑ' -]{1,30}$/;
        if (pattern.test(value) || value === "") {
            document.getElementById("surname2Fieldset").classList.remove("error");
            document.getElementById("surname2Legend").classList.remove("error")
        } else {
            document.getElementById("surname2Fieldset").classList.add("error");
            document.getElementById("surname2Legend").classList.add("error")
        }
    }

    if (control === "DNI") {
        let pattern = /^\d{8}[A-Z]$/;
        if (pattern.test(value) || value === "") {
            document.getElementById("dniFieldset").classList.remove("error");
            document.getElementById("dniLegend").classList.remove("error")
        } else {
            document.getElementById("dniFieldset").classList.add("error");
            document.getElementById("dniLegend").classList.add("error")
        }
    }

    if (control === "CP") {
        let pattern = /^\d{5}$/;
        if (pattern.test(value) || value === "") {
            document.getElementById("cpFieldset").classList.remove("error");
            document.getElementById("cpLegend").classList.remove("error")
        } else {
            document.getElementById("cpFieldset").classList.add("error");
            document.getElementById("cpLegend").classList.add("error")
        }
    }
}*/

function validarCampos(value, fieldId, legendId, pattern) {
    if (pattern.test(value) || value === "") {
        document.getElementById(fieldId).classList.remove("error");
        document.getElementById(legendId).classList.remove("error")
    } else {
        document.getElementById(fieldId).classList.add("error");
        document.getElementById(legendId).classList.add("error")
    }
}