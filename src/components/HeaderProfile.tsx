
export default function HeaderProfile() {
  return (
     <div className="grid grid-cols-2 gap-8">
        <aside className="flex flex-col justify-center">
            <span className="text-3xl">&#128075;</span>
            <h1 className="text-5xl font-bold">Hello, I am Vance Banks</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum cupiditate tempore unde soluta aliquid nemo? A, error! Illum blanditiis sint id obcaecati, nostrum quod dolorem alias possimus mollitia quae.</p>
        </aside>
        <section>
            <img src="https://londonimageinstitute.com/wp-content/uploads/2020/08/What-is-Personal-Image-Consulting.jpg" alt="image" className="w-[360] h-96 rounded-lg"/>
        </section>
     </div>
  )
}
