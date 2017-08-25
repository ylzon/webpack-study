import css from './style/style.css'
import Layer from './components/layer/layer.js'

const App = function(){
    var dom = document.getElementById("app");
    var layer = new Layer()

    dom.insertAdjacentHTML('beforeend', layer.tpl({
        name: "test demo",
        arr:['lise','asd','asdasdasdq']
    }))
}

new App