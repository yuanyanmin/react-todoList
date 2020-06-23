import React from 'react'
import ReactDOM from 'react-dom'

import App from './app/component/App'

let data = [
    {id: 0, text: '天气不错哦', complete: false},
    {id: 1, text: '天气非常好哦', complete: true},
    {id: 2, text: '端午节我想吃粽子', complete: false}
]

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('app')
)