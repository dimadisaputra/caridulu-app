const AboutLayouts = () => {
  return (
    <>
      <div className="flex items-center justify-around w-full p-8 md:flex-row flex-col">
        <div>
          <p className="text-2xl font-bold text-gray-500">
            Tentang <span className="text-green-500">Kami,</span>
          </p>
          <p className="text-6xl text-gray-500">
            Tentang <span className="text-green-500 font-bold">Caridulu!</span>
          </p>
          <p className="text-gray-400 text-justify mt-4 p-2">
            Caridulu adalah website pencari, yang mencari produk dari berbagai
            marketplace di Indonesia. Tujuan Caridulu adalah untuk membantu para
            pembeli yang hendak membeli produk secara online untuk dapat
            membandingkan produk tiap marketplace yang berbeda.Untuk sekarang
            terdapat tiga marketplace yang dapat di cari melalui Caridulu,
            yaitu: Shopee Indonesia, Tokopedia dan Lazada Indonesia.{" "}
          </p>
        </div>
        <div className="hidden md:block">
          <img src="/images/caridulu.png" alt="Logo Caridulu" />
        </div>
      </div>
    </>
  );
};

export default AboutLayouts;
