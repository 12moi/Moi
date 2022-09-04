
import './index.scss'

const AnimatedLetters = ({LetterClass, strArray, idx}) =>{
  return(
    <span>
        {
            strArray.map((char, i)=>(
                <span key={char +i} className={`${LetterClass}_${i + idx}`}>
                 {char}
                </span>
            ))
        }
    </span>
  )
} ;

export default AnimatedLetters