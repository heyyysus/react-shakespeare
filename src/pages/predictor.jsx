import React from 'react';
import word_freq from '../word_freq.json';
import alph_order from '../alph_order.json';

const Predictor = () => {

    const findValueByPrefix = (object, prefix) => {
        for (var property in object) {
          if (object.hasOwnProperty(property) && 
             property.toString().startsWith(prefix)) {
             return object[property];
          }
        }
      }
    
    const textareaRef = React.useRef();
    
    const [ predictionsArray, setPredictionsArray ] = React.useState([]);

    const sortFun = (a, b) => {
        return (b.freq - a.freq);
    }

    const handleUpdate = (e) => {
        const word = textareaRef.current.value.split(" ").at(-1);
        if(word !== "" && word !== " "){
            const pos_words = alph_order.filter( item => item.toLowerCase().startsWith(word.toLowerCase()));
            const pos_words_freq = pos_words.map(word => {
                return ({
                    word: word,
                    freq: word_freq[word],
                });
            });
            pos_words_freq.sort(sortFun);
            setPredictionsArray( pos_words_freq.map( item => {
                return ( 
                    <div>
                        <h4><a className='ext-link' href={`https://www.oxfordlearnersdictionaries.com/us/definition/english/${item.word}`}>{ item.word }</a> - {item.freq}</h4>
                    </div>
                 );
            } ) );
        }
    }

    return (
        <div className='predictor'>
            <h2>Shakespeare Predictor</h2>
            <p>Type and see what you get! 🤟</p>
            <textarea onKeyUp={handleUpdate} ref={textareaRef}></textarea>
            <div className='predictions'>
                {predictionsArray.slice(0,10)}
            </div>
        </div>
    );
}

export default Predictor;