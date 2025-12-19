    import { useState } from "react";

    export function useApi<T>() {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);

        async function request(url : string, options?: RequestInit): Promise<T | null> {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(url, options);
                if (!res.ok) throw new Error(`Error: ${res.status}`);
                const data = await res.json();
                return data as T;
            }
            catch (err: any) {
                setError(err.message);
                return null;
            }
            finally {
                setLoading(false);
            }
        }

        return {request, loading, error};
    }