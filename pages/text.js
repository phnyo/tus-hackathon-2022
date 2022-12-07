import Link from 'next/link.js'
import TextComponent from '../components/text';

export default function Text() {
  return (
    <div>
      <TextComponent text="lorem ipsum"/>
      <Link href="/"> Back home </Link>
    </div>
  );
}
