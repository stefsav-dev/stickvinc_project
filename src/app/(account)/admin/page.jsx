import AdminLayout from "./utility/AdminLayout";

export default function AdminPage() {
    return(
        <>
            <AdminLayout>
                <h1 className="text-2xl font-bold">Halaman Admin</h1>
                <p className="mt-2 text-muted-foreground">
                    Selamat datang di dashboard admin 🚀
                </p>
            </AdminLayout>
        </>
    )
}