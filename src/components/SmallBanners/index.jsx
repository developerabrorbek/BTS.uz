const SmallBanners = () => {
  return (
    <>
      <section className="small-banners">
        <div className="banner">
          <div className="container mx-auto py-4 px-6 max-w-[1340px]">
            <ul className="cards grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 lg:justify-between items-center">
              <li className="card1  w-full md:w-auto">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="https:picsum.photos/id/61/400/200"
                    alt="xizmat reklama banneri"
                  />
                </a>
              </li>
              <li className="card2  w-full md:w-auto">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="https:picsum.photos/id/71/400/200"
                    alt="xizmat reklama banneri"
                  />
                </a>
              </li>
              <li className="card3 w-full md:w-auto">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="https:picsum.photos/id/111/400/200"
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
