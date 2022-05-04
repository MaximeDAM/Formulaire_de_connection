module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "", email: "", password: "" }

    if (err.message.includes("pseudo"))
        errors.pseudo = "Pseudo incorrect ou déjà pris"

    if (err.message.includes("email"))
        errors.email = "Email incorrect"

    if (err.message.includes("password"))
        errors.password = "Le mot de passe doit faire au minimum 6 caractère";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
        errors.pseudo = "Cet Pseudo est déjà enregistré"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.email = "Cet email est déjà enregistré"

    return errors;
}

module.exports.signInErrors = (err) => {
    let errors = { email: "", password: "" }

    if (err == "incorrect email")
    errors.email = "Email inconnu"

    if (err == "incorrect password")
       errors.password = "Le mot de passe ne correspond pas";

    return errors
}