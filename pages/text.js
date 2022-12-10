import Link from 'next/link.js'
import {useRouter} from 'next/router';
import TextComponent from '../components/text';
import highlightFetcher from './api/highlight';
import Header from '../components/header';

export default function Text(props) {
  
  return (
    <div class="text-xl py-8 xl:px-56 lg:px-40 md:px-32 sm:px-4 flex">
      <div class="md:w-1/5 sm:w-1/6">
      </div>
      <div class="md:w-3/5 sm:w-4/6 text-xl">
        <Header />
        <TextComponent text={props}/>
        <div class="center py-5 flex">
          <Link href="/"> 戻る </Link>
        </div>
      </div>
      <div class="md:w-1/5 sm:w-1/6">
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  const res = await highlightFetcher(context.query.text)
  
  let words = []

  if (res['entities'] != undefined) {
    for (let i = 0; i < 8; i++) {
      const name = res['entities'][i]['name'];
      let prev_ind = -1;
      if (res['entities'][i]['mentions'].length !== 0) {
        for (let j = 0; j < res['entities'][i]['mentions'].length + 1; j++) {
          const ind = context.query.text.indexOf(name, prev_ind + 1);
          if (ind >= 0) {
            words.push([name, ind]);
          }
          prev_ind = ind;
        }
      } else {
        const ind = context.query.text.indexOf(name, prev_ind + 1);
        words.push([name, ind]);
      }
    }
  }
  
  words.sort((a, b) => a[1] -  b[1]);

  let text = []
  let ind = 0;
  
  for (let i = 0; i < words.length; i++) {
    const front = words[i][1]; 
    text.push(context.query.text.substring(ind, front));
    text.push(words[i][0]);
    ind = front + words[i][0].length;
  }
  if (context.query.text != undefined) {
    text.push(context.query.text.substring(ind, context.query.text.length))
  }

  console.log(words)

  return {
    props: {
      text: text,
      words: words,
    }
  }
}
