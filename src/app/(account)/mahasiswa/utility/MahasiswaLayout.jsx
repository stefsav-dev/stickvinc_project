import SidebarMahasiswa from "./SidebarMahasiswa";

export default function MahasiswaLayout({children}) {
      return (
            <div className="flex">
                <SidebarMahasiswa/>
    
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        )
}