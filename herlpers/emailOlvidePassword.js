import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos;

  const info = await transporter.sendMail({
    from: "APV - Administrador de Pacientes de Veterinaria",
    to: email,
    subject: "Reestablece tu Paswword",
    text: 'Reestablece tu Paswword',
    html: `
      <p>Hola: ${nombre}, has solicitado reestablecer tu password.</p>
      <p>Sigue el siguiente enlace para generar tu nuevo password:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Reestablecer Password</a>
      </p>

      <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>
    `
  })

  console.log('mensaje enviado: %s', info.messageId)
}

export default emailOlvidePassword;