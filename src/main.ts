import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/global.css'
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import {createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persist'


const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App)
.use(router)
.use(pinia)
.use(VueAxios, axios)
.mount('#app')


/*
TODO: style and position the elements on each page
TODO: add a timeout for sending messages to me


for reviewing concepts:
https://github.com/Code-Pop/Intro-to-Vue-3


lessons:
Lesson 3 - Attribute Binding
Lesson 4 - Conditional Rendering
Lesson 5 - List Rendering
Lesson 6 - Event Handling
Lesson 7 - Class & Style Binding
Lesson 8 - Computed Properties
Lesson 9 - Components & Props
Lesson 10 - Communicating Events
Lesson 11 - Forms & v-model


circular images:
https://www.youtube.com/watch?v=dF92Ef1eS80
https://stackoverflow.com/questions/46769495/unable-to-remove-the-empty-spaces-around-image-after-using-clip-path

horizontally align divs:
https://stackoverflow.com/questions/9277311/how-can-i-horizontally-align-my-divs
https://www.youtube.com/watch?v=dNYCrO8w4kg

set image to size of div:
https://stackoverflow.com/questions/19192892/css-how-can-i-set-image-size-relative-to-parent-height

https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/

https://www.youtube.com/watch?v=bMZ1WQg_UFM

webdev simplified css positioning:
https://www.youtube.com/watch?v=jx5jmI0UlXU&t=410s

CSS Crash Course For Absolute Beginners:
https://www.youtube.com/watch?v=yfoY53QXEnI

Learn CSS Pseudo Elements In 8 Minutes:
https://www.youtube.com/watch?v=OtBpgtqrjyo

vue router code example:
https://codepen.io/patrickodacre/pen/jwXJOE

get component name
https://forum.vuejs.org/t/how-to-get-component-name/6112/3

bootstrap 5:
https://getbootstrap.com/docs/5.2/getting-started/introduction/#quick-start
https://www.youtube.com/watch?v=oZ9zlS5V5WU&t=93s

dotenv in vuejs
https://stackoverflow.com/questions/50715302/how-to-use-dotenv-with-vue-js

https://getbootstrap.com/docs/4.3/utilities/borders/

https://stackoverflow.com/questions/9808253/how-to-set-shadow-for-round-imagecss

https://mdbootstrap.com/docs/standard/navigation/footer/

https://www.w3schools.com/bootstrap5/bootstrap_images.php

https://stackoverflow.com/questions/10099422/flushing-footer-to-bottom-of-the-page-twitter-bootstrap#:~:text=Keep%20the%20footer%20at%20the%20bottom%20by%20using%20Bootstrap%205&text=Make%20sure%20that%20you%20are,element%20to%20wrap%20the%20footer.

https://getbootstrap.com/docs/5.0/utilities/text/#text-wrapping-and-overflow

https://codepen.io/rasaf-ibrahim/pen/gOmzPZe
*/
