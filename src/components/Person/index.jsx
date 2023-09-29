export default function Person({ friendObj }) {
  return (
    <div className="friends-list_card">
      <img src={friendObj.img} className="friends-list_img" alt="" />
      <span className="friends-list_name">{friendObj.name}</span>
    </div>
  );
}
