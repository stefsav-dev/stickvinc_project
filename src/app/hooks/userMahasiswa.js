import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { mahasiswaService } from '@/app/admin/data_mahasiswa/.api/apiDataMahasiswa';

export const mahasiswaKeys = {
    all: ['mahasiswa'],
    lists: () => [...mahasiswaKeys.all, 'list'],
    list: (filters) => [...mahasiswaKeys.lists(), {filters}],
    details: () => [...mahasiswaKeys.all, 'detail'],
    detail: (id) => [...mahasiswaKeys.details(), id],
}

export const useMahasiswa = () => {
    return useQuery({
        queryKey: mahasiswaKeys.lists,
        queryFn: () => mahasiswaService.getAllDataMahasiswa(),
        staleTime: 5 * 60 * 1000,
    });
};

export const useMahasiswaById = (id) => {
    return useQuery({
        queryKey: mahasiswaKeys.detail(id),
        queryFn: () => mahasiswaService.getMahasiswaById(id),
        enabled: !!id,
    });
};


export const useCreateMahasiswa = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => mahasiswaService.createDataMahasiswa(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: mahasiswaKeys.lists() });
        },
    });
};

export const useUpdateMahasiswa = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, data}) => mahasiswaService.updateDataMahasiswa(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: mahasiswaKeys.detail(variables.id)});
            queryClient.invalidateQueries({ queryKey: mahasiswaKeys.lists()});
        },
    });
};

export const useDeleteMahasiswa = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => mahasiswaService.deleteDataMahasiswa(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: mahasiswaKeys.lists()});
        }
    });
}
