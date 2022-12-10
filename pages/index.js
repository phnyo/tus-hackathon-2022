import Link from 'next/link.js'
import Header from '../components/header.js'
import LinkInputComponent from '../components/links.js'

export default function Home() {
  return (
    <div class="text-xl py-8 xl:px-56 lg:px-40 md:px-32 sm:px-4 flex">
      <div class="md:w-1/5 sm:w-1/6">
      </div>
      <div class="md:w-3/5 sm:w-4/6">
        <Header />
        <div class="content-center">
          <LinkInputComponent />
          <p class="content-center mx-4 w-11/12 text-center text-md"> ノートプットは試験、資格の勉強を頑張る学生、社会人のための、アウトプットを重視した復習用のWEBサービスです。復習したい内容をテキストボックスに入力すると、重要語句が自動でハイライトされ、復習の効率を上げることができます</p>
        </div>
      </div>
      <div class="md:w-1/5 sm:w-1/6">
      </div>
    </div>
  )
}
