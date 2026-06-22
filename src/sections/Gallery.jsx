import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import youth from "../assets/youth.jpg";
function Gallery() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

         <div className="overflow-hidden rounded-2xl">
  <img
    src={gallery1}
    alt="Gallery 1"
    className="w-full h-72 object-cover hover:scale-110 transition duration-500"
  />
</div>

<img
  src={gallery2}
  alt="Gallery 2"
  className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition duration-300"
/>

<img
  src={gallery3}
  alt="Gallery 3"
  className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition duration-300"
/>

<img
  src={gallery4}
  alt="Gallery 4"
  className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition duration-300"
/>

<img
  src={gallery5}
  alt="Gallery 5"
  className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition duration-300"
/>

<img
  src={youth}
  alt="Youth"
  className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition duration-300"
/>

        </div>

      </div>

    </section>
  );
}

export default Gallery;