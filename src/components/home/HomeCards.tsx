import Card from '../card/Card';

interface HomeCardsProp {
    title?: string;
    description?: string;
    button?: string;
}

function HomeCards({
  title = "Developers", 
  description = "Browse our jobs and start today", 
  button = "Browse Jobs"
}: HomeCardsProp) {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card >
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-2 mb-4">{description}</p>
              <a
                href="/jobs.html"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >{button}</a>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards