export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl sm:text-3xl mb-8">Riwayat Pendidikan</h2>
        <RorRiwayat jenjang="SD" sekolah="SDN Cikidang 2" tahun="2010" />
        <RorRiwayat jenjang="SLTP" sekolah="SMPN 1 Bantarujeg" tahun="2016" />
        <RorRiwayat jenjang="SMA" sekolah="SMAN 1 Bantarujeg" tahun="2019" />
        <RorRiwayat jenjang="Universitas" sekolah="Ma'soem University" tahun="2022" />
      </div> 
    )
}

interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
  }

  function RorRiwayat(props: RowRiwayatProps) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-1">
      <div className="col-span-12 md:col-span-4"> {props.jenjang}</div>
      <div className="col-span-12 md:col-span-4"> {props.sekolah}</div>
      <div className="col-span-12 md:col-span-4"> {props.tahun}</div>
      </div>
      </div>
      </div>
    );
  }