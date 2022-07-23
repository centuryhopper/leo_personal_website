import { BlogCard   } from '../classes/classes'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(isLeapYear)

const languages = [
    'C# - I learned this language when I was learning to use the Unity Game engine to make video games. The language was easy to pick up because it was syntactically similar to Java, which I learned in high school and college.',
    'Python - This has become my favorite programming language. It reads like English and has many sweet syntactic sugars. I use it for leetcode, OpenCV, filehandling, and automating tasks via webscraping.',
    'JavaScript - I have learned this language through using Vue.js for frontend web applications and Node.js for building APIs for managing my own passwords, storing images in the cloud, and general storage purposes for any frontend applications I build. Although I do use TypeScript ("typed javascript") much more often because the type checking aspect of the language is very important for easing the process of scaling up projects.',
    'Dart - This is the language I use for flutter development. I love workflow and design of flutter for cross-platform mobile development. I have found this language very intuitive to learn because of its similarity to Java and JavaScript.',
    'C++ - This is the language that had the highest learning curve for me so far. Luckily the C knowledge I acquired from college helped a lot because of pointers and memory address concepts, which most other modern languages lacked. I use this language mainly at my research position for building OpenCV projects which requires low-level control and processing performance-heavy tasks.',
    'C, Java, Haskell, Erlang - These are mainly languages that I have used for university classes and have built me a solid foundation for learning other languages or frameworks in the software field.',
]

const techs = [
    'Vue.js - Fun fact: This website was built using this beautiful framework! I actually rebuilt my entire website from scratch using Vue.js because I wanted to explore a frontend framework that I personally enjoy using. The template style of coding and use of components really helped scale the projects I build.',
    'Node.js - The ability to use JavaScript on both the client and server-side is really a blessing to me and many other developers. I wanted to build a NoSQL database for myself so that I can store information up in the cloud and not take up my own computer storage. Also I can access the information I store in the cloud from any computer and that made developing front end applications easier.',
    'Unity - I have always been one of the biggest gamers I know before I got into coding in college and being able to build any game I want using a proprietary game engine such as this one is simply amazing. The most common scripting option for this engine is C# and it is a beautiful and easy-to-use language that is very similar to Java, which I learned in high school and college, so picking this language up was a piece of cake.',
    'Flutter - This is the framework I used to build mobile applications. What is special about this framework is that it is cross platform so you write the code once and the application will be deployable on both Android and iOS devices. There is a saying that time is money, and this framework really gets the job done when you need to quickly build a scalable app that is reliable.',
]

const pythonLibraries = [
    'OpenCV and DJI-TelloPy',
    'Python-Selenium & Python-Beautiful Soup - I used these libraries for all my webscraping projects. They are very powerful tools when you learn to use them properly and can help you quickly collect the data you need for testing out machine learning models',
    'Python-Pandas & Python Numpy',
    'Python-ScikitLearn',
    'Python-prophet'
]

const linuxTools = [
    'Endeavour OS - This is the linux distro I finally settled on after hopping around several other distros. It is arch-based, so it has pacman as the package manager, which is in my opinion, the most intuitive one out of all the other linux distros such as apt and dnf.',
    'Vim - This is my favorite text editor that can be used via the terminal and is very handy for making edits to files on my computer.',
    'KDE - This is the desktop environment that I use for my linux operating system. It is by far one of the most customizable desktop environments I have ever seen for all the linux distributions out there, which gives me plenty of room and freedom to customize my workspace however I choose.'
]

const blogCards = [
    new BlogCard('My New Site', dayjs('2022-04-22').format("YYYY-MM-DD"), dayjs('2022-04-22').format('MMMM DD, YYYY'), 'Hello there! Welcome to my website!','welcomeBlog'),

    // talk about experiences at lake cherokee in orlando fl
    new BlogCard('Independence Day Fireworks By the Lake', dayjs('2022-07-04').format("YYYY-MM-DD"), dayjs('2022-07-04').format('MMMM DD, YYYY'), 'Fireworks look even better by the lake!', 'fireworksBlog'),

    new BlogCard('My Linux-distro Hopping Journey And My Choice of Linux Distro', dayjs('2022-06-25').format("YYYY-MM-DD"), dayjs('2022-06-25').format('MMMM DD, YYYY'), 'Distro hopping was a time-consuming but rewarding experience!','linuxDistroTalk'),
]


export { languages, techs, blogCards, pythonLibraries, linuxTools, }

