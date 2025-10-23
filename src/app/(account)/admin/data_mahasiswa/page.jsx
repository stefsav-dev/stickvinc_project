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
        <>
            <AdminLayout>
                <h1 className="text-2xl font-bold">Data Mahasiswa</h1>
                <p className="mt-2 text-muted-foreground">
                    Halaman Data Mahasiswa
                </p>
            </AdminLayout>
        </>
    )
}