import Link from 'next/link.js'
import {useRouter} from 'next/router';
import TextComponent from '../components/text';
import highlightFetcher from './api/highlight';
import Header from '../components/header';

export default function Text(props) {
  
  const router = useRouter()
  
  return (
    <div class="text-xl py-8 xl:px-56 lg:px-40 md:px-32 sm:px-4 flex">
      <div class="w-1/5">
      </div>
      <div class="w-3/5 text-xl">
        <Header />
        <TextComponent text={JSON.stringify(props)}/>
        <Link href="/"> 戻る </Link>
      </div>
      <div class="w-1/5">
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  const res = highlightFetcher(context.query.text)
  return {
    props: res
  }
}
