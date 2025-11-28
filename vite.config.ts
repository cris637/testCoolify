 import { defineConfig } from 'vite'
         import react from '@vitejs/plugin-react'
    
         // https://vitejs.dev/config/
        export default defineConfig({
          plugins: [react()],
          server: { // Esto es para el `vite dev`, puedes mantenerlo o quitarlo si no lo usas
            host: true
          },
          preview: { // Esta es la sección que estamos usando con `vite preview`
            host: true, // Importante para que escuche en 0.0.0.0
            port: 3000, // Asegúrate de que este puerto coincide con Coolify
            allowedHosts: [
              'racemic-porsha-changefully.ngrok-free.dev', // ¡Añade tu URL de ngrok actual aquí!
           // Si tu URL de ngrok cambia, tendrás que actualizarla aquí o añadir la nueva
           ]
          }
       })