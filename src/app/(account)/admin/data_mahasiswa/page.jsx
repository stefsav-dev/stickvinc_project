import { useState } from "react";
import AdminLayout from "../utility/AdminLayout";
import { useCreateMahasiswa, useDeleteMahasiswa, useMahasiswa, useUpdateMahasiswa } from "@/app/hooks/userMahasiswa";

export default function DataMahasiswaPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'mahasiswa',
    });
    const [editingId, setEditingId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const {
        data: mahasiswaData,
        isLoading,
        error,
        refetch
    } = useMahasiswa();

    const createMutation = useCreateMahasiswa();
    const updateMutation = useUpdateMahasiswa();
    const deleteMutation = useDeleteMahasiswa();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            if (editingId) {
                await updateMutation.mutateAsync(
                    {id: editingId, data: formData}
                );
            } else {
                await createMutation.mutateAsync(formData);
            }
            resetForm();
            setShowModal(false);
        } catch (error) {
            console.error('Error : ', error);
            alert(error.message || 'Terjadi Kesalahan');
        }
    };

    const handleEdit = (mahasiswa) => {
        setFormData({
            name: mahasiswa.name,
            email: mahasiswa.email,
            password: '',
            role: mahasiswa.role
        });
        setEditingId(mahasiswa.id);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (confirm('Apakah anda yakin ingin menghapus data mahasiswa ini?')) {
            try {
                await deleteMutation.mutateAsync(id);
                alert('Data mahasiswa berhasil dihapus');
            } catch (error) {
                alert(error.message || 'Gagal menghapus data');
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            role: 'mahasiswa'
        });
        setEditingId(null);
    }

    return (
            <AdminLayout>
                <div className="container mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Data Mahasiswa</h1>
                            <p className="mt-2 text-gray-600">
                                Kelola data mahasiswa Stikvinc
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={()=> refetch()}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-500"
                            >
                                Refresh
                            </button>
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Tambah Mahasiswa
                            </button>
                        </div>
                    </div>

                    {/* Loading State */}

                    {isLoading && (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            <p>Error : {error.message}</p>
                            <button
                                onClick={() => refetch()}
                                className="mt-2 bg-red-600 text-white px-3 py-1 rounded text-sm"
                            >
                                Coba Lagi
                            </button>
                        </div>
                    )}

                    {/* Tabel Data Mahasiswa */}
                    {!isLoading && !error && (
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nama
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email 
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                   <tbody className="bg-white divide-y divide-gray-200">
                {mahasiswaData?.data?.length > 0 ? (
                  mahasiswaData.data.map((mahasiswa) => (
                    <tr key={mahasiswa.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {mahasiswa.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{mahasiswa.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          mahasiswa.role === 'admin' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {mahasiswa.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEdit(mahasiswa)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                          disabled={updateMutation.isPending}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(mahasiswa.id)}
                          className="text-red-600 hover:text-red-900"
                          disabled={deleteMutation.isPending}
                        >
                          {deleteMutation.isPending ? 'Menghapus...' : 'Hapus'}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                      Tidak ada data mahasiswa
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal Form */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">
                {editingId ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama mahasiswa"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password {editingId && '(Kosongkan jika tidak ingin mengubah)'}
                    </label>
                    <input
                      type="password"
                      required={!editingId}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan password"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                    disabled={createMutation.isPending || updateMutation.isPending}
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={createMutation.isPending || updateMutation.isPending}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {createMutation.isPending || updateMutation.isPending 
                      ? 'Menyimpan...' 
                      : editingId ? 'Update' : 'Simpan'
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
