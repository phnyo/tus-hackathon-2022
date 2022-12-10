export default async function highlightFetcher(text) {

  const res = await fetch(`https://language.googleapis.com/v1/documents:analyzeEntities?key=` + process.env.GCP_NLP_API_KEY, {
    method: 'post',
    body: JSON.stringify({
      "document": {
        "type": "PLAIN_TEXT",
        "language": "ja", 
        "content": text, 
      },
    }),
  })
  const data = await res.json()   
  return data
}
