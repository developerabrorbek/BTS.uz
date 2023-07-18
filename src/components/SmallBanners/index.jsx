
const SmallBanners = () => {
  return (
    <>
      <section className="small-banners">
        <div className="banner">
          <div className="container mx-auto  py-4 px-6 max-w-[1340px] pr-0">
            <ul className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:justify-between items-center">
              <li className="card1">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="https:picsum.photos/id/61/400/200"
                    alt="xizmat reklama banneri"
                  />
                </a>
              </li>
              <li className="card2">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="https:picsum.photos/id/71/400/200"
                    alt="xizmat reklama banneri"
                  />
                </a>
              </li>
              <li className="card3">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="https:picsum.photos/id/81/400/200"
                    alt="xizmat reklama banneri"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmallBanners;