import { httpClient } from "@/lib/httpClient"

export const TenantService = {
    listTenants: async () => {
        const result = await httpClient.get('/tenants')
        return result.data.data;
    }
}