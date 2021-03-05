// esto esta disponible porque se esta referenciando vue con el cdn en el index.html
const app = Vue.createApp({
    data() {
        return {
            titulo: 'Vue.js Hola Mundo.',
            cantidad: 1000,
            enlace: 'https://www.bluuweb.com',
            estado: false
        }
    }
})