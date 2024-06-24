import imageAdmin2 from "../../../assets/logo/admin2.svg";

function Header() {
  return (
    <>
      <section className="pt-20">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Selamat Datang, Semoga Harimu Menyenangkan!
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Kelola data dan aktivitas bisnis Anda dengan mudah dan efisien
            </p>
            <p className="mt-4 text-gray-600">
              Akses cepat ke semua informasi penting dan alat pengelolaan
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={imageAdmin2} alt="Dashboard Admin" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
