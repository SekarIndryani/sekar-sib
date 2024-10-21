import foto from "../foto.jpeg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
          <h2 className="text-3xl">Sekar Indryani</h2>
          <Profile />
          <p>
          Saya merupakan mahasiswa semester 5 yang sedang menempuh pendididkan di universitas ma'soem,
          kini saya melanjutkan kuliah dengan mengambil program S1 sistem informasi.
            </p>    
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Sekar Indryani Profile" className="fotoku" />;
}
