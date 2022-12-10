export default function TextComponent({text}) {
  if (text.length === 0 || text === []){
    return <div><p> 何も入力されていません。</p></div>
  }

  const item = text['text'].map(function(value, index) {
    if (index % 2 === 1) {
      return <mark key={index}> {value} </mark>
    } else {
      return <span key={index}> {value} </span>
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
