import generateJoke from './generateJoke'
import './scss/main.scss'
import laughFace from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughFace

generateJoke()

const jokeButton = document.getElementById('joke-btn')
jokeButton.addEventListener('click', generateJoke)