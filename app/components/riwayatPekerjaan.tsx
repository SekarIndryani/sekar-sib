export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl sm:text-3xl mb-8">Riwayat Pekerjaan</h2>
        <RorRiwayatPekerjaan tahunbekerja="2015" instansi="PT XYZ Digital" bekerjasebagai="Manager" />
        <RorRiwayatPekerjaan tahunbekerja="2017" instansi="ABC Tech Solution" bekerjasebagai="UI UX Design" />
        <RorRiwayatPekerjaan tahunbekerja="2019" instansi="Bank DEF" bekerjasebagai="teler" />
        <RorRiwayatPekerjaan tahunbekerja="2023" instansi="HNI" bekerjasebagai="Marketing" />
      </div>
    )
}

interface RowRiwayatKerjaProps {
    tahunbekerja: string;
    instansi: string;
    bekerjasebagai: string;
  }

  function RorRiwayatPekerjaan(props: RowRiwayatKerjaProps) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-1">
      <div className="col-span-12 md:col-span-4"> {props.tahunbekerja}</div>
      <div className="col-span-12 md:col-span-4"> {props.instansi}</div>
      <div className="col-span-12 md:col-span-4"> {props.bekerjasebagai}</div>
      </div>
      </div>
      </div>
    );

}