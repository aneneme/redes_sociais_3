async function quantidadedeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

}

    Const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]

