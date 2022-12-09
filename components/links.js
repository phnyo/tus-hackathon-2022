import {useRouter} from "next/router"

export default function LinkInputComponent() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    router.push({
      pathname: './text',
      query: {
        text: event.target.text.value,
      }},
      "text",
    );
  }

  return (
    <div>
      <div class="text-xl py-8 text-center align-middle">
        <form class="" onSubmit={handleSubmit} method="post">
          <textarea type="text" id="text" name="text" rows="8" cols="20" class="w-11/12 place-center border-2 whitespace-pre-wrap"placeholder="文章を入力してください" />
          <button class="py-5" type="submit">ハイライトする</button>
        </form>
      </div>
    </div>
  )
}
