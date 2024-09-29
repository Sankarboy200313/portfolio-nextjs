import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'about',
  description: 'contact me .',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Love is undefined</h1>
      <BlogPosts />
    </section>
  )
}
