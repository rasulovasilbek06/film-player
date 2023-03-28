const form = document.querySelector("form")
const input = document.querySelector("input")
const btn = document.querySelector("#btn")

const title = document.querySelector("h1")
const yili = document.querySelector(".yili")
const davlati = document.querySelector(".davlat")
const janr = document.querySelector(".janr")
const vaqti = document.querySelector(".vaqti")
const rejisor = document.querySelector(".rejisor")
const yozuvchi = document.querySelector(".yozuvchi")
const tili = document.querySelector(".tili")
const malumot = document.querySelector(".qisqacha")
const img = document.querySelector("img")
const reyting = document.querySelector(".imdb")

form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    async function getApi(domain) {
        const res = await fetch(
            `https://www.omdbapi.com/?apiKey=f88ba9a5&t=${domain}`)
            const data = await res.json()
            console.log(data);
                title.textContent = data.Title
                yili.textContent = data.Year
                davlati.textContent = data.Country
                janr.textContent = data.Genre
                vaqti.textContent = data.Runtime
                rejisor.textContent = data.Director
                yozuvchi.textContent = data.Writer
                tili.textContent = data.Language
                malumot.textContent = data.Plot
                reyting.textContent = data.imdbRating
                const newSrc = data.Poster
                img.src = `${newSrc}`
        }
        getApi(input.value)
        input.value = ""
})
