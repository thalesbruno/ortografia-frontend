import React from 'react'
import api from '../services/api'

class Main extends React.Component {
    state = {
        questoes: []
    }

    componentDidMount() {
        this.listQuestoes()
    }

    listQuestoes = async () => {
        const response = await api.get('/questoes/')
        this.setState({ questoes: response.data })
    }

    render() {
        const { questoes } = this.state
        return (
            <div className="App-main">
                {questoes.map( questao => (
                    questao.palavras.map( palavra => (
                        <p key={palavra.id}>{palavra.nome}</p>
                    ) )
                ))}
            </div>
        )
    }
}

export default Main