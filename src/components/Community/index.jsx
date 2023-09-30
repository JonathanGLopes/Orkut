import Card from "../Card";
import CommunityPage from "../CommunityPage";
import "./community.css";

const pageObj = [
  {
    name: "Carros",
    img: "/src/img/comunidade/car.png",
  },
  {
    name: "Desenhos",
    img: "/src/img/comunidade/cartoon.png",
  },
  {
    name: "Crazy",
    img: "/src/img/comunidade/coffee.png",
  },
  {
    name: "Fofos",
    img: "/src/img/comunidade/sweet.png",
  },
  {
    name: "Animes",
    img: "/src/img/comunidade/anime.png",
  },
  {
    name: "Leitura",
    img: "/src/img/comunidade/reading.png",
  },
  {
    name: "Meu ovo",
    img: "/src/img/comunidade/eggs.png",
  },
  {
    name: "My Books",
    img: "/src/img/comunidade/books.png",
  },
  {
    name: "Cafeee",
    img: "/src/img/comunidade/coffee.png",
  },
];

export default function Community() {
  return (
    <Card className="community">
      <div className="community-number">
        <span className="community-amount">Comunidade (42)</span>
        <span className="community-all">Ver todos</span>
      </div>
      <section className="community-list">
        {pageObj.map((page) => (
          <CommunityPage pageObj={page} key={page.name} />
        ))}
      </section>
    </Card>
  );
}
