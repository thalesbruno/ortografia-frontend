import React from 'react'
import api from '../services/api'
import './Main.css'


class Main extends React.Component {
    state = {
        question: [],
        value: '',
    }

    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    componentDidMount() {
        this.showQuestion()
    }

    showQuestion = async () => {
        let questions_list = []
        const response1 = await api.get('/questoes/')
        response1.data.map( question => questions_list.push(question.id) )

        let random_id = questions_list[Math.floor(Math.random() * questions_list.length)]

        const response2 = await api.get(`/questoes/${random_id}/`)
        this.setState({ question: response2.data.palavras })
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert(this.state.value)
    }

    render() {
        const { question } = this.state
        // console.log(this.state)


        return (
            <div className="question-body">
                <form onSubmit={this.handleSubmit}>
                    {question.map( palavra => (
                        <p key={palavra.id}><label>
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