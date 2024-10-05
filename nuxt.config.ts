// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Dinosaur Website',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore the fascinating world of dinosaurs, their history, evolution, and diverse species. Discover engaging facts, captivating images, and insights into the Mesozoic Era, where these incredible reptiles ruled the Earth.' },
        { hid: 'keywords', name: 'keywords', content: 'dinosaurs, Mesozoic Era, paleontology, dinosaur diversity, T. rex, Jurassic period, Cretaceous period, fossil discoveries, dinosaur adaptations, prehistoric reptiles' },
        { hid: 'author', name: 'author', content: '@gra-nolan-bar' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'og:title', property: 'og:title', content: 'Dinosaur Website by gra-nolan-bar' },
        { hid: 'og:description', property: 'og:description', content: 'Explore the fascinating world of dinosaurs! Discover their incredible diversity, from the mighty T. rex to the gentle Brachiosaurus, and learn about their adaptations, habitats, and the latest paleontological discoveries. Join us on a journey through the Mesozoic Era and uncover the mysteries of these prehistoric reptiles.' },
        { hid: 'og:image', property: 'og:image', content: '/images/pterodactyl.svg' }, 
        { hid: 'og:url', property: 'og:url', content: 'https://gra-nolan-bar-dinos.netlify.app' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
};
