export default function CommunityPage({ pageObj }) {
  return (
    <div className="community-list_card">
      <img src={pageObj.img} alt="" className="community-list_img" />
      <span className="community-list_name">{pageObj.name}</span>
    </div>
  );
}
