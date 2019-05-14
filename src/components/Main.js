import React from 'react'
import api from '../services/api'
import './Main.css'

class Main extends React.Component {
    state = {
        question: [],
        value: ''
    }
    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    componentDidMount() {
        this.showQuestion()
    }

    showQuestion = async () => {
        const response = await api.get('/questoes/1/')
        this.setState({ question: response.data.palavras })
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert(this.state.value)
    }

    render() {
        const { question } = this.state

        return (
            <div className="question-body">
                <form onSubmit={this.handleSubmit}>
                    {question.map( palavra => (
                        <p><label key={palavra.id}>
                            <input type="radio" name="palavra" value={palavra.is_correct} onChange={this.handleChange}/>
                            {palavra.nome}
                        </label></p>
                    ))}
                    <input type="submit" value="Confirmar" />
                </form>
            </div>
        )
    }
}

export default Main