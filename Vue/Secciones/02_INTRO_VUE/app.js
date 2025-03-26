
const { createApp, ref} = Vue;


const app = createApp({
    template: `
        <h1>{{ message }}</h1>
        <p>- {{ author }}</p>
    `,

    setup() {
        const message = ref("I'm Batman");
        // const author
        // Bruce Wayne

        const author = ref("Batman");

        setTimeout( () => {
            message.value = 'Hola, soy Goku';
            author.value = 'Goku';
            //console.log('Ejecutado');
        }, 3000)
        return {
            message,
            author,
        }
    }
});

app.mount('#myApp')
