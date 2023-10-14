'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthForm() {
    const supabase = createClientComponentClient()

    return (
        <Auth        
            supabaseClient={supabase}
            view="sign_in"
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            showLinks={true}
            providers={['google']}
            redirectTo="http://localhost:3000/auth/callback"
            localization={{
                variables: {
                    sign_up: {
                        email_label: "Correo Electrónico",
                        password_label: "Contraseña",
                        email_input_placeholder: "Correo Electrónico",
                        password_input_placeholder: "Contraseña",
                        button_label: "Registrarse",
                        loading_button_label: "Registrarse ...",
                        social_provider_text: "Iniciar con {{provider}}",
                        link_text: "¿No tiene una cuenta? Regístrese",
                        confirmation_text: "Consulta tu correo electrónico para ver el enlace de confirmación"
                    },
                    sign_in: {
                        email_label: "Correo Electrónico",
                        password_label: "Contraseña",
                        email_input_placeholder: "Correo Electrónico",
                        password_input_placeholder: "Contraseña",
                        button_label: "Iniciar Sesión",
                        loading_button_label: "Iniciar Sesión ...",
                        social_provider_text: "Iniciar con {{provider}}",
                        link_text: "¿Ya tiene una cuenta? Iniciar sesión"
                    },
                    forgotten_password: {
                        email_label: "Correo Electrónico",
                        password_label: "Contraseña",
                        email_input_placeholder: "Correo Electrónico",
                        button_label: "Enviar instrucciones para restablecer la contraseña",
                        loading_button_label: "Envío de instrucciones de reinicio ...",
                        link_text: "¿Ha olvidado su contraseña?",
                        confirmation_text: "Consulta tu correo electrónico para ver el enlace de restablecimiento de contraseña"
                    }
                },
            }}
        />
    )
}