const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";


const getAuthHeaders = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem('token');
        return {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : `application/json`,
        };
    }
    return {};
};



export default function mahasiswaService() {
    
    getAllDataMahasiswa: async() => {
        const response = await fetch(`${API_URL}/admin/mahasiswa/get_all_data_mahasiswa`,
            {
                method: 'GET',
                headers: getAuthHeaders()
            });
            if (!response.ok) {
                throw new Error('Gagal mengambil data mahasiswa');
        }
        return response.json();
    }

    getMahasiswaById: async(id) => {
        const response = await fetch(`${API_URL}/admin/mahasiswa/get_mahasiswa/${id}`, {
            method : 'GET',
            headers: getAuthHeaders()
        });
        if (!response.ok) {
            throw new Error('Gagal mengambil data mahasiswa');
        }
        return response.json();
    }

    createDataMahasiswa: async(id) => {
        const response = await fetch(`${API_URL}/admin/mahasiswa/add_data_mahasiswa`,{
            method: 'POST',
            headers: getAuthHeaders()
        });
        if (!response.ok) {
            throw new Error('Gagal Mengambil data mahasiswa');
        }
        return response.json();
    }

    updateDataMahasiswa: async(id) => {
        const response = await fetch(`${API_URL}/admin/mahasiswa/update_data_mahasiswa/${id}`,{
            method: 'PUT',
            headers: getAuthHeaders()
        });
        return response.json();
    }

    deleteDataMahasiswa: async(id) => {
        const response = await fetch(`${API_URL}/admin/mahasiswa/delete_data_mahasiswa/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        return response.json();
    }
}