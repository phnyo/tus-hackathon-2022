import styles from './mark.module.css'

export default function TextComponent({text}) {
<<<<<<< HEAD
  if (!text || text.length === 0 || text === []) {
    return <div><p> 何も入力されていません。</p></div>
  }

  const item = text.map(function(value, index) {
    if (index % 2 === 1) {
      return <mark className={styles.mark} key={index}> {value} </mark>
    } else {
      return <span key={index}> {value} </span>
=======
  if (text.length === 0 || text === []){
    return <div><p> 何も入力されていません。</p></div>
  }

  const item = text['text'].map(function(value, index) {
    if (index % 2 === 1) {
      return <mark> {value} </mark>
    } else {
      return <span> {value} </span>
>>>>>>> e155a4c (10:04)
    }
  })

  return (
    <div>
      <div>
        <p> {item} </p>
      </div>
    </div>
  )
}
