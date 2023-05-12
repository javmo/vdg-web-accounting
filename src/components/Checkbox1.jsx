import { useState } from 'react';
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';
import './Checkbox1.css';

const Checkbox1 =() => {
    return  <div className='div-checkbox1'>
                <Checkbox className='div-checkbox1-check'>Pasivos</Checkbox>
                <Checkbox className='div-checkbox1-check'>Activos</Checkbox>
                <Checkbox className='div-checkbox1-check'>Resultado</Checkbox>
            </div>
        
}

export default Checkbox1;