import App from './App.css'
import React from 'react'



import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/direta/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega'



export default (props) =>(
    <div className="App">
        <div>
            <h1> Fundamentos React</h1>
        </div>


        <div className="Cards">
            <Card titulo="#01 - Primeiro componente" color="#FFFDE7">
                <Primeiro />
            </Card>

            <Card titulo="#02 - Componente com parametros" color="#FFF9C4">  
                <ComParametro titulo="Aqui usamos Parametros"
                subtitulo="No parametro usamos o Props. "/> 
            </Card>

            <Card titulo="#03 - Componente com Filhos" color="#FFF59D">  
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#04 - Repetição" color="#FFF176">
                <Repeticao />
            </Card>

            <Card titulo="#05 - Condicionais" color="#FFEE58">
                <Condicional numero={15}/>
            </Card>

            <Card titulo="#06 - Condicionais Com IF" color="#FFEB3B">
                <CondicionalComIf numero={18}/>
            </Card>

            <Card titulo="#07 - Comunicação Direta" color="#FDD835">
                <Pai />
            </Card>

            <Card titulo="#08 - Comunicação Indireta" color="#FBC02D">
                <Super />
            </Card>

            <Card titulo="#09 - Input - Controle component" color="#F9A825">
                <Input />
            </Card>

            <Card titulo="#10 - Contador" color="#F57F17">
                <Contador passo={10} valor={100}/>
            </Card>

            <Card titulo="#11 - Mega" color="#FF6F00">
                <Mega qtdeNumero={8}/>
            </Card>
        </div>
    </div>
)