const WORDS=["Snaptchap","Instagram"]

const api={
    word: {
        random :()=>
        new Promise (
            (resolve)=>setTimeout(()=>resolve ("Snaptchap"),1000)
        )
    }
}
export default api

