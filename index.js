function introduction(Aki, Samip){
    return (`Hi, my name is ${Aki}.`)
    return (`Hi, my name is ${Samip}.`)
}

function introductionWithLanguage(Aki, Ember, Samip, React){

    return (`Hi, my name is ${Aki} and I am learning to program in ${Ember}.`)
    return (`Hi, my name is ${Samip} and I am learning to program in ${React}.`)
}

function introductionWithLanguageOptional(Gracie, language = "JavaScript"){
    return (`Hi, my name is ${Gracie} and I am learning to program in ${language}.`)
}
