import {useRouter} from "next/router"

export default function LinkInputComponent() {
  const router = useRouter()
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      siteurl: event.target.siteurl.value,
    }

     // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/forms'

    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    //const result = await response.json()
    router.push('./text');
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <label for="">URL:</label>
        <input type="text" id="siteurl" name="siteurl" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
