import Card from "../Card";
import Person from "../Person";
import "./friends.css";

const friendsData = [
  {
    name: "Fernando",
    img: "/src/img/amigos/Fernando.png",
  },
  {
    name: "Ana",
    img: "/src/img/amigos/Ana.png",
  },
  {
    name: "Carlos",
    img: "/src/img/amigos/Carlos.png",
  },
  {
    name: "Vitor",
    img: "/src/img/amigos/Vitor.png",
  },
  {
    name: "Matheus",
    img: "/src/img/amigos/Matheus.png",
  },
  {
    name: "Ramos",
    img: "/src/img/amigos/Ramos.png",
  },
  {
    name: "Eiji",
    img: "/src/img/amigos/Eiji.png",
  },
  {
    name: "Julia",
    img: "/src/img/amigos/Julia.png",
  },
  {
    name: "Carol",
    img: "/src/img/amigos/Carol.png",
  },
];

function Friends() {
  return (
    <Card className="friends">
      <div className="friends-number">
        <span className="friends-amount">Amigos (248)</span>
        <span className="friends-all">Ver todos</span>
      </div>
      <section className="friends-list">
        {friendsData.map((friend) => (
          <Person friendObj={friend} key={friend.name} />
        ))}
      </section>
    </Card>
  );
}

export default Friends;
