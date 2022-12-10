import styles from './mark.module.css'

export default function TextComponent({text}) {
  if (!text || text.length === 0 || text === []) {
    return <div><p> 何も入力されていません。</p></div>
  }

  const item = text.map(function(value, index) {
    if (index % 2 === 1) {
      return <mark className={styles.mark} key={index}> {value} </mark>
    } else {
      return <span key={index}> {value} </span>
    }
  })

  return (
    <div class="border-4">
      <div class="p-4">
        <p> {item} </p>
      </div>
    </div>
  )
}
