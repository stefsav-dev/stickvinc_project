import MahasiswaLayout from "./utility/MahasiswaLayout";

export default function MahasiswaPage() {
    return (
        <>
            <MahasiswaLayout>
                <h1 className="text-2xl font-bold">Halaman Mahasiswa</h1>
                <p className="mt-2 text-muted-foreground">
                    Selamat datang di dashboard mahasiswa 🚀
                </p>
            </MahasiswaLayout>
        </>
    )
}